const notesInput = document.querySelector("#notes-input");

const addBtn = document.querySelector("#add-btn");
const updateNode = document.querySelector(".added-notess");
const time = document.querySelector(".time");
const modal = document.querySelector(".modal");
const edit = document.querySelector("#edit-btn");


let notesData = [];

let arr = []


const createNode = note => {
  let noteContent = document.createElement("li");
  noteContent.setAttribute("id", "content");
  let edit = document.createElement("span");
  edit.setAttribute("id", 'edit-btn');
  edit.innerHTML = "&curvearrowleft;"
  edit.style.fontSize = '28px';
  edit.style.color = "red";
  let detailsBtn = document.createElement("span");
  detailsBtn.style.cursor = 'pointer'
  detailsBtn.setAttribute("id", "boo")
  let div = document.createElement("div");
  // detailsBtn.style.width = "max-content"
  div.setAttribute("class", 'flex-container'); //Add flexbox property
  let buttonsContainer = document.createElement("div");
  let remove = document.createElement("span");
  remove.innerHTML = "&times;"
  remove.style.fontSize = "28px";
  remove.style.cursor = 'pointer';
  remove.onmouseenter = () => remove.style.color = 'white'
  remove.onmouseleave = () => remove.style.color = '#80FF85'
  edit.style.cursor = 'pointer';
  edit.onmouseenter = () => edit.style.color = 'white'
  edit.onmouseleave = () => edit.style.color = 'red'
  detailsBtn.onmouseenter = () => detailsBtn.style.color = 'white'
  detailsBtn.onmouseleave = () => detailsBtn.style.color = '#80FF85'
  remove.style.color = "rgb(128, 255, 133)";
 remove.setAttribute("id", "removeNote")
  buttonsContainer.append(edit, remove, detailsBtn);
  buttonsContainer.style.display = "flex";
  buttonsContainer.style.alignItems = "center";
  buttonsContainer.style.gap = "0.5em";
  buttonsContainer.style.color = "green";
  buttonsContainer.style.flexDirection = "row";
  // buttonsContainer.style.justifyContent = "flex-end";
 
 
  detailsBtn.innerHTML = '&#8711;'
  // detailsBtn.style.marginLeft = '4.5em';
  noteContent.setAttribute("contenteditable", false)
  detailsBtn.style.fontSize = '24px'
  detailsBtn.style.color= '#80FF85'
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "name";
  checkbox.value = "value";
  checkbox.setAttribute("id", 'check-id')
  
   div.style.margin = '0 1em'
  //  div.style.padding = '2em 2em'
  
  noteContent.style.padding = "0em 0";
  noteContent.style.fontSize = "16px"
  let contentBox = document.createElement("div");
  contentBox.style.display = "flex";
  contentBox.style.flexDirection = "row";
  contentBox.style.gap = "1em"
  contentBox.append(checkbox, noteContent)
  noteContent.style.alignItems = "center";
  div.append(contentBox, buttonsContainer);
   noteContent.innerText = note;
   localStorage.setItem('data', JSON.stringify(notesData));
   updateNode.append(div); 
// Update time and date in modal
const dateInput = document.querySelector("#date");
const date = dateInput.value;
const month = ["Jan", "Feb", "March", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
 let dayAdded =  new Date(date).getDay(day).toString();
 let monthAdded = new Date(date).getMonth(month).toString();
 let year = new Date(date).getFullYear().toString();
 let time = new Date().toLocaleTimeString();
 
 let taskDate = day[dayAdded] + ", " + month[monthAdded] + " " + year
 arr.push({task: note, date: taskDate, time: time});
 
 checkbox.addEventListener("click", (e) => {
  e.target.nextElementSibling.classList.toggle('textDecoration'); 
 e.target.parentElement.parentElement.classList.toggle('completed');

 })
};



updateNode.addEventListener("click", e => { 
     const note = e.target.parentElement.previousElementSibling.children[1].innerText;
     const content = e.target.parentElement.previousElementSibling.children[1];
     const quote = document.querySelector("#noted");
    

     e.target.id === 'boo' ? modal.style.display = 'block' : modal.style.display = 'none' ;
     e.target.id === 'removeNote' ?  e.target.parentElement.parentElement.remove() : 'not';
     quote.innerText =  note;  
     if( e.target.id === 'boo' ) {
      
      const newDate = document.querySelector("#dated");
      const newTime = document.querySelector("#time");
      for(let i=0; i< arr.length; i++){
        if(arr[i].task === content.innerText){
            newTime.innerHTML =  arr[i].time;
            newDate.innerHTML = arr[i].date
        } 
      }
     
     } 
     if( e.target.id === 'edit-btn'){
       content.setAttribute("contenteditable", "true");
      content.style.border = "1px solid red";
      content.setAttribute("title", "Press Enter");
      content.classList.contains('textDecoration') ? content.classList.remove('textDecoration')
      : 'none'
      document.querySelector('#check-id').classList.add('disabled');
     
      content.addEventListener("keydown", (e) => {
        let enter = 'Enter';
 if(e.key === enter) {
  e.preventDefault()
  content.setAttribute("contenteditable", "false");
     arr.forEach(item => {
      item.task = content.innerText
     }) 
     console.log(arr);
  content.style.border = "0";
  document.querySelector('#check-id').classList.remove('disabled');
  

   if(e.target.parentElement.children[0].checked){
     content.classList.add('textDecoration');
 } 
 }

 
});
}
 
});


addBtn.onclick = () => {
 let data = notesInput.value;
 data === "" ? alert("Add Notes First") :  createNode(data);
  notesInput.value = "";
};



document.querySelector("#close-modal").addEventListener("click", () => {
    modal.style.display = "none";
});

