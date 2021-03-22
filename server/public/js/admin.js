const body = document.querySelector('body');
const tbody = document.querySelector('tbody');
const addButton = document.querySelector("#addButton")

let questions;

addButton.onclick = () => {
    window.location.href = "../html/createQuestion.html";
}

body.onload = createTable()

async function createTable(){
    refreshRows()
    questions = await getQuestions();
    questions.forEach((q) => {
        createRow(q)
    });
}

function createRow({_id, question, resA, resB, resC, resD, resCorrect}){
    const tr = document.createElement('tr')
    const tdQ = document.createElement('td')
    const tdRA = document.createElement('td')
    const tdRB = document.createElement('td')
    const tdRC = document.createElement('td')
    const tdRD = document.createElement('td')
    const tdRCorrect = document.createElement('td')
    const tdButtons = document.createElement('td')
    const btnU = document.createElement('i')
    const btnD = document.createElement('i')
    const btnAccept = document.createElement('i')
    const btnRefuse = document.createElement('i')
    const pQ = document.createElement('p')
    const pRA = document.createElement('p')
    const pRB = document.createElement('p')
    const pRC = document.createElement('p')
    const pRD = document.createElement('p')
    const pRCorrect = document.createElement('p')


    pQ.textContent = question
    pRA.textContent = resA
    pRB.textContent = resB
    pRC.textContent = resC
    pRD.textContent = resD
    pRCorrect.textContent = resCorrect
    btnU.className = "fas fa-pen"
    btnD.className = "fas fa-trash"
    btnAccept.className = "fas fa-check"
    btnRefuse.className = "fas fa-times"

    tdQ.appendChild(pQ)
    tdRA.appendChild(pRA)
    tdRB.appendChild(pRB)
    tdRC.appendChild(pRC)
    tdRD.appendChild(pRD)
    tdRCorrect.appendChild(pRCorrect)

    tdButtons.appendChild(btnU)
    tdButtons.appendChild(btnD)

    tr.appendChild(tdButtons)
    tr.appendChild(tdQ)
    tr.appendChild(tdRA)
    tr.appendChild(tdRB)
    tr.appendChild(tdRC)
    tr.appendChild(tdRD)
    tr.appendChild(tdRCorrect)
    
    tbody.appendChild(tr)

    btnU.onclick = () => {
        const inQ = document.createElement('textarea')
        const inRA = document.createElement('textarea')
        const inRB = document.createElement('textarea')
        const inRC = document.createElement('textarea')
        const inRD = document.createElement('textarea')
        const inRCorrect = document.createElement('select')
        const optA = document.createElement('option')
        const optB = document.createElement('option')
        const optC = document.createElement('option')
        const optD = document.createElement('option')

        inQ.value = question
        inRA.value = resA
        inRB.value = resB
        inRC.value = resC
        inRD.value = resD
        inRCorrect.value = resCorrect
        
        tdQ.replaceChild(inQ, pQ)
        tdRA.replaceChild(inRA, pRA)
        tdRB.replaceChild(inRB, pRB)
        tdRC.replaceChild(inRC, pRC)
        tdRD.replaceChild(inRD, pRD)
        tdRCorrect.replaceChild(inRCorrect, pRCorrect)
        optA.textContent = 'A'
        optB.textContent = 'B'
        optC.textContent = 'C'
        optD.textContent = 'D'

        optA.value = 'A'
        optB.value = 'B'
        optC.value = 'C'
        optD.value = 'D'

        inRCorrect.appendChild(optA)
        inRCorrect.appendChild(optB)
        inRCorrect.appendChild(optC)
        inRCorrect.appendChild(optD)
        
        tdQ.appendChild(inQ)
        tdRA.appendChild(inRA)
        tdRB.appendChild(inRB)
        tdRC.appendChild(inRC)
        tdRD.appendChild(inRD)
        tdRCorrect.appendChild(inRCorrect)

        showButtonsAcceptRefuse(tdButtons, btnU,btnD, btnAccept, btnRefuse)
        
        btnAccept.onclick = async () => {
            const msj = await updateQuestion(_id, {
                question: inQ.value,
                resA: inRA.value,
                resB: inRB.value,
                resC: inRC.value,
                resD: inRD.value,
                resCorrect: inRCorrect.value
            })
            alert(msj)
            createTable()
        }

        btnRefuse.onclick = () => {
            tdQ.replaceChild(pQ, inQ)
            tdRA.replaceChild(pRA, inRA)
            tdRB.replaceChild(pRB, inRB)
            tdRC.replaceChild(pRC, inRC)
            tdRD.replaceChild(pRD, inRD)
            tdRCorrect.replaceChild(pRCorrect, inRCorrect)
            showButtonsUpdateDelete(tdButtons, btnU,btnD, btnAccept, btnRefuse)
        }
    }

    btnD.onclick = () => {
        showButtonsAcceptRefuse(tdButtons, btnU,btnD, btnAccept, btnRefuse)
        btnAccept.onclick = async () => {
            const msj = await deleteQuestion(_id)
            alert(msj)
            createTable()
        }
        btnRefuse.onclick = () => {
            showButtonsUpdateDelete(tdButtons, btnU,btnD, btnAccept, btnRefuse)
        }
    }

}

function showButtonsUpdateDelete(tdButtons, btnU, btnD, btnAccept, btnRefuse){
    tdButtons.replaceChild(btnU, btnAccept)
    tdButtons.replaceChild(btnD, btnRefuse)
}

function showButtonsAcceptRefuse(tdButtons, btnU, btnD, btnAccept, btnRefuse){
    tdButtons.replaceChild(btnAccept, btnU)
    tdButtons.replaceChild(btnRefuse, btnD)
}


async function getQuestions(){
    try{
        const res = await fetch("/question/correct", {
            method: "GET"
        });
        let data;
        data = await res.json();
        return data;
    }catch(e){
        alert("Error al traer preguntas")
    }
}

async function deleteQuestion(_id){
    try{
        const res = await fetch(`/question/${_id}`, {
            method: "DELETE"
        });
        let data;
        data = await res.json();
        return data;
    }catch(e){
        return "Error al traer preguntas"
    }
}

async function updateQuestion(_id, question){
    try{
        const res = await fetch(`/question/${_id}`, {
            method: "PUT",
            body: JSON.stringify(question),
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
            }
        });
        let data;
        data = await res.json();
        return data;
    }catch(e){
        return "Error al actualizar pregunta"
    }
}

function refreshRows(){
    while(tbody.firstChild){
        tbody.removeChild(tbody.firstChild);
    }
}