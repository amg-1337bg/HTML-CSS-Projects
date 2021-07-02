var menu_item = document.querySelectorAll("li");


function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
  }

  
menu_item.forEach(function(item, index){
	item.onmouseover =  function(){
		var pathin = item.querySelectorAll("path");
		pathin[0].style.fill = getRandomColor();
		pathin[1].style.fill = "#ffffff";
		if (pathin[2] != undefined)
			pathin[2].style.fill = "#ffffff";
	};
	item.onmouseleave = function(){
		var pathin = item.querySelectorAll("path");
		pathin[0].style.fill = "#6E6F7E";
		pathin[1].style.fill = "#AEAEC9";
		if (pathin[2] != undefined)
			pathin[2].style.fill = "#AEAEC9";
	};

	item.addEventListener("click", function(){
		for(let i = 0; i < menu_item.length; i++)
		{
			var active_item = document.querySelectorAll("path");
			active_item.forEach(function(it){
				it.classList.remove("active_out");
				it.classList.remove("active_in");
			});
		}
		var pathin = item.querySelectorAll("path");
		pathin[0].classList.add("active_out");
		pathin[1].classList.add("active_in");
		if (pathin[2] != undefined)
			pathin[2].classList.add("active_in");
	});
});