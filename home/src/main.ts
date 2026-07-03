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
	const date = () => new Date("2026-07-03T12:00:00Z").toLocaleDateString();
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
	let trumpetTruckURLs = {
		Spotify: "https://open.spotify.com/album/7Cn019R2XVT1IIkzqFTTku",
		Apple_Music:
			"https://music.apple.com/ca/album/trumpet-truck-single/6780703535",
		YouTube_Music:
			"https://music.youtube.com/playlist?list=OLAK5uy_mLk-78VLWTJhAY_hyEisL71oMp2FhKjv8",
		Tidal: "https://tidal.com/album/533801280",
		Amazon_Music: "https://music.amazon.com/albums/B0H5J1G6S6",
		"No deezer :(": null,
		Pandora:
			"https://www.pandora.com/artist/pineapplerind/trumpet-truck/AL66pnzK3hh2jlw",
	};

	//2lazy2generalizethis
	const select = $("#artistPage");
	const $TRUMPETTRUCKYAY = $("#trumpetTruckSelect");

	for (const key in artistURLs) {
		const opt = document.createElement("option");
		opt.innerText = key.replaceAll("_", " ");
		opt.value = key;
		select.append(opt);
	}
	for (const key in trumpetTruckURLs) {
		const opt = document.createElement("option");
		opt.innerText = key.replaceAll("_", " ");
		opt.value = key;
		$TRUMPETTRUCKYAY.append(opt);
	}

	select.oninput = () => {
		const url = artistURLs[select.value];
		if (url) window.open(url, "_blank");
	};
	$TRUMPETTRUCKYAY.oninput = () => {
		const url = trumpetTruckURLs[$TRUMPETTRUCKYAY.value];
		if (url) window.open(url, "_blank");
	};
})();
