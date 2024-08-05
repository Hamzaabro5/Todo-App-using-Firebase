
import {
    collection,
    addDoc,
    getDocs, 


} 
from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

import {db} from "./config.js";

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


async function getData() {
  const querySnapshot = await getDocs(collection(db, "todo"));
  querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});
console.log(arr);
renderTodo()

}

getData()




