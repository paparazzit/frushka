let more_less = document.querySelector(".more_less");

let apartmani_table = document.querySelector(".apartman_table");
let lamele_table = document.querySelector(".lamela_table");
let contact_form = document.querySelector(".contact_form");
let drop_row = document.querySelector("#drop_row");
more_less.addEventListener("click", show_more_info);

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
