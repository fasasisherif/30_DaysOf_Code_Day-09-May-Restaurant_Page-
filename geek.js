var a = document.getElementsByClassName('geek');

var geekpics = ["geek1.png", "geek2.png", "geek3.png"];
b = 0;

function myfunc (){
				
a[0].style.backgroundImage = 'url(' + geekpics[b] + ')';
b++;			
if (	b >= 3){
				b = 0;
				}			
				
}

setInterval(myfunc,2000)
