console.log('Hello World. I am Node.js');

if (process.env.a && process.env.b) {
	var firstnum = parseInt(process.env.a,10);
	var secondnum = parseInt(process.env.b,10);
	var sum = firstnum + secondnum;
	console.log("Sum of " + firstnum + " & " + secondnum + " is " + sum);
} else {
	console.log("No parameters passed to calculate the sum.");
}

console.log("Node.js Bye!");