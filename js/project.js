let progress = document.querySelectorAll(".prog");
let project_img = document.querySelector(".project_img");
let proj_prev = document.querySelector(".progress .prev");
let proj_next = document.querySelector(".progress .next");
let sl_text = document.querySelector("#card_text");
index = 1;
proj_next.addEventListener("click", nextProj);
proj_prev.addEventListener("click", prevProj);

function nextProj() {
	index++;
	if (index > 2) {
		index = 2;
	}
	console.log(index);
	this.children[0].style.minWidth = "100%";
	this.children[0].style.maxWidth = "100%";
	project_img.children[index - 2].style.opacity = "0";
	project_img.children[index - 1].style.opacity = "1";
	sl_text.innerText =
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem ratione nam architecto cumque praesentium ullam voluptates, sapiente ut blanditiis laborum consequatur consectetur culpa laboriosam nostrum nulla! Dolores quam et vel.";
}
function prevProj() {
	if (index > 1) {
		index--;
	} else {
		index = 1;
	}
	console.log(index);
	this.nextElementSibling.children[0].style.minWidth = "0%";
	this.nextElementSibling.children[0].style.maxWidth = "0%";
	project_img.children[index - 1].style.opacity = "1";
	project_img.children[index].style.opacity = "0";
	sl_text.innerText =
		"Nakon nekoliko uspešnih projekata u oblasti hotelijerstva, nastavljamo da gradimo budućnost. U srcu Fruške gore, na samo 40 km od Novog Sada i 103 km od Beograda, nalazi se kompleks apartmana za stanovanje sa brojnim pogodnostima, koje život čine zdravijim i lepšim. Fruške Residence Vam pružaju svakodnevno uživanje u čistom planinskom vazduhu i zelenilu. ";
}

// SLIDER
