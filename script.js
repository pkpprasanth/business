
function myname()
{
  var  player1 = prompt("Enter The Player1 name"); 
  var  player2 = prompt("Enter the player2 name"); 
 
 sessionStorage.setItem("player1", player1);
 sessionStorage.setItem("player2", player2);
 document.querySelector(".name1").innerHTML = sessionStorage.getItem("player1");
 document.querySelector(".name2").innerHTML = sessionStorage.getItem("player2");
}

var box1 = document.querySelector('#box1');
var box2 = document.querySelector('#box2');
var box3 = document.querySelector('#box3');
var box4 = document.querySelector('#box4');
var box5 = document.querySelector('#box5');
var box6 = document.querySelector('#box6');
var box7 = document.querySelector('#box7');
var box8 = document.querySelector('#box8');
var box9 = document.querySelector('#box9');
var box16 = document.querySelector('#box16');
var box17 = document.querySelector('#box17');
var box24 = document.querySelector('#box24');
var box25 = document.querySelector('#box25');
var box32 = document.querySelector('#box32');
var box33 = document.querySelector('#box33');
var box40 = document.querySelector('#box40');
var box41 = document.querySelector('#box41');
var box48 = document.querySelector('#box48');
var box49 = document.querySelector('#box49');
var box56 = document.querySelector('#box56');
var box57 = document.querySelector('#box57');
var box58 = document.querySelector('#box58');
var box59 = document.querySelector('#box59');
var box60 = document.querySelector('#box60');
var box61 = document.querySelector('#box61');
var box62 = document.querySelector('#box62');
var box63 = document.querySelector('#box63');
var box64 = document.querySelector('#box64');

var board=[box57,box49,box41,box33,box25,box17,box9,box1,box2,box3,box4,box5 ,box6,box7,box8,box16,box24,box32,box40,box48,box56,box64,box63,box62,box61,box60,box59,box58]
var value=[80,-100,-170,180,40,50,-500,250,100,-100,110,90,-200,100,130,-90,150,200,-140,100,60,20,-180,40,100,120,-90]

const player1 = document.getElementById('btn1');

console.log(player1);


player1.addEventListener('click', rollTheDice)


var person1 = ["pkp", 0, 1000]; // player 1 arrary
var person2 = ["pkp1", 0, 1000]; // player 2 arrary


function rolldice1(position) {
    console.log(" person1 play ", position);
     changeposition1(person1[1], position);  
}

function rolldice2(position) {
    console.log(" person2 play", position);
     changeposition2(person2[1], position);
}
var count3 = 0;
function changeposition1(old, current) {
    count3++;
    var newposition = old + current;
    person1[1] = newposition;
    newposition = newposition % 26;  
    console.log(" count-3    " + count);
    if(count3>1)
     {
         var elem = document.getElementById("img11");
         elem.remove();
     }
         let template = '<img src="./assets/bB.png" id="img11" alt="red" >';
         board[newposition].innerHTML += template;      
    console.log(" person1 play", person1[1]);
    changeMoney1(person1[1]);
}
var count2=0;
function changeposition2(old, current) {
    count2++;
    console.log(" count-2   " + count);
    var newposition = old + current;
    person2[1] = newposition;
    newposition = newposition % 26;
  if (count2 > 1) {
      var elem = document.getElementById("img12");
      elem.remove();
  }
    let template = '<img src="./assets/wB.png" id="img12" alt="red">';
    board[newposition].innerHTML += template;
    console.log(" person2 play", person2[1]);
    changeMoney2(person2[1]);
}

function changeMoney1(p2) {
    var updateMoney = 0;
    if (p2 < value.length) {
        updateMoney = person1[2] + value[p2 - 1];
    } else {
        p2 = p2 % 26;
        updateMoney = person1[2] + value[p2 - 1];
    }
    person1[2] = updateMoney;
    if (updateMoney <1100)
    {
    document.querySelector('.item3').innerHTML = updateMoney;
    document.getElementById('h1').innerHTML=updateMoney;
    
    }
    else{
        document.querySelector('.item3').innerHTML = updateMoney;
         document.getElementById('h1').innerHTML=updateMoney;
        document.querySelector('.item4').innerHTML = "Player 1 Win";
        document.querySelector('.name4').innerHTML =sessionStorage.getItem("player1")+" win the game";
        document.querySelector('.result').style.visibility = "visible";
        
    }

}

function changeMoney2(p2) {
    var updateMoney1 = 0;
    if (p2 < value.length) {
        updateMoney1 = person2[2] + value[p2 - 1];
    } else {
        p2 = p2 % 26;
        updateMoney1 = person2[2] + value[p2 - 1];
    }
    person2[2] = updateMoney1;
    if (updateMoney1<1100)
       {
            document.querySelector('.item4').innerHTML = updateMoney1;
            document.getElementById('h2').innerHTML=updateMoney1;
       }
       else{
               document.querySelector('.item4').innerHTML = updateMoney1;
        document.getElementById('h2').innerHTML=updateMoney1;
           document.querySelector('.item3').innerHTML = "Player 2 Win";
           document.querySelector('.name4').innerHTML = sessionStorage.getItem("player2")+" win the game";
           document.querySelector('.result').style.visibility = "visible";
       }

}

var count=0;
var randomNumber;
function rollTheDice() { 
    
    setTimeout(function () { 
        console.log(player1);
        randomNumber = Math.floor(Math.random() * 6) + 1; 
        document.querySelector('#imgdice').setAttribute("src", 
            "./assets/dice" + randomNumber + ".png"); 
            if(count%2==0)
            {
                console.log("play 1 Count-1->"+count)
                rolldice1(randomNumber)
                count=count+1;
                document.querySelector('#btn1').value = "Player 2";
            }
            else
            {
                console.log("play 2 Count-2 ->"+count)

                rolldice2(randomNumber)
                count=count+1;
                document.querySelector('#btn1').value = "Player 1";
            }
    }, 1000); 

   
} 


