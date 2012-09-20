Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

function a(value){
	return b(value);
}

function b(value){
	var temp2 = value.split('');
	return temp2;
}

function c(value){
	var temp3 = value;
	return temp3;
}
console.log(a("hello"));
console.log(c("hello you sexy thing"));
// var b = 1
// var a = b.toString();
// var stuff = ["one","two","three"];
// stuff.remove(2);
// console.log(stuff);