
var pausedGame = false;


function shuffleArray(arr) {
	var j;
	var temp;

	for (var i = arr.length-1; i>0;i--) {
	j = Math.floor((Math.random() * i));
	temp = arr[j]; 
	arr[j] = arr[i];
	arr[i] = temp;
	}
	return arr;	
}

document.getElementById('startBtn').addEventListener('click', newGame);

var myArr = ['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg','images/6.jpg','images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg','images/6.jpg'];


function newGame() {
	
	shuffleArray(myArr);

}
	for(var i = 0; i<4; i++) {
		var row = document.createElement('div');
		row.className = 'row';
		for (var j = 0; j<3; j++) {
			var col = document.createElement('div');
			col.className = 'card';
			col.id = (4*j+i);	
			col.addEventListener("click", showCard);
			row.appendChild(col);
		}
		document.getElementById('memoryBoard').appendChild(row);
	}

newGame();

	var clickedCard = 0;
	var correct = 0;
	var card1;
	var card2;

function showCard(event) {

	if (!(pausedGame)) {

		var card = event.target;
		var cardId = card.id;
		card.style.backgroundImage = "url("+myArr[cardId]+")";
		card.style.backgroundSize ="160px 234px";
		card.style.border = "2px solid rgb(199,242,249)";

		if (clickedCard == 0) {
			card1 = card;
			clickedCard = 1;
			console.log(clickedCard);
		}

		else {
			card2 = card;
		

			if (card1.style.backgroundImage == card2.style.backgroundImage) {
				correct++;
				clickedCard = 0;
				console.log("correct" + correct)
			}

			else {
				pausedGame = true;
				setTimeout(function(){
				card1.style.backgroundImage = "url('images/card_bkgrd.jpg')";
				card2.style.backgroundImage = "url('images/card_bkgrd.jpg')";
				clickedCard = 0;
				pausedGame = false;
				}, 2000);
			}

			if(correct >= 6) {
				alert("Yay, you won!");
				location.reload();
			}

		}

	};


}


	





