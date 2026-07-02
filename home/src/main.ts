/* This comment is NOt a complaint about code quality, for it does not matter at this time.
 */
import { $, $$ } from "./util";
import "./amdg.ts";
import "./ai.ts";

/********* animation *********/
for (const [i, element] of Array.from(
	$$("p, li, h2, .animate-hidden"),
).entries()) {
	element.classList.add("animate", "animate-hidden");
	setTimeout(
		() => {
			element.classList.remove("animate-hidden");
		},
		(i + 5) * 30,
	);
}

(() => {
	if (window.location.pathname !== "/") return;
	const date = () => new Date("2026-06-30T18:00:00Z").toLocaleDateString();
	$("#insertDateHerePls").innerText = date();

	let artistURLs = {
		Spotify: "https://open.spotify.com/artist/1mxdLhD07JVKCqNvbzW3l0",
		Apple_Music: "https://music.apple.com/artist/pineapplerind/1606851499",
		YouTube_Music: "https://music.youtube.com/channel/UCHBF_eoWre9Um353fOxayww",
		Tidal: "https://tidal.com/browse/artist/30355280",
		"Amazon_Music (incomplete)":
			"https://music.amazon.com/artists/B09R3S4YDW/pineapplerind",
		"Deezer (incomplete)": "https://www.deezer.com/artist/158442482",
		Pandora: "https://www.pandora.com/artist/pineapplerind/ARgXdmk9wgPVqbX",
	};

	const select = $("#artistPage");
	for (const key in artistURLs) {
		const opt = document.createElement("option");
		opt.innerText = key.replaceAll("_", " ");
		opt.value = key;
		select.append(opt);
	}
	select.oninput = (e) => {
		const { value } = select;
		const url = artistURLs[value];
		window.open(url, "_blank");
	};
})();
