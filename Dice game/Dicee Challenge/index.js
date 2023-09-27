

var randomNumber1 = Math.floor(Math.random()*6)+1;

document.querySelector(".img1").src = `images/dice${randomNumber1}.png `;

var randomNumber2 = Math.floor(Math.random()*6)+1;
document.querySelector(".img2").src = `images/dice${randomNumber2}.png `;


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player1 Wns";
    
} 
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player2 Wns";
}
else document.querySelector("h1").innerHTML="Its A Draw";



//Below is a Turnaru Operator.!!!!!! test it !!!!



randomNumber1 > randomNumber2 ? document.querySelector("h1").innerHTML="Player1 Wns"
: randomNumber1 < randomNumber2 ? document.querySelector("h1").innerHTML="Player2 Wns"
: document.querySelector("h1").innerHTML="Its A Draw";



