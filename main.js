const runawayButton = document.getElementById("runaway-btn");
const container = document.getElementById("container");
const acceptButton = document.getElementById("accept-btn");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");


const animateMove = (element, leftPixels, topPixels) => 
	anime({
		targets: element,
		left: getRandomNumber(leftPixels),
		top: getRandomNumber(topPixels), 
		easing: "easeOutCirc",
	});


["mouseover", "click"].forEach(function (el) {
	runawayButton.addEventListener(el, function (event) {
		console.log("in fn");	
		//const left = window.innerWidth - this.offsetWidth;
		const left = container.getBoundingClientRect().width - this.offsetWidth;
		console.log(left);	
		//const top = window.innerHeight - this.offsetHeight;
		const top = container.getBoundingClientRect().height - this.offsetHeight;
		console.log(top);	

		animateMove(this, left, top).play()
	});
});

acceptButton.addEventListener("click", (e) => {
	runawayButton.classList.add("hide");
	imageOne.classList.add("hide");
	imageTwo.classList.remove("hide");	
});


const getRandomNumber = (num) => {
	const random = Math.floor(Math.random() * (num + 1));
	console.log("random number");
	console.log(random);
	return random;
}

/*
const OFFSET = 100;

runawayButton.addEventListener('click', (e) =>  {
	console.log("Clicked!");
})

runawayButton.addEventListener('mousemove', (e) => {
	const x = e.pageX;
	const y = e.pageY;
	const buttonBox = runawayButton.getBoundingClientRect();
	const horizontalDistFrom = distanceFromCenter(buttonBox.x, x, buttonBox.width);
	const verticalDistFrom = distanceFromCenter(buttonBox.y, y, buttonBox.width);
	const horizontalOffset = buttonBox.width/2 + OFFSET
	const verticalOffset = buttonBox.height/2 + OFFSET

	if (Math.abs(horizontalDistFrom) <= horizontalOffset &&
			Math.abs(verticalDistFrom) <= verticalOffset) {
		setButtonPosition(
			buttonBox.x + horizontalOffset / horizontalDistFrom * 10,
			buttonBox.y + verticalOffset / verticalDistFrom * 10	
		)
	} 
})

function distanceFromCenter(boxPosition, mousePosition, boxSize) {
	return boxPosition - mousePosition + boxSize/2;
}

function setButtonPosition(left, top) {
	const windowBox = document.body.getBoundingClientRect();	
	const buttonBox = runawayButton.getBoundingClientRect();	

	if(distanceFromCenter(left, windowBox.left, buttonBox.width) < 0) {
		left = windowBox.right - buttonBox.width - OFFSET;
	}
	if(distanceFromCenter(left, windowBox.right, buttonBox.width) > 0) {
		left= windowBox.let + OFFSET;
	}
	if(distanceFromCenter(top, windowBox.top, buttonBox.height) < 0) {
		top=windowBox.bottom - buttonBox.height - OFFSET;
	}


	runawayButton.style.left = left +  'px';
	runawayButton.style.top = top + 'px';
}
*/
