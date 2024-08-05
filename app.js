
import {
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    // updateDoc, 


} 
from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

import {db} from "./config.js";

const input = document.querySelector(`input`);
const form = document.querySelector(`form`);
const ul = document.querySelector(`ul`);
const deleteBtn = document.querySelectorAll(`.deleteBtn`)
const editBtn = document.querySelectorAll(`.editBtn`)
let arr = [];


// Rendering Todo
function renderTodo() {
  ul.innerHTML = "";
  arr.push(input.value);
  for (let i = 0; i < arr.length; i++) {
    ul.innerHTML += `
    <li>${arr[i].todo}
    <button class="deleteBtn">Delete</button>
    <button class="editBtn">Edit</button> 
    </li>
    `
    input.value = ``
  }
}
// Rendering Todo




// Adding Todo
form.addEventListener(`submit`, async (event) => {
  event.preventDefault();
  try {
    const docRef = await addDoc(collection(db, "todo"), {
      todo: input.value,
      
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
    alert(e.message);
  }
  renderTodo();
});
// Adding Todo




// Getting Todo

async function getData() {
  const querySnapshot = await getDocs(collection(db, "todo"));
  querySnapshot.forEach((doc) => {
      arr.push({ ...doc.data(), id: doc.id })
    });

    console.log(arr);
    renderTodo()
}
getData()
// Getting Todo



// Deleting Todo
deleteBtn.forEach((btn , index) => {
  btn.addEventListener(`click` , async ()=>{
    console.log(arr[index]);
    await deleteDoc(doc(db, "todo"));
    console.log("Data deleted");
    arr.splice(index, 1);

    renderTodo()
  });
});
// Deleting Todo