let window_heigh, window_width, window_scroll;
let def = document.querySelector("#default");
let slider1 = document.querySelector("#mySlide1");
let slider_1;
let slider_2;
let slider2 = document.querySelector("#mySlide2");
let map_1;
let map_section_1 = document.querySelector("#map_container");
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
	if (map_section_1) {
		map_1.reszieMap();
	}
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
	if (map_section_1) {
		map_1.reszieMap();
	}
	blur_img();
	// resizeBodyHeight();
}

// #region Map

if (map_section_1) {
	map_1 = new Map_points("map_container", "map-legend", "map-section");
}

// #endregion

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

// APARTMANI
function apartmani_set() {
	let card_lml_points = document.querySelectorAll(".card_pointer");
	if (window.scrollY > 150) {
		console.log("EVO GA");
		card_lml_points.forEach((card_point) => {
			card_point.classList.add("point_active");
		});
	} else {
		card_lml_points.forEach((card_point) => {
			card_point.classList.remove("point_active");
		});
	}
}

// Functions

window.addEventListener("load", start);
window.addEventListener("resize", resize);
window.addEventListener("scroll", () => {
	let ws = window.scrollY;

	paralax(paralax_items, ws);
	apear_In(apear_items, ws);
	apartmani_set();
});

// PROJECT
