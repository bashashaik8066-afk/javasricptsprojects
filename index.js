// let root = document.getElementById("root");

// const { createElement } = require("react");

// let h1 = document.createElement("h1");
// h1.innerText = "JavaScript DOM Object";
// h1.classList.add("heading");
// // root.appendChild(h1)

// let style = document.createElement("style");
// style.innerHTML = `
// .heading{
// color : blue;
// font-size : 30px;
// background-color : pink;
// }
// `;
// // .button{
// //     text-align : center;
// //     color : Pink;
// //     font-size : 20px;
// //     background-color : Bule ;
// //     border : none ;
// //     width : 120px;
// //     height : 40px
// // }
// document.head.appendChild(style);


// let p = document.createElement("P");
// p.innerText = "All the best";
// p.style.color = "blue";
// p.style.fontSize = "20px";

// root.appendChild(h1);
// root.appendChild(p);
// let button = document.createElement("button");


// let store = localStorage.setItem("user name", "basha");
// let get = localStorage.getItem("user name");
// console.log(get);
// localStorage.removeItem("user name");

// let stores = sessionStorage.setItem("user name", "basha");
// let gets = sessionStorage.getItem("user name");
// console.log(get);
// let remove = session.removeItem("user name");
// console.log(remove);




let root = document.getElementById("root");

let app = document.createElement("div");
app.id = "app";
root.appendChild(app);

let h1 = document.createElement("h1");
h1.innerText = "Todo Application";
app.appendChild(h1);

let inputBox = document.createElement("div");
inputBox.className = "input-box";

let input = document.createElement("input");
input.placeholder = "Enter Your Task";

let addBtn = document.createElement("button");
addBtn.innerText = "Add";

inputBox.appendChild(input);
inputBox.appendChild(addBtn);
app.appendChild(inputBox);

let todos = [];

let ul = document.createElement("ul");
app.appendChild(ul);

addBtn.addEventListener("click",()=>{
    if(input.value === ""){
        alert("Please Enter Task");
    }
    let todoObj = {
        id : new Date(),
        text : input.value,
        completed : false
    }
    createTodo(todoObj);
    todos.push(todoObj);
    input.value = "";
})

function createTodo(todo){
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.innerText = todo.text;
    li.appendChild(span);

    if(todo.completed){
        span.classList.add("complete");
    }


    let actions = document.createElement("div");
    actions.className = "actions";

    let completeBtn = document.createElement("button");
    completeBtn.innerText = "Done";

    completeBtn.addEventListener("click",()=>{
        todo.completed = !todo.completed;
        span.classList.toggle("complete");
    });

    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";

    editBtn.addEventListener("click",()=>{
        let newText = prompt("Edit Task", todo.text);
        if(newText !== null && newText !== ""){
            span.innerText = newText;
        }
    });


    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener("click",()=>{
        ul.removeChild(li);
        todos = todo.filter(t => t.id === todo.id);
    })

    li.appendChild(actions);
    actions.appendChild(completeBtn);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    ul.appendChild(li);
}


// let root = document.getElementById("root");
// let app = document.createElement("div");
// app.id= app;
// root.appendChild(app);
// let h1=document.createElement("h1");
// h1.innerText="To Do Appliction"
// app.appendChild(h1);

// let inputBox = document.createElement("div");
// inputBox.className="input-box";

// let input = document.createElement("input");
// input.placeholder="Enter the task";

// let addBtn = document.createElement("button");
// addBtn.innerText="add";

// inputBox.appendChild(input);
// inputBox.appendChild(addBtn);
// app.appendChild(inputBox);

// let todos=[];
// let ul=document.createElement("ul");
// app.appendChild(ul);


// addBtn.addEventListener("click",()=>{
//     if(input.value===""){
//         alert("Please Enter the Task")
//     }
//     let todoObj={
//         id:new Date(),
//         text:input.value,
//         completed:false,
//     }
//     createTodo(todoObj);
//     todos.push(todoObj);
//     input.value="";

// });
// function createTodo(todo){
//     let li=document.createElement("li");
//     let span =document.createElement("span");
//     span.innerText=todo.text;
//     li.appendChild(span);
//     if(todo.completed){
//         span.classList.add(complete)
//     }
//     let action=document.createElement("div");
//     action.classList.add("actions");
//     let completeBtn=document.createElement("button");
//     completeBtn.innerText="Done";

//     completeBtn.addEventListener("click",()=>{
//         todo.completed = !todo.completed
//         span.classList.toggle("complete");
//     })
//     let editBtn=document.createElement("button");
//     editBtn.innerText="Edit";

//     editBtn.addEventListener("click",()=>{
//         let newText=prompt("edit task", todo.text);
//         if( newText !== null && newText!=="");
//         span.innerText=newText;
//     });

//     let delet = document.createElement("button");
//     delet.innerText="Delete";
//     delet.addEventListener("click",()=>{
//         ul.removeChild(li);
//         todos=todos.filter(t => t.id === todo.id)
//     })
// li.appendChild(action);
// action.appendChild(completeBtn);
// action.appendChild(editBtn);
// action.appendChild(delet);

//     ul.appendChild(li);


// }

