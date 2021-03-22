const btnCreateQuestion = document.querySelector('#btnCreateQuestion')
const inNewQ = document.querySelector('#inNewQ')
const inNewRA = document.querySelector('#inNewRA')
const inNewRB = document.querySelector('#inNewRB')
const inNewRC = document.querySelector('#inNewRC')
const inNewRD = document.querySelector('#inNewRD')
const inNewRCorrect = document.querySelector('#inNewRCorrect')

btnCreateQuestion.addEventListener('click', async (e)=>{
    if(!inNewQ.value) return inNewQ.focus()
    if(!inNewRA.value) return inNewRA.focus()
    if(!inNewRB.value) return inNewRB.focus()
    if(!inNewRC.value) return inNewRC.focus()
    if(!inNewRD.value) return inNewRD.focus()
    if(!inNewRCorrect.value) return inNewRCorrect.focus()
    const question = {
        question: inNewQ.value,
        resA: inNewRA.value,
        resB: inNewRB.value,
        resC: inNewRC.value,
        resD: inNewRD.value,
        resCorrect: inNewRCorrect.value
    }
    const msj = await createQuestion(question)
    alert(msj)
})

async function createQuestion(question){
    try{
        const res = await fetch(`/question`, {
            method: "POST",
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
        return "Error al crear pregunta"
    }
}