
import {
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    updateDoc, 


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
arr.push(input.value);
function renderTodo() {
  ul.innerHTML = "";
  if (arr.length === 0) {
    ul.innerHTML += `
    <h2>No Data Found</h2>
    `
  }
  for (let i = 1; i < arr.length; i++) {
    ul.innerHTML += `
    <li>${arr[i].todo}
    <button class="deleteBtn" data-index="${i}">Delete</button>
    <button class="editBtn" data-index="${i}">Edit</button> 
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



// // Deleting Todo
// deleteBtn.forEach((btn , i) => {
//   btn.addEventListener(`click` , async (event)=>{
//     console.log(arr[i]);
//     await deleteDoc(doc(db, "todo"));
//     console.log("Data deleted");
//     arr.splice(i, 1);
    
//     renderTodo()
//   });
// });
// // Deleting Todo



// // Edit Todo
// editBtn.forEach((btn , index) => {
//   btn.addEventListener(`click` , async ()=>{
//     const updatedTodo = prompt("enter new value");
//     const todoUpdate = doc(db, "todo", arr[index].id);
//     await updateDoc(todoUpdate, {
//       todo: updatedTodo,
//     });
//     console.log("Data updated");
//     arr[index].todo = updatedTodo;
//     renderTodo()
//   });
// });
// // Edit Todo