const temp = document.querySelector("#temp").content;
const input = document.querySelector("#add");
const btn = document.querySelector("#btn");
const date = document.querySelector("#date");
const cb = document.querySelector("#accept");
const li = temp.querySelector("li");
// Use Date Function

let taskArr = [];


const addNotes = () => {
 let x = input.value;
 if(x === '') {
  document.body.appendChild(document.importNode(temp, false))
 } else {
   let li = temp.querySelector("li")
   li.innerText = x;
   document.body.appendChild(document.importNode(temp, true))
 }
}
const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

const getDate = () => {
   let input = date.value;
   const dateAdded = new Date(input);
   let span = temp.querySelector("span");
   span.innerText = `${weekday[dateAdded.getDay()]}`;
}




btn.onclick = () => {
  date.addEventListener("change", getDate())
  addNotes();
}

//Modal 
const details = document.getElementById("task-details");
const btnDetail = document.getElementById("btn-detail");


btnDetail.addEventListener("click", () => {
    getTime()
});


