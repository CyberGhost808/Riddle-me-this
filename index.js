const Riddles = [
    {
        name:"I have keys but they do not open any doors. what am I ?", 
        answer:"A piano"
    },
    {
        name: "What is seen in the middle of March and April that can't be seen at the beginning or end of either month",
        answer:"The letter R "
    },
    {
        name:"What gets wet when drying",
        answer:"A towel"
    },
    {
        name:"I belong to you but every one uses me. What am I ?",
        answer:"My name"
    },
    {
        name:"What comes once in minutes, twice in moment but never in thousand years ?",
        answer:"The letter M "
    },
    {
        name:"What has a neck but no head",
        answer:"bottle"
    },
    {
        name:"The more you take is the more you leave behind. what am I ?",
        answer:"Footsteps"
    },
    {
        name:"I am more useful when I am broken. what am I ?",
        answer:"An egg"
    },
    {
        name:"I am very easy to lift up and very hard to throw. what am I ?",
        answer:"A Feather"
    },
    {
        name:"I always go up, but I never come down. what am I ?",
        answer:"Age"
    },
    {
        name:"I am an odd number but when you take away one letter I become even. what am I ?",
        answer:"Seven"
    },
    {
        name:"Poor people have me, Rich people need me,if you eat me you will die. what am I ?",
        answer:"Nothing"
    },
    {
        name:"What is at the end of a rainbow ?",
        answer:"letter W"
    },
    {
        name:"How many months have 28 days ?",
        answer:"Every month"
    },
    {
        name:"I can go though a glass without breaking it. what am I ?",
        answer:"A light"
    },
    {
        name:"Which 2 things I can never eat for breakfast ?",
        answer:"Lunch and dinner"
    },
    {
        name:"I make sounds when I change and become bigger but weigh light. what am I ?",
        answer:"Popcorn"
    },
    {
        name:"When you take of my skin I wont cry, but you will. what am I ?",
        answer:"An onion"
    },
    {
        name:"What can you put in a bucket to make it loose weight",
        answer:"A hole"
    },
    {
        name:"If you throw a blue stone in a red sea what will it become",
        answer:"It will become wet"
    },
    {
        name:"I grow shorter as I grow older. what am I ?",
        answer:"A candle"
    },
    {
        name:"I am a 5 letter word but I become shorter when you add 2 more letters. which word am I ?",
        answer:"Short"
    },
    {
        name:"I am always on the ground but I never get dirty. what am I ?",
        answer:"A shadow"
    },
    {
        name:"I have a head, I have a tail but I do not have a body. what am I ?",
        answer:"a coin"
    },
    {
        name:"I get smaller everytime I take a bath. what am I ?",
        answer:"A soap"
    },
    {
        name:"I am pronounced the same even if you take 4 of my 5 letters. what am I ?",
        answer:"Queue"
    },
    {
        name:"I can fill up a room but wont take any space. what am I ?",
        answer:"a light"
    }        
]

let CurrentRiddle = 0;
let timer;

Start()

function Start(){
    let riddle = Riddles[CurrentRiddle];    
    document.getElementById("Riddle").innerHTML = riddle.name;
    document.getElementById("answer").innerHTML = "";
    timer = setTimeout(ShowAnswer, 30000); 
}


function ShowAnswer(){
    let riddle = Riddles[CurrentRiddle];
    document.getElementById("answer").innerHTML = riddle.answer;
    console.log(riddle.answer);
    setTimeout(NextRiddle, 2000);
}

function NextRiddle(){
    CurrentRiddle++;

    if(CurrentRiddle >= Riddles.length){
        alert("The game is over");
        location.href = "Welcome.html";
    }
    else{
        Start();
    }

    let riddle = Riddles[CurrentRiddle];
    
    document.getElementById("Riddle").innerHTML = riddle.name;
}

function Skip(){
    ShowAnswer();
}
