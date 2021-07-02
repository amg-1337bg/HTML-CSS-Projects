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
		for(let i = 0; i < pathin.length; i++){
			if (i == 0)
				pathin[i].style.fill = getRandomColor();
			else{
				pathin[i].style.fill = "#ffffff";
			}
		}
	};
	item.onmouseleave = function(){
		var pathin = item.querySelectorAll("path");
		for(let i = 0; i < pathin.length; i++)
		{
			if (i == 0)
				pathin[i].style.fill = "#6E6F7E";
			else {
				pathin[i].style.fill = "#AEAEC9";
			}
		}
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
		for(let i = 0; i < pathin.length; i++)
		{
			if (i == 0)
				pathin[i].classList.add("active_out");
			else
				pathin[i].classList.add("active_in");
		}
	});
});