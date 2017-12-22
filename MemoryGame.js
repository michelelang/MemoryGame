// var memory_images_array = [];
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;

function Game() {
	this.memory_images_array = [];
	this.loadImages = function loadImages() {
		for (var i = 1; i <= 12; i++){
			var tile_images_src = ('images/' + [i] + '.jpg');
			this.memory_images_array.push(tile_images_src);
			this.memory_images_array.push(tile_images_src);
			console.log(this.memory_images_array);
		}
		return this;
	}
}

Game.prototype.memory_tile_shuffle = function(loadImages) {
	var j;
	var temp;

	for (var i = this.length - 1; i>0; i--) {
		j = Math.floor(Math.random() * (i));
		temp = this[j];
		this[j] = this[i];
		this[i] = temp;
	}
	return this;
}

Game.prototype.newBoard = function() {
	tiles_flipped = 0;
	memory_images_array.memory_tile_shuffle();
	var tile_ID = document.getElementsByClassName('tile');
	
	// for (var i = 0; i<memory_images_array.length; i++) {
	// 	tile_ID[i].addEventListener('click', memoryFlipTile);
	// }
}



Game.prototype.memoryFlipTile = function() {

	var tile_ID = this; //document.getElementsByClassName('tile');
	if(tile_ID.getAttribute('src').contain('memory_tile.jpg')){
		image.src='./memory_tile.jpg';
	}

	// else {
	// 	imgage.src=tile_images_src;
	// }
	console.log(this);

};
