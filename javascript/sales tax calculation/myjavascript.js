
// sales tax calculation

		var pid=(prompt("Enter Product ID "))
		var pname= (prompt("enter Product name"))
		var quantity=Number(prompt("enter product quantity"))
		var unitprice=Number(prompt("enter product unit price"))
		var country=(prompt("Enter country name"))
		
		function getTotal(a,b) 
		{
 
 var tot = a*b;
 return tot;
}
function calculateTax(c,d) 
{
	var tax;
	if (c=="india"||c=="INDIA")
	{
		tax = d/5;
		return tax;
	} 

 else if (c=="japan"|| c=="JAPAN")
 {
 	tax = d/10;
 return tax;
}

else if (c=="usa"||c=="USA")
	{
		tax = d/20;
return tax;
}
}
 
function grandTotal(e,f)
{
var gt= e+f;
return gt;
 }
  var total = getTotal(quantity,unitprice);
  var tax = calculateTax(country,total);
  var gtotal= grandTotal(total,tax);
  
  alert("pid= "+pid+"\npname= "+pname+"\nquantity="+quantity+ "\nunitprice="+unitprice+ "\ntotal="+total+"\ntax="+tax+ "\ngtotal="+gtotal)
  
// 1.
/*
  var s="robin singh";
  alert (s.substr(0,4));
  */
/*
 var s="My name is suraj";
 alert(s.replace('my','My'))
*/

// check the value true or fales
/*
		var check=(prompt("Enter the text "))
is_Blank =  function(input)
 {
        if (input.length === 0)
        return false;
        else 
        return true;
      }
alert (is_Blank(''));
alert (is_Blank('abc'));
*/
