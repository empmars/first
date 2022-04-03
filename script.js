const oldProfDiv = document.getElementById("oldLoggedProf");
const crossIcon = document.getElementsByClassName("cross")[0];
const profileList = document.querySelector("profileList")

oldProfDiv.addEventListener("mouseover", () => {
	crossIcon.style.fontSize = "20px";
	crossIcon.style.color = "white";
	crossIcon.style.background = "black"
	crossIcon.style.margin = "0.3% 0% 0% 0%";
});

oldProfDiv.addEventListener("mouseleave", () => {
	crossIcon.style.fontSize = "1.01em";
	crossIcon.style.color = "#545453";
	crossIcon.style.background = "white";
	crossIcon.style.margin = "0.5% 0% 0% 0.5%";
});


crossIcon.addEventListener("onclick", () => {
	profileList.removeChild(oldProfDiv);
});

