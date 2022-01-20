
//For Smooth Scroll ******************************************************************************************************

var navMenuAnchorTags = document.querySelectorAll('nav a');
console.log(navMenuAnchorTags);
for(var i=0;i<navMenuAnchorTags.length;i++)
{
	navMenuAnchorTags[i].addEventListener('click',function(event){
		event.preventDefault();
		var targetSectionId = this.textContent.trim().toLowerCase();
		var targetSection = document.getElementById(targetSectionId);
		var interval = setInterval(function(){
			var targetCordinates = targetSection.getBoundingClientRect();
			if(targetCordinates.top <= 0){
				clearInterval(interval);
				return;
			}
			if(targetSectionId == "contact" && targetCordinates.top <= 165){
				clearInterval(interval);
				return;
			}
			window.scrollBy(0,50);
		},20);
	});
}

// ***************************************************************************************************************************
// Auto-Fill Skill Bars

var skillContainer = document.querySelectorAll('.skill-progress');
var progressBars = document.querySelectorAll('.skill-progress > div');
var skillOutDiv = document.querySelector('.skill-progress');  //outer-div progress-bars
var animationDone = new Array();
for(let i=0;i<skillContainer.length;i++){
	animationDone[i] = false;
}
console.log(animationDone);

function widthReset(i){
		progressBars[i].style.width = 0 + '%';
}

window.addEventListener('scroll',function(){
	for(let i=0;i<skillContainer.length;i++){
		var cordinate = skillContainer[i].getBoundingClientRect();
	    if(cordinate.top > window.innerHeight)
	    {
		animationDone[i] = false;
		widthReset(i);
	    }
	    if(cordinate.top < window.innerHeight && !animationDone[i]){
		animationDone[i] = true;
		autoFill(progressBars[i]);
	}
	}
});



function autoFill(progressBar){
	var currentWidth = 0;
	var targetWidth = progressBar.getAttribute('data-bar-width');
	var id = setInterval(function(){
		if(currentWidth >= targetWidth){
		clearInterval(id);
		return;
	    }
		currentWidth = currentWidth + 5;
		progressBar.style.width = currentWidth + '%';
	},50);
}
/**************************************************************************************************************************/
