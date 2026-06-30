const amdgStartingPoint = document.querySelector(
	"#amdg",
) as HTMLParagraphElement;
const amdgTarget = document.querySelector(
	"#amdgInitialTarget",
) as HTMLParagraphElement;
const amdgBackground = document.querySelector(
	".background-amdg-container",
) as HTMLDivElement;
const amdgAnimationSettings = {
	duration: 900,
	fill: "forwards" as FillMode,
	easing: "cubic-bezier(.24,0,.15,1)",
};
let amdgAnimationOngoing = false;
let amdgAnimationRunCount = 0;

function createElement(
	type: string,
	attrs?: Record<string, string>,
	value?: string,
) {
	let el = document.createElement(type);
	if (attrs) for (const key in attrs) el.setAttribute(key, attrs[key]);
	el.innerHTML = value || "";
	return el;
}

amdgStartingPoint.onclick = () => {
	if (amdgAnimationOngoing) return;
	amdgAnimationOngoing = true;
	amdgAnimationRunCount++;
	completeAMDGTransition();
};
async function completeAMDGTransition() {
	amdgBackground.removeAttribute("inert");
	const reducedMotion = window.matchMedia(
		"(prefers-reduced-motion: reduce)",
	).matches;
	if (!reducedMotion) {
		const newElement = await transitionToUp();
		// Solidification is necessary because
		// the transition relies on text-align center.
		// This is conceptually easier to behold.
		const solidified = await solidifyNewElement(newElement);
		await expandText(solidified);
		await fadeOutSolidified(solidified);
	} else {
		await clearTheStage();
		showRealOne();
	}
	amdgAnimationOngoing = false;
	let listener = (e: Event) => {
		console.log(e);
		if (e.type === "keydown" && e.code !== "Escape") return;
		if (amdgAnimationOngoing) return;
		amdgBackground.animate(
			[{ opacity: 1 }, { opacity: 0 }],
			amdgAnimationSettings,
		);
		(
			document.querySelector(".wrapper-amdg-container") as HTMLDivElement
		).animate([{ opacity: 1 }, { opacity: 0 }], amdgAnimationSettings);
		amdgStartingPoint.style.visibility = "visible";
		fadeIn(amdgStartingPoint);
		amdgBackground.setAttribute("inert", "");
		window.removeEventListener("pointerup", listener);
	};
	amdgBackground.addEventListener("pointerup", listener);
	window.addEventListener("keydown", listener);
}
async function transitionToUp() {
	const current = amdgStartingPoint.getBoundingClientRect();
	const to = amdgTarget.getBoundingClientRect();

	const newElement = createElement(
		"p",
		{
			class: "amdg",
			style: `position: fixed; top: ${current.y}px; left: ${current.x}px; text-align: center;`,
			"data-solidified": "no",
		},
		amdgStartingPoint.innerHTML,
	);
	document.body.append(newElement);

	await clearTheStage();

	const animation = newElement.animate(
		[
			{
				top: current.y + "px",
				left: current.x + "px",
				width: current.width + "px",
			},
			{ top: to.y + "px", left: to.x + "px", width: to.width + "px" },
		],
		amdgAnimationSettings,
	);
	Array.from(newElement.querySelectorAll("span")).forEach(async (span) => {
		const a = span.animate(
			[{ opacity: 1 }, { opacity: 0 }],
			amdgAnimationSettings,
		);
		await a.finished;
		span.style.opacity = "0";
	});
	await animation.finished;
	return newElement;
}

async function clearTheStage() {
	const a = amdgBackground.animate(
		[{ opacity: 0 }, { opacity: 1 }],
		amdgAnimationSettings,
	);
	await a.finished; // obscure else b4 moving up

	amdgStartingPoint.style.visibility = "hidden";
}

function solidifyNewElement(newElement: HTMLElement) {
	const solidified = createElement(
		"p",
		{
			style:
				"text-align: center; top: 50%; position: fixed; translate: 0 -100%; width: 100%",
			class: "amdg",
			"data-solidified": "yes",
		},
		newElement.innerHTML,
	);

	document.body.append(solidified);
	newElement.remove();
	return solidified;
}

async function expandText(element: HTMLElement) {
	const spans = element.querySelectorAll("span");
	const targets = amdgTarget.querySelectorAll("span");
	const targetBCRs = Array.from(targets).map((t) => t.getBoundingClientRect());
	console.log("yeah");
	const text = ["d", "aiorem", "ei", "loriam"];
	const promises: Promise<Animation>[] = [];
	for (const [i, span] of Array.from(spans).entries()) {
		const current = span.getBoundingClientRect();
		span.style.width = current.width + "px";
		span.innerHTML = text[i] + " ";
		span.animate(
			[
				{ width: current.width + "px", opacity: "0" },
				{ width: targetBCRs[i].width + "px", opacity: "0" },
			],
			{
				...amdgAnimationSettings,
				delay: i * -100 + text.length * 100,
			},
		);

		const a = span.animate(
			[
				{ opacity: "0", translate: "0 10px" },
				{ opacity: "1", translate: "0 0px" },
			],
			{
				...amdgAnimationSettings,
				delay: amdgAnimationSettings.duration * (i + 1),
			},
		);
		promises.push(a.finished);
	}
	return await Promise.all(promises);
}

async function fadeOutSolidified(solidified: HTMLElement) {
	const solidanimation = solidified.animate([{ opacity: 1 }, { opacity: 0 }], {
		...amdgAnimationSettings,
		easing: "ease",
		delay: 300,
	});

	showRealOne();

	await solidanimation.finished;
	solidified.remove();
}
function showRealOne() {
	amdgTarget.parentElement!.style.visibility = "visible";
	fadeIn(amdgTarget.parentElement!);

	setTimeout(() => {
		helpfulSibling();
	}, 5000);
}

function helpfulSibling() {
	let helpfulSibling = document.querySelector(
		".helpful-amdg-exit-notice-frater",
	) as HTMLElement;
	if (!helpfulSibling) {
		helpfulSibling = createElement("small", {
			class: "helpful-amdg-exit-notice-frater",
		});
		amdgTarget.parentElement!.append(helpfulSibling);
	} else fadeIn(helpfulSibling, { duration: 2000 });

	let thatMessageGutenburg = "Click / tap anywhere to exit";
	if (amdgAnimationRunCount >= 3 * 1)
		thatMessageGutenburg = "You know the drill:)";
	if (amdgAnimationRunCount >= 3 * 2)
		thatMessageGutenburg = 'Check out "marimba" by favbea - good song';
	if (amdgAnimationRunCount >= 3 * 3)
		thatMessageGutenburg = "There are no other secret messages";
	if (amdgAnimationRunCount === Math.PI)
		thatMessageGutenburg =
			"Look at you browsing the code. I wasn't lying. (except for this message - but most people can't see this.)";
	helpfulSibling.innerText = thatMessageGutenburg;
}

function fadeIn(element: Element, additionalOptions: any = {}) {
	return element.animate([{ opacity: 0 }, { opacity: 1 }], {
		...amdgAnimationSettings,
		easing: "ease",
		...additionalOptions,
	});
}
