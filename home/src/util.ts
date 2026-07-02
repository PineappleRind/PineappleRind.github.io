export const $ = document.querySelector.bind(document);
export const $$ = (el: string): NodeListOf<Element> =>
	document.querySelectorAll(el);
export function createElement(
	type: string,
	attrs?: Record<string, string>,
	value?: string | Node | Node[],
) {
	let el = document.createElement(type);
	if (attrs) for (const key in attrs) el.setAttribute(key, attrs[key]);
	if (typeof value == "string") el.innerHTML = value;
	else if (typeof value == "undefined") return el;
	else el.append(...([] as Node[]).concat(value));

	return el;
}
