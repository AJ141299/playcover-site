if (localStorage.theme === "dark" || (!"theme" in localStorage && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
	document.querySelector("html").classList.add("dark");
}
