/*====================================
     FLOATING HERO WORDS
====================================*/

const floatingWord = document.getElementById("floatingWord");

const words = [

    "Full Stack Developer",

    "Problem Solver",

    "Frontend Engineer",

    "AI Enthusiast",

    "Creative Thinker",

    "UI/UX Enthusiast",

    "Tech Explorer",

    "Lifelong Learner"

];

const positions = [

    {
        top:"20%",
        left:"50%"
    },

    {
        top:"40%",
        left:"15%"
    },

    {
        top:"40%",
        left:"85%"
    },

    {
        top:"80%",
        left:"50%"
    },

    {
        top:"25%",
        left:"80%"
    },

    {
        top:"70%",
        left:"20%"
    },

    {
        top:"55%",
        left:"50%"
    },

    {
        top:"15%",
        left:"25%"
    }

];

let index = 0;

function changeWord(){

    floatingWord.style.opacity = "0";

    setTimeout(()=>{

        floatingWord.innerText = words[index];

        floatingWord.style.top = positions[index].top;

        floatingWord.style.left = positions[index].left;

        floatingWord.style.opacity = "1";

        index++;

        if(index >= words.length){

            index = 0;

        }

    },500);

}

changeWord();

setInterval(changeWord,2500);