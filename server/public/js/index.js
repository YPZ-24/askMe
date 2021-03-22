const body = document.querySelector('body');
const formButtons = document.querySelector("#formButtons");
const pQuestion = document.getElementById('question')
const A = document.querySelector("#A");
const B = document.querySelector("#B");
const C = document.querySelector("#C");
const D = document.querySelector("#D");
const btnAdmin = document.querySelector("#btnAdmin")
let questions;
let index;

btnAdmin.onclick = () => {
    window.location.href = "./html/admin.html";
}

body.onload = async ()=>{
    questions = await getQuestions();
    body.addEventListener('keydown', (e)=>bodyKeyDown(e));
    index = Math.floor((Math.random() * (questions.length-1)));
}

function bodyKeyDown(e){
    if(e.key === "Enter"){
        //Buttons
        A.style.backgroundColor = 'rgba(236, 236, 236, 0.5)'
        B.style.backgroundColor = 'rgba(236, 236, 236, 0.5)'
        C.style.backgroundColor = 'rgba(236, 236, 236, 0.5)'
        D.style.backgroundColor = 'rgba(236, 236, 236, 0.5)'
        //Text
        index = ( index === (questions.length - 1) ) ? 0 : index + 1
        const {_id, question, resA, resB, resC, resD} = questions[index]
        pQuestion.textContent = question
        A.value = resA
        B.value = resB
        C.value = resC
        D.value = resD
        A.onclick = async () => {
            const valid = await validateQuestion(_id, "a")
            if(valid) A.style.backgroundColor = 'rgba(236, 236, 236, 1)'
        }
        B.onclick = async () => {
            const valid = await validateQuestion(_id, "b")
            if(valid) B.style.backgroundColor = 'rgba(236, 236, 236, 1)'
        }
        C.onclick = async () => {
            const valid = await validateQuestion(_id, "c")
            if(valid) C.style.backgroundColor = 'rgba(236, 236, 236, 1)'
        }
        D.onclick = async () => {
            const valid = await validateQuestion(_id, "d")
            if(valid) D.style.backgroundColor = 'rgba(236, 236, 236, 1)'
        }
        //Background
        colorH1 = Math.floor((Math.random() * 360));
        colorH2 = colorH1 + 40;
        if(colorH2>=360) colorH2 = colorH2 - 360;
        body.style = `background: linear-gradient(40deg, hsl(${colorH1}, 50%, 60%) 0%, hsl(${colorH2}, 50%, 60%) 100%)`
    }
}

async function getQuestions(){
    try{
        const res = await fetch("/question", {
            method: "GET"
        });
        let data;
        data = await res.json();
        return data;
    }catch(e){
        alert("Error al traer preguntas")
    }
}

async function validateQuestion(_id, answer){
    try{
        const res = await fetch(`/question/${_id}/validate/${answer}`, {
            method: "GET"
        });
        let data;
        data = await res.json();
        return data;
    }catch(e){
        alert("Error al traer preguntas")
    }
}












