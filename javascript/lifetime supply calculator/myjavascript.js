
for (i=1; i<=3;i++){

		var x=Number(prompt("Enter your age"));
		var y=Number (prompt("Enter NO. per day"));
var maxage=70;
		function supply(a,b)
{
  var g=(b*365)*(maxage-a);
  return g;
}
var totalglass=supply(x,y);

alert("your remainnig watter is "+ totalglass)
}

