;(function(){
	document.getElementById("rollDice").addEventListener("click", function() {
		var el = document.getElementById("diceResult");
		var btn = this;
		btn.disabled = true;
		el.innerHTML = "<span class=\"icon\"><i class=\"fas fa-dice-d20 fa-pulse\"></i></span>";
		setTimeout(function() {
		    btn.disabled = false;
			el.innerHTML = rollDice();
		}, 600);
	});

	function rollDice() {
		var amt = Number(document.getElementById("diceAmt").value),
			sides = Number(document.getElementById("diceSides").value),
			mod = Number(document.getElementById("diceMod").value);

		if(amt === 1 && mod === 0) {
			return randomIntFromRange(1, sides);
		} else {
			var resultsArray = [],
				total = 0;

			for(var i = 0; i < amt; i++) {
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
		}
	}

	function randomIntFromRange(min,max) {
		min = Math.ceil(min);
    	    max = Math.floor(max);
    	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	[].call.forEach(document.querySelectorAll("#tabs a"), function(el) {
	    el.addEventListener("click", function() {
	        
	    });
	});
})();
