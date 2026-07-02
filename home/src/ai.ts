import { $, createElement } from "./util";
const p = createElement.bind(this, "p", null);
const closeButton = createElement("button", { class: "close" }, "&times;");
const unlockable = createElement("div", { class: "unlockable" }, [
	...[
		'AI is actually <i>not all slop</i>, and "unlocking the power of" AI (or "leveraging" such "power") can produce a usable product with less effort. However, considering exactly <em>what is lost</em> is a step too many are missing.',
		'Work "expresses and enhances the dignity of our lives. It is a requirement of the human condition, a normal path toward maturity, development and personal fulfilment."<span name="Leo XIV, Magnifica Humanitas, 149">¹</span> Any erasure of work should come with this awareness. It is true that AI most often does not erase all work. It, however, adds a mysterious layer between you and what is to be done, so that one is less able to say that the result is truly his; and as a result the normally consequent "personal fulfilment" becomes less personal and less fulfilling.',
		"This is not an advocation for the destruction of generative AI. If it were, I would also argue for the elimination of the dishwasher, vacuum cleaner, and clothes dryer. This notice is a request for awareness. Be aware of what you lose by using any of these technological innovations. Know what drying clothes is like without a magic spinning cuboid furnace, and know that it supplanted the clothesline <i>and</i> its daily neighborly interactions.",
		"And further: don't be afraid to <em>choose to lose out on efficiency</em>. Efficiency is not something to which you might sacrifice unreservedly, just as GDP should not be the indicator of a country's success. The path of least resistance has always been tempting. But imagine taking it <i>all the time.</i> Boring, eh? <dim>(and it would be conceding defeat to determinism - how human is that??)</dim>",
	].map((x) => p(x)),
	createElement("div", { class: "citation-rule" }),
	p("1. Leo XIV, Magnifica Humanitas, 149"),
]);
unlockable.onclick = () => {
	unlockable.classList.add("unlocked");
};
const articleContent = [
	createElement("h2", { style: "margin-bottom: 2rem" }, [
		createElement("span", null, "AI Notice"),
		closeButton,
	]),
	createElement(
		"blockquote",
		null,
		"I leveraged the power of AI to revolutionize my workflow. AI isn't just the future—it's now. Here are 15 prompts that will 10x your productivity:",
	),
	p("Kidding..."),
	p(
		"Anyway, here's the notice... <em>No generative artificial intelligence was used or applied in any portion of the ideation or construction of this website.</em></dim>",
	),
	unlockable,
];

const aiNotice = createElement(
	"div",
	{ class: "screening-background" },
	createElement("article", null, articleContent),
);

let aiNoticeOpen = false;
$("#aiNotice").onclick = () => {
	openAiNotice();
	aiNoticeOpen = true;
};
closeButton.onclick = () => {
	closeAiNotice();
};
function openAiNotice() {
	if (aiNoticeOpen) return;
	aiNotice.style.opacity = "1";
	document.body.append(aiNotice);
}
function closeAiNotice() {
	aiNotice.style.opacity = "0";
	aiNotice.ontransitionend = () => {
		aiNoticeOpen = false;
		aiNotice.remove();
		aiNotice.ontransitionend = () => null;
	};
}

window.addEventListener("keydown", (e) => {
	if (e.code === "Escape" && aiNoticeOpen) closeAiNotice();
});
