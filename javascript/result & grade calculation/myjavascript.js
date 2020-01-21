
// result and grade calculation 

function getResult(p,c,m)
{
	var result=(p+c+m)/3;
	return result;
}
function getGrade(result)
{
	if (result>80)
		return "A"
	else if (result>=60 && result<=80)
		return "B"
	else 
		return "c"

}
function msg (sname,result,grade)
{ 
	alert("hello "+sname+" result="+result+"% and grade="+grade);

}

	var sname=prompt("enter student name ");
	var p=Number(prompt("Enter physics marks"))
		var c=Number(prompt("Enter chemestry marks"))
		var m = Number(prompt("enter mathamatics marks"))
		var result=getResult(p,c,m);
		var grade=getGrade (result);
		msg (sname,result,grade);
	