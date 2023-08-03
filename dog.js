let a=document.getElementById("onbulb");
let b=document.getElementById("imagecat");
let c=document.getElementById("switchon");
let d=document.getElementById("onbutton");
let e=document.getElementById("offbutton")
function onbutton1() {
    b.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    a.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    c.textContent="Switch On";
    document.getElementById("onbutton").style.backgroundColor="green";
    document.getElementById("offbutton").style.backgroundColor="#cbd2d9";

}
function offbutton1() {
    a.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    b.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    c.textContent="Switch Off";
    c.style.color="red";
    document.getElementById("onbutton").style.backgroundColor="#cbd2d9";
    document.getElementById("offbutton").style.backgroundColor="red";
    
}