var userinput = Number(Math.ceil(prompt("Enter a Decimal Number Here","i.e. 6.4")));
alert(userinput);
var str_txt = "Welcome to Our Server"
alert(str_txt)
var new_str = str_txt.slice(0,userinput);
alert(new_str);
var text_reverse = ""
for(var i= new_str.length -1; i>-1; i--){
     text_reverse += new_str[i];
}
alert(text_reverse);