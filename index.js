
var i = Math.floor(Math.random()*6)+1;
var j = Math.floor(Math.random()*6)+1;
var image1= "./dice"+i+".png";
var image2= "./dice"+j+".png";
document.querySelector(".img1").setAttribute("src",image1);
document.querySelector(".img2").setAttribute("src",image2);
if(i>j){
    document.querySelector("h1").innerHTML="Player 1 wins!🎉";
}
else if(i===j){
    document.querySelector("h1").innerHTML="Draw!🤝";
}
else {
    document.querySelector("h1").innerHTML="Player 2 wins!🎉";
}