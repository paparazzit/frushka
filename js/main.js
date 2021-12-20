let window_heigh, window_width, window_scroll;
let def = document.querySelector("#default");
let slider1 = document.querySelector("#mySlide1");
let slider_1;
let slider_2;
let slider2 = document.querySelector("#mySlide2");
if (slider2) {
	slider_2 = new Slider("slider2");
}
if (slider1) {
	slider_1 = new Slider("slider1");
}

function start() {
	window_width = def.offsetWidth;
	window_heigh = def.offsetHeight;
	// console.log(window_width, window_heigh);
	mapResize();
	if (slider1) {
		slider_1.setSize();
		slider_1.start();
	}
	if (slider2) {
		slider_2.setSize();
		slider_2.start();
	}

	blur_img();

	// enableScroll();
	// resizeBodyHeight();
}

function resize() {
	start();
	mapResize();
	blur_img();
	// resizeBodyHeight();
}

function mapResize() {
	let cell = document.querySelector(".map-img");
	if (cell) {
		let cellHeight = cell.offsetHeight;
		let cellWidth = cell.offsetHeight;

		mapItemsDims(cellHeight, cellWidth);
	}
}

function mapItemsDims(cellHeight, cellWidth) {
	let lamele = document.querySelectorAll(".lamela");
	let lamelaInfo = document.querySelector(".card-lamela");
	let lamelaText = document.querySelector(".card-lamela article");
	let lamelaImg = document.querySelector(".img-wrapper");
	lamele.forEach((lamela) => {
		lamela.style.height = cellHeight * 0.06 + "px";
		lamela.style.width = cellWidth * 0.12 + "px";
		// lamela.addEventListener("click", showLamelaInfo);
	});
	// lamelaImg.style.width = lamelaInfo.offsetHeight + "px";
	// lamelaText.style.width =
	// 	lamelaInfo.offsetWidth - lamelaInfo.offsetHeight + "px";
	// console.log(lamelaInfo.offsetWidth);
}
let map_section = document.querySelector("#map-section");
if (map_section) {
	map_section.addEventListener("click", mapSectionControl);
}

function mapSectionControl(e) {
	let currentElem = e.target;

	if (currentElem.classList.contains("lamela")) {
		makeLamelaInfo(currentElem);
	} else if (!currentElem.hasAttribute("data-show")) {
		hide_lamela();
	}
}
function show_lamela() {
	let lamela_card = document.querySelector(".card-lamela");

	let all = lamela_card.getElementsByTagName("*");
	for (let i = 0; i < all.length; i++) {
		all[i].setAttribute("data-show", "false");
	}

	if (lamela_card.classList.contains("show_info")) {
		lamela_card.classList.remove("show_info");
		setTimeout(() => {
			lamela_card.classList.add("show_info");
		}, 300);
	} else {
		lamela_card.classList.add("show_info");
	}
}
function hide_lamela() {
	let lamela_card = document.querySelector(".card-lamela");
	lamela_card.classList.remove("show_info");
}
function makeLamelaInfo(lamela) {
	show_lamela();
	let lamelaData = [
		{
			title: "Fruške Residence",
			subtitle: "Premiere resort apartmani",
			text1:
				"Fruške Residence se sastoji od 140 apartmana, za ličnu upotrebu ili za izdavanje – izbor je isključivo Vaš!",
			text2:
				"Apartmani nude udobnost i potpuni komfor za svakodnevni život, ali na drugačiji način od života u gradu. ",
			img: "assets/map/lamela-1.png",
		},
		{
			title: "Fruški stanovi",
			subtitle: "Premiere resort stanovi",
			text1:
				"Fruške Residence se sastoji od 140 apartmana, za ličnu upotrebu ili za izdavanje – izbor je isključivo Vaš!",
			text2:
				"Apartmani nude udobnost i potpuni komfor za svakodnevni život, ali na drugačiji način od života u gradu. ",
			img: "assets/map/lamela-2.png",
		},
	];
	let lamela_title = document.querySelector(".l-title");
	let l_img = document.querySelector(".l-img");
	let l_subtitle = document.querySelector(".l-sub");
	let l_text_1 = document.querySelector(".text-1");
	let l_text_2 = document.querySelector(".text-2");
	let l_index = lamela.getAttribute("data-in");
	lamela_title.innerText = lamelaData[l_index].title;
	l_img.src = lamelaData[l_index].img;
	l_subtitle.innerText = lamelaData[l_index].subtitle;
	l_text_1.innerText = lamelaData[l_index].text1;
	l_text_2.innerText = lamelaData[l_index].text2;
}

// SLIDER

function blur_img() {
	let blur_container = document.querySelector(".videoSection");
	if (blur_container) {
		let blurImg = document.querySelector(".blured");
		let play_container = document.querySelector(".play_btn");
		let hg = document.querySelector(".overlay_hg");

		let b_height = blur_container.offsetHeight;
		let b_width = blur_container.offsetWidth;
		let b_top = blur_container.offsetTop;

		blurImg.style.height = b_height + "px";
		blurImg.style.width = b_width + "px";
		blurImg.style.top = 0 + "px";
	}

	// console.log(blurImg.offsetTop);
	// console.log(hg_top.top + play_cont_top.top);
}

// PARALAX
let paralax_items = document.querySelectorAll(".paralax_itm");
let apear_items = document.querySelectorAll(".apear_scroll");
function paralax(items, ws) {
	window_width = def.offsetWidth;
	window_heigh = def.offsetHeight;
	let el_pos_top = 0;

	items.forEach((item, index) => {
		let scroll_data = item.getAttribute("data-scroll");
		let paralax_direction = item.getAttribute("data-direction");
		el_pos_top = item.offsetTop;
		let scroll_effect = Math.ceil(
			10 + (scroll_data * (ws - el_pos_top)) / window_heigh
		);

		if (paralax_direction === "top") {
			item.style.marginTop = -scroll_effect + "px";
		} else if (paralax_direction === "left") {
			item.style.transform = `translate(${scroll_effect}px , -50%)`;
		} else if (paralax_direction === "bottom") {
			item.style.marginBottom = -scroll_effect + "px";
		}
	});
}

function apear_In(items, ws) {
	window_width = def.offsetWidth;
	window_heigh = def.offsetHeight;

	items.forEach((item, index) => {
		let item_pos = item.offsetTop;

		if (item_pos - window_heigh * 0.6 < ws) {
			// console.log(index, "IMAMO");
			item.classList.remove("opacity_0");
			item.classList.add("opacity_1");
		} else {
			item.classList.add("opacity_0");
			item.classList.remove("opacity_1");
			// console.log(index, "nemamo");
		}
	});
}

// window.onresize = () => {
// 	resizeBodyHeight();
// };

// window.onload = () => {
// 	enableScroll();
// 	resizeBodyHeight();
// };

// Functions

window.addEventListener("load", start);
window.addEventListener("resize", resize);
window.addEventListener("scroll", () => {
	let ws = window.scrollY;

	paralax(paralax_items, ws);
	apear_In(apear_items, ws);
});

// PROJECT
