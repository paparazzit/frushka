let more_less = document.querySelector(".more_less");

let apartmani_table = document.querySelector(".apartman_table");
let lamele_table = document.querySelector(".lamela_table");
let contact_form = document.querySelector(".contact_form");
let drop_row = document.querySelector("#drop_row");

more_less.addEventListener("click", show_more_info);

// IZVRTI LAMELE:

let lml_container = document.querySelector("#opt_lml");
let tip_container = document.querySelector("#opt_tip");

setOpt_selectors();
function setOpt_selectors() {
	setOptTable(lamele, lml_container);
	setOptTable(tipovi, tip_container);
}
function setOptTable(data, container) {
	for (let i = 0; i < data.length; i++) {
		let current_itm = data[i];
		let current_prop;

		let props = Object.keys(current_itm);
		current_prop = Object.values(current_itm);

		let input_opt = document.createElement("input");
		let option_div = document.createElement("div");
		let lml_label = document.createElement("label");
		option_div.className = "option";
		option_div.setAttribute("data-itm", `${i}`);
		option_div.setAttribute("data-type", `${props[0]}`);
		input_opt.className = "radio";
		input_opt.setAttribute("type", "radio");
		input_opt.id = `${props[0]}_${i + 1}`;
		lml_label.setAttribute("for", `${props[0]}_${i + 1}`);

		input_opt.setAttribute("name", `${props[0]}`);
		option_div.appendChild(input_opt);
		option_div.appendChild(lml_label);
		container.appendChild(option_div);

		lml_label.innerText = current_prop[0];
	}
}

function show_more_info() {
	console.log(lamele_table.offsetHeight);
	if (this.getAttribute("data-toggle") === "false") {
		this.setAttribute("data-toggle", "true");
		drop_row.classList.add("show_more");
		apartmani_table.classList.add("show_more");
		lamele_table.classList.add("show_more");

		this.innerText = "Manje Detalja";
	} else {
		drop_row.classList.remove("show_more");
		apartmani_table.classList.remove("show_more");
		lamele_table.classList.remove("show_more");

		this.innerText = "Vise Detalja";
		this.setAttribute("data-toggle", "false");
	}
}

// APARTMANI SELECT DROP DOWN

window.addEventListener("click", detect_drop);
let option_container = document.querySelectorAll(".select_container");
function detect_drop(e) {
	const isDropDownButton = e.target.matches("[data-drop-button");
	if (!isDropDownButton) {
		close_opt();
		return;
	} else {
		let current_list = e.target.previousElementSibling;

		e.target.parentElement.classList.toggle("active");
		// console.log(e.target.previousElementSibling);
		let opt_height = getHeight(e.target.previousElementSibling);
		current_list.classList.toggle("active_drop");
		if (current_list.classList.contains("active_drop")) {
			current_list.style.maxHeight = opt_height + "px";
			getSelected(e.target.parentElement);
		} else {
			current_list.removeAttribute("style");
		}
	}
}
function getSelected(element) {
	let opts = element.querySelectorAll(".option");

	opts.forEach((opt) => {
		opt.addEventListener("click", getSelection);
	});
}

function getSelection() {
	let current_opt = this.innerText;
	let parent = this.parentElement.parentElement;
	let current_selected = parent.children[1];
	current_selected.innerText = current_opt;

	if (this.getAttribute("data-type") === "tip") {
		apartmani(tipovi[this.getAttribute("data-itm")]);
	} else {
		lamele_info(lamele[this.getAttribute("data-itm")]);
	}
}

function getHeight(element) {
	let opt_height = 0;

	let options = element.querySelectorAll(".option");
	options.forEach((opt) => {
		opt_height += opt.offsetHeight;
	});
	return opt_height;
}

function close_opt() {
	let active = document.querySelectorAll(".select_container.active");
	let activeDrop = document.querySelectorAll(".select_container .active_drop");
	active.forEach((act) => {
		act.classList.remove("active");
	});
	activeDrop.forEach((act) => {
		act.classList.remove("active_drop");
	});
}

let apar_forms = document.querySelector("form.options");

// OPIS APARTMANA

function apartmani(apartman) {
	// console.log(apartman);
	let sobe;
	let br_soba;
	let povrsinaSobe;
	let povrsina_total = 0;
	let imeSobe;
	let pod;
	for (const prop in apartman) {
		sobe = apartman[prop];
		// console.log(prop, ":", sobe);
	}
	br_soba = Object.keys(sobe).length;

	for (const prop in sobe) {
		imeSobe = sobe[prop].soba;
		povrsinaSobe = sobe[prop].povrsina;
		pod = sobe[prop].pod;
		povrsina_total += parseInt(povrsinaSobe);
		console.log(
			"Sobe: ",
			imeSobe,
			"Povrsina: ",
			povrsinaSobe,
			"m2",
			"pod: ",
			pod
		);
	}

	console.log(povrsina_total);
}

function lamele_info(lamele) {
	console.log(lamele);
}
