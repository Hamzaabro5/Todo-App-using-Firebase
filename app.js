
// import {
//     collection,
//     addDoc,
//     getDocs,

// } 
// from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

//  import {db} from "./config.js";

const input = document.querySelector(`input`);
const form = document.querySelector(`form`);
const ul = document.querySelector(`ul`);
const arr = [];

function renderTodo() {
    ul.innerHTML = "";
    arr.push(input.value);
    for (let i = 0; i < arr.length; i++) {
        ul.innerHTML += `
        <li>${arr[i]}</li>
        `
        input.value = ``
    }
}

form.addEventListener(`submit` , async (event)=>{
    event.preventDefault();
    
    renderTodo()
})


