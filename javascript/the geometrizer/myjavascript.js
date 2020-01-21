var radius=Number(prompt("Enter the radius"));
		function calcCircumference(r)
{
  var result= 2*3.14*r;
  return result;
}
function calcarea(r)
{
var result=(3.14*r*r);
return result;
}
var area= calcarea(radius)
var circle=calcCircumference(radius)
alert("\narea "+area+ "\ncalcCircumference" +circle)