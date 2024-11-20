const inpt = document.getElementById("Write");
const add = document.getElementById("add");
const List_ToDo = document.getElementById("List_ToDo");

  add.addEventListener("click",()=>{
    let li = document.createElement("li");
    li.innerHTML = inpt.value;
    List_ToDo.appendChild(li);
    inpt.value = "";
    let span = document.createElement("span");
    span.innerHTML ="&times;";
    li.appendChild(span);  
    save();
  })
  
  List_ToDo.addEventListener("click", function(e){
     if(e.target.tagName === "LI"){
       e.target.classList.toggle("checked");
 
  }
     else if( e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
  }
  save();
  }
  ,false);
  
  function save(){
     localStorage.setItem("Data",List_ToDo.innerHTML);
  }
  function show(){
    List_ToDo.innerHTML= localStorage.getItem("Data");
  }
  show();


 