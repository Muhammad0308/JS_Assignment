var a= prompt("Enter your first number")
var b=prompt("Enter Mathematical Operation")
var c= prompt("Enter your second number")
var number1 = parseInt(a,10);
var number2 = parseInt(c,10);
var d = "";
if (b == "+"){
        d = number1 + number2;
        alert(d);   
    }
else if (b == "-") 
    {
        d = number1 - number2;
        alert(d);   
    }
else if (b == "*") 
    {
        d = number1 * number2;
        alert(d);   
    }
else if (b == "/") 
    {
        d = number1 / number2;
        alert(d);   
    }
else {
        d = "wrong operator";
    }
    alert(d);