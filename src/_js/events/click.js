document.addEventListener("click", (e) => {
	switch (true) {
		case e.target.hasAttribute("data-class-toggle"): {
			const className = e.target.dataset.classToggle;
			e.target.classList.toggle(className);
			break;
		}
		case e.target.name === "getOrder":
			document.querySelector("#popup").classList.add("active");
			break;
		case e.target.name === "closePopup":
		case e.target.matches("#popup"):
			e.target.closest("#popup").classList.remove("active");
			break;

		default:
			break;
	}
});
