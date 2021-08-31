const changelogTexts = Array.from(document.querySelectorAll(".changelog-text"));
const changelogRulers = Array.from(document.querySelectorAll(".changelog-ruler"));

for (i = 0; i < changelogRulers.length; i++) {
	let textHeight = changelogTexts[i].clientHeight;
	changelogRulers[i].style.height = `${textHeight - 12}px`;
}
