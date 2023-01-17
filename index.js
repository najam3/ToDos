const temp = document.querySelector("#temp").content;
const input = document.querySelector("#add");
const btn = document.querySelector("#btn");
const date = document.querySelector("#date");
const notes = document.querySelector(".notes")
// Use Date Function



const addNotes = () => {
 let x = input.value;
 let li = temp.querySelector("li");

 li.innerText = x;
 document.body.appendChild(document.importNode(temp, true))
}
const weekday = ["Sun","Mon","Tue","Wed","Thurs","Fri","Satur"];

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
