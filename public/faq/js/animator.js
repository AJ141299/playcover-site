if (localStorage.getItem("visited") == null) {
	console.log("WORKING");
	localStorage.setItem("visited", true);

	themeBtn.classList.add("animate-bounce");
	setTimeout(() => {
		themeBtn.classList.remove("animate-bounce");
	}, 6000);

	themeBtnMob.classList.add("animate-pulse");
	setTimeout(() => {
		themeBtnMob.classList.remove("animate-pulse");
	}, 6000);
}
