;(function(){
	const toggleModal = isActive => {
		let modal = document.getElementById("editModal");
		isActive ? modal.classList.remove("is-active") : modal.classList.add("is-active");
	};

	document.getElementById("editCharacter").addEventListener("click", e => {
		toggleModal(false);
		e.stopPropagation();
	});
	document.querySelector("#editModal .modal-background").addEventListener("click", e => {
		toggleModal(true);
		e.stopPropagation();
	});
	document.querySelector("#editModal .modal-close").addEventListener("click", e => {
		toggleModal(true);
		e.stopPropagation();
	});

	const rollDice = () => {
		let amt = Number(document.getElementById("diceAmt").value),
			sides = Number(document.getElementById("diceSides").value),
			mod = Number(document.getElementById("diceMod").value);

		if(amt === 1 && mod === 0) return randomIntFromRange(1, sides);
		
		let resultsArray = [],
			total = 0;

		for(let i = 0; i < amt; i++) {
			let roll = randomIntFromRange(1, sides);
			total += roll;
			resultsArray.push(roll);
		}
		
		if(mod === 0) {
			return "<p class=\"help\">" + resultsArray.join(" + ") + "&nbsp;=</p>" + total;
		} else if(mod < 0) {
			total += mod;
			return "<p class=\"help\">" + resultsArray.join(" + ") + " - " + Math.abs(mod) +  "&nbsp;=</p>" + total;
		} else {
			total += mod;
			resultsArray.push(mod);
			return "<p class=\"help\">" + resultsArray.join(" + ") + "&nbsp;=</p>" + total;
		}
	};

	const randomIntFromRange = (min, max) => {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	document.getElementById("rollDice").addEventListener("click", () => {
		let el = document.getElementById("diceResult"),
			btn = this;
		
		btn.disabled = true;
		el.innerHTML = "<span class=\"icon\"><i class=\"fas fa-dice-d20 fa-pulse\"></i></span>";
		
		setTimeout(() => {
		    btn.disabled = false;
			el.innerHTML = rollDice();
		}, 600);
	});

	const toggleTab = (el) => {
		if(el.parentNode.classList.contains("is-active")) return;
		
		[].forEach.call(document.querySelectorAll(".tabs li"), el => {
			el.classList.remove("is-active");
		});
		[].forEach.call(document.querySelectorAll(".tab-page"), el => {
			el.classList.add("is-hidden");
		});

		el.parentNode.classList.add("is-active");
		document.getElementById(el.dataset.target).classList.remove("is-hidden");
	};
	
	[].forEach.call(document.querySelectorAll(".tabs a"), el => {
		el.addEventListener("click", e => {
			toggleTab(el);
			e.stopPropagation();
		});
	});
})();
