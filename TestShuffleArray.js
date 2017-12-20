var myArr = ['A','A','B','B','C','C','D','D'];

var j;
var temp;

for (var i = myArr.length-1; i>0;i--) {
j = Math.floor((Math.random() * i));
temp = myArr[j]; 
myArr[j] = myArr[i];
myArr[i] = temp;
}
console.log(myArr);