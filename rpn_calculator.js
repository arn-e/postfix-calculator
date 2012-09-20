//PostFix Calculator
function evaluate(input){
	elem = input.split(' ');
	calculate(elem);
}

function calculate(elem){
	if (elem.length > 1){
		for (var i=0; i< (elem.length); i++){
			if (elem[i] === "+" || elem[i] === "-" || elem[i] === "*"){
				elem[i-2] = eval(elem[i-2].toString() + elem[i].toString()+elem[i-1].toString());
				elem.remove(i-1) && elem.remove(i-1); 
				calculate(elem);
			}
		}
	}
	return elem[0];
}

// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

evaluate("5 2 3 4 + * -");