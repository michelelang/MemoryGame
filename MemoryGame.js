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
		}
		return this;
	}
}

//var tile_images = document.getElementsByClassName("image");

// function loadImages() {
// 	for (var i = 1; i<12; i++){
// 		var tile_images_src = ('images/' + [i] + '.jpg');
// 		memory_images_array.push(tile_images_src);
// 	}
// 	return this;
// }

Game.prototype.memory_tile_shuffle = function(loadImages) {
	var i = this.length
	var j;
	var temp;

	while(--i > 0) {
		j = Math.floor(Math.random() * (i+1));
		temp = this[j];
		this[j] = this[i];
		this[i] = temp;
	}
	return this;
}

var a = new Game();
a.loadImages();
console.log(a.memory_images_array.length === 24);
console.log(a.memory_images_array[0] === "images/1.jpg");
