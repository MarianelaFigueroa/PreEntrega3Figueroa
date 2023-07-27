(function() {
	function toggleNavMenu(){
		let navMenu = document.getElementById("nav");
		if (navMenu.className.indexOf("selected")==-1) navMenu.className += " selected";
		else navMenu.className = navMenu.className.replaceAll("selected", "");
	}

	window.addEventListener("load", () => {
		document.getElementById("navButton").addEventListener("mousedown", toggleNavMenu);		
	});
})();