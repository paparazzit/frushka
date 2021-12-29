function Slider(slider) {
	if (slider) {
		this.slider = document.querySelector(`#${slider}`);
		this.btn_next = this.slider.querySelector(".next");
		this.btn_prev = this.slider.querySelector(".prev");
		this.items = this.slider.querySelectorAll(".item");
		this.items_container = this.slider.querySelector(".items_container");
		this.current_item = this.slider.querySelector("#curent_itm");
		this.total_items = this.slider.querySelector("#total_itm");
		this.left = this.slider.querySelector(".touchLeft");
		this.right = this.slider.querySelector(".touchRight");
	} else {
		console.log("nema ga");
	}
	this.index = 0;
	this.totla_count = 0;
	// SIZES
	this.width = 0;
	this.height = 0;
	this.resizeDims = {};
	this.total_width = 0;
	this.slideIndex = 0;
	this.item_width = 0;
	this.item_height = 0;

	// SET SIZE
	this.setSize = function () {
		this.width = this.slider.offsetWidth;
		if (this.width > 900) {
			this.slideDims = { perPage: 3, slideRadio: 0 };
		} else if (this.width < 900 && this.width > 470) {
			this.slideDims = { perPage: 2, slideRadio: 1 };
		} else {
			this.slideDims = { perPage: 1, slideRadio: 2 };
		}
		return this.slideDims;
	};
	// START
	this.start = function () {
		this.resizeDims = this.setSize();
		this.mySlider(this.resizeDims);
		this.setCounts();
	};
	this.btn_next.addEventListener("click", () => {
		this.nextSlide(this.resizeDims);
	});
	this.btn_prev.addEventListener("click", () => {
		this.prevSlide();
	});
	this.left.addEventListener("click", () => {
		this.prevSlide();
	});
	this.right.addEventListener("click", () => {
		this.nextSlide(this.resizeDims);
	});

	// SET SLIDER WIDTH

	this.mySlider = function (perPage) {
		this.items.forEach((item, idx) => {
			item.style.flex = `0 0 ${this.width / perPage.perPage}px`;
			item.style.width = `${this.width / perPage.perPage}px`;
			this.item_width = item.offsetWidth;
			this.item_height = (704 / 640) * this.item_width;
			item.style.height = (704 / 640) * this.item_width + "px";

			this.index = idx;
		});
		this.total_count = this.index;
		this.items_container.style.width =
			this.item_width * (this.index + 1) + this.index * 20 + "px";
		this.total_items.innerText = "0" + (this.total_count + 1);
	};
	this.setCounts = function () {
		this.curentItem = "0" + (this.index + 1);
	};
	this.nextSlide = function (perPage) {
		this.slideIndex++;
		let slide = (this.index + 1) / 2 + perPage.slideRadio;

		if (this.slideIndex > slide) {
			this.slideIndex = 0;
		}

		this.current_item.innerText = "0" + (this.slideIndex + 1);

		this.changeSlide(this.slideIndex);
	};
	this.prevSlide = function () {
		this.slideIndex--;
		if (this.slideIndex < 0) {
			this.slideIndex = 0;
		}
		this.current_item.innerText = "0" + (this.slideIndex + 1);
		this.changeSlide(this.slideIndex);
	};

	this.changeSlide = function (slideIndex) {
		this.items_container.style.marginLeft =
			-(this.item_width * slideIndex + 20 * slideIndex) + "px";
	};
}
