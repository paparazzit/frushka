function Map_points(map_container, list_cont, map_section) {
	this.map_section = document.querySelector(`#${map_section}`);
	this.map_container = document.querySelector(`#${map_container}`);
	this.list_container = document.querySelector(`.${list_cont}`);
	this.lamele = this.map_container.querySelectorAll(".lamele");
	this.points = this.map_container.querySelectorAll(".point_wrapper");
	let list_itms = this.list_container.querySelectorAll(".location");
	let lamela_card = document.querySelector("#lamela_info");
	let lamelaCardInfo = [
		{
			hdl: "Fruske Residence",
			hdl2: "Premium kondo naselje",
			text: "<p>Fruške Residence se sastoji od 140 apartmana, za ličnu upotrebu ili za izdavanje – izbor je isključivo Vaš!</p> <p>Apartmani nude udobnost i potpuni komfor za svakodnevni život, ali na drugačiji način od života u gradu.</p>",
			img: "assets/map/lamela-1.png",
		},
		{
			hdl: "Fruske Apartmani",
			hdl2: "Premium zgrada sa apartmanima",
			text: "<p>TEXT 2 se sastoji od 140 apartmana, za ličnu upotrebu ili za izdavanje – izbor je isključivo Vaš!</p> <p>KONDO MONDOnude udobnost i potpuni komfor za svakodnevni život, ali na drugačiji način od života u gradu.</p>",
			img: "assets/map/lamela-2.png",
		},
	];
	let height = 0;
	let width = 0;

	this.reszieMap = function () {
		height = this.map_container.offsetHeight;
		width = this.map_container.offsetWidth;
		let box_height = Math.floor(height * 0.055);
		let box_width = Math.floor(height * 0.125);
		this.lamele.forEach((lamela) => {
			lamela.style.width = box_width + "px";
			lamela.style.height = box_height + "px";
		});

		this.points.forEach((point, index) => {
			let num = point.getAttribute("data-point");
			let point_num = point.children[1];
			let point_width = Math.floor(height * 0.048);
			let point_height = Math.floor(height * 0.06);
			let top = (point.style.top = point.getAttribute("data-top") + "%");
			let left = (point.style.left = point.getAttribute("data-left") + "%");
			point.style.width = point_width + "px";
			point.style.height = point_height + "px";
			point_num.innerText = num;
			point_num.style.fontSize = point_width * 0.75 + "px";
			point.addEventListener("mouseenter", () => {
				list_itms[index].classList.add("active");
				point.classList.add("hovering");
			});
			point.addEventListener("mouseleave", () => {
				list_itms[index].classList.remove("active");
				point.classList.remove("hovering");
			});
		});
	};
	list_itms.forEach((location, index) => {
		location.addEventListener("mouseenter", () => {
			this.points[index].classList.add("hovering");
		});
		location.addEventListener("mouseleave", () => {
			this.points[index].classList.remove("hovering");
		});
	});
	let lamelaInfo = function (lml) {
		// console.log(lml.target);
		let currentItm = lml.id;

		if (currentItm === "lamela_1") {
			createLamelaCard(lamelaCardInfo[0]);
		} else {
			createLamelaCard(lamelaCardInfo[1]);
		}
	};

	this.map_section.addEventListener("click", (e) => {
		if (e.target.classList.contains("lamele")) {
			let currentLamela = e.target;

			lamelaInfo(currentLamela);
		} else {
			lamela_card.classList.remove("show_info");
		}
	});

	function createLamelaCard(info) {
		lamela_card.classList.remove("show_info");
		let naslov1 = lamela_card.querySelector("h3");
		let naslov2 = lamela_card.querySelector(".subHeading");
		let img = lamela_card.querySelector(".img-wrapper img");
		let text = lamela_card.querySelector(".card_text");
		let card_text = info.text;

		setTimeout(() => {
			lamela_card.classList.add("show_info");
			naslov1.innerText = info.hdl;
			naslov2.innerText = info.hdl2;
			img.setAttribute("src", info.img);

			text.innerHTML = info.text;
		}, 500);
	}
}
