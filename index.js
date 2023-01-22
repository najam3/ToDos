const notesInput = document.querySelector("#notes-input");
const dateInput = document.querySelector("#date");
const addBtn = document.querySelector("#add-btn");
const updateNode = document.querySelector(".added-notess");
const time = document.querySelector(".time");
const modal = document.querySelector(".modal")
const edit = document.querySelector("#edit-btn");

const createNode = note => {
  let noteContent = document.createElement("li");
  noteContent.setAttribute("id", "content")
  let detailsBtn = document.createElement("span");
  detailsBtn.style.cursor = 'pointer'
  detailsBtn.setAttribute("id", "boo")
  let div = document.createElement("div");
  detailsBtn.style.width = "max-content"
  div.setAttribute("class", 'flex-container'); //Add flexbox property
  let buttonsContainer = document.createElement("div");
  let remove = document.createElement("span");
  remove.innerHTML = "&times;"
  remove.style.fontSize = "28px";
  remove.style.color = "rgb(128, 255, 133)";
remove.setAttribute("id", "removeNote")
  buttonsContainer.append(detailsBtn, remove);
  buttonsContainer.style.display = "flex";
  buttonsContainer.style.alignItems = "center";
  buttonsContainer.style.gap = "0.5em";
  buttonsContainer.style.color = "green";
  buttonsContainer.style.flexDirection = "row";
  buttonsContainer.style.justifyContent = "flex-end";
 
  noteContent.innerText = note;
  detailsBtn.innerHTML = '&#8711;'
  detailsBtn.style.marginLeft = '4.5em';
  noteContent.setAttribute("contenteditable", false)
  detailsBtn.style.fontSize = '24px'
  detailsBtn.style.color= '#80FF85'
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "name";
  checkbox.value = "value";
  checkbox.id = "check-id";
  
   div.style.margin = '0 1em'
   div.style.padding = '2em 2em'
  
  noteContent.style.padding = "0em 0";
  noteContent.style.fontSize = "16px"

  noteContent.style.alignItems = "center";
  div.append(checkbox, noteContent, buttonsContainer);
   updateNode.append(div); 
};

updateNode.addEventListener("click", e => {
     const date = dateInput.value;
     const note = e.target.parentElement.parentElement.children[1].innerText
     const quote = document.querySelector("#noted");
     console.log(note);
     const newDate = document.querySelector("#dated")
     e.target.id === 'boo' ? modal.style.display = 'block' : modal.style.display = 'none' ;
     e.target.id === 'removeNote' ?  e.target.parentElement.parentElement.remove() : 'not'
     document.body.style.backgroundColor = "rgba(0, 0, 0, 70%)"  
     quote.innerText =  note;
   
  date === "" ? newDate.innerText = "Date Not Added" :   newDate.innerText = new Date(date).toLocaleDateString();
   
});







addBtn.onclick = () => {
 let data = notesInput.value;
 const newTime = document.querySelector("#time");
 const check = document.querySelector("#checkId");
 newTime.innerText = "-Added " + new Date().toLocaleTimeString();

 data === "" ? alert("Add Notes First") :  createNode(data);
  notesInput.value = "";
 
  // check.addEventListener("onchange", e => {
  //   check.checked ? e.target.parent.style.backgroundColor = "green" :  e.target.parent.style.backgroundColor = "black"
  // })



};


edit.addEventListener("click", (e) => {
  const content = document.querySelector("#content");
  content.setAttribute("contenteditable", "true");
  content.style.border = "1px solid red"
  content.setAttribute("title", "Press Enter");
 
  content.addEventListener("keydown", (e) => {
   let enter = 'Enter';
   if(e.key === enter) {
    e.preventDefault()
    content.setAttribute("contenteditable", "false");
    content.style.border = "0"
   
   }
  })

})


document.querySelector("#close-modal").addEventListener("click", () => {
    modal.style.display = "none";
});

