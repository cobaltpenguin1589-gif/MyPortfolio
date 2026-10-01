const randomButton = document.querySelector("#random-button");

randomButton.addEventListener("click", () => {
	document.body.classList.remove("rgb-flash");
	void document.body.offsetWidth;
	document.body.classList.add("rgb-flash");
});

document.body.addEventListener("animationend", (event) => {
	if (event.animationName === "rgb-screen-flash") {
		document.body.classList.remove("rgb-flash");
	}
});

