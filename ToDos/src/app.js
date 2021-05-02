const todos = [
    { name: 'task1', key: 1, status: 'overdue'},
    { name: 'task2', key: 2, status: 'overdue'},
    { name: 'task3', key: 3, status: 'done'},
    { name: 'task4', key: 4, status: 'active'},
    { name: 'task5', key: 5, status: 'active'},
    ];
    const parent = document.querySelector("body > div > div:nth-child(4) > ul");
    parent.innerHTML = '';
    /* <li data-id="1614959130076">
    <div class="todo">
        <input type="checkbox" class="toggle">
        <span>To</span>
        <button class="destroy"></button>
    </div><input type="text" class="edit"></li> */
    for (let i = 0; i < todos.length; i++) {
    let todo = todos[i];
    //parent.innerHTML += `<li data-id="${todo.id}">${todo.name}</li>`;
    let newLi = document.createElement("li");
    let newDiv = document.createElement("div");
    let input = document.createElement("input");
    let span = document.createElement("span");
    let button = document.createElement("button");

    //newLi.innerText = `${todo.name}`;
    newDiv.classList.add('todo');

    input.setAttribute('type', 'checkbox');
    input.classList.add('toggle');
    span.innerText = `${todo.name}`;

    button.classList.add('destroy');

    newDiv.append(input, span, button);

    newLi.appendChild(newDiv);

    newLi.onclick = function (){
        alert(111);
    }

    parent.appendChild(newLi);
    }

     const jsBar = document.getElementById("js-bar");
     jsBar.innerHTML = '';

     let div1 = document.createElement("div");
     let span2 = document.createElement("span");

     span2.innerHTML = `${todos.length} items left`;
     div1.classList.add('col-1-4');
     //span2.classList.add('total');

     let div2 = document.createElement("div");
     div2.classList.add('col-1-2');

     let ul = document.createElement("ul");
     ul.classList.add('filter');
     ul.setAttribute('id','js-filters');
     div2.append(ul);

     let Li1 = document.createElement("li");
     let a1= document.createElement("a");
     a1.innerHTML = 'All';
     a1.classList.add('button');
     a1.classList.add('selected');
     Li1.appendChild(a1);
     a1.setAttribute('data-status', 'all');

     a1.onclick = function (){
        alert("note: alert All");
    }

     let Li2 = document.createElement("li");
     let a2= document.createElement("a");
     a2.innerHTML = 'Active';
     a2.classList.add('button');
     a2.setAttribute('data-status', 'active');
     Li2.appendChild(a2);

     a2.onclick = function (){
        alert("note: alert Active");
    }

     let Li3 = document.createElement("li");
     let a3= document.createElement("a");
     a3.innerHTML = 'Completed';
     a3.classList.add('button');
     a3.setAttribute('data-status', 'completed');
     Li3.appendChild(a3);

     a3.onclick = function (){
        alert("note: alert Completed");
    }

     ul.append(Li1, Li2, Li3);

     let div3 = document.createElement("div");
     div3.classList.add('col-1-4');
     let button = document.createElement("button");
     button.innerHTML = "Clear Completed";
     button.setAttribute('id', 'js-clear-completed');
     button.classList.add('button--clear');
     button.classList.add('button');

     button.onclick = function (){
        alert("note: alert Clear Completed");
    }

     div3.append(button)


     jsBar.appendChild(div1);
     div1.appendChild(span2);
     jsBar.appendChild(div2);
     jsBar.appendChild(div3);









     jsBar.style.background = 'Cyan';
     //const span = document.querySelector("span");
    // меняем его HTML, todos.length = кол во элементов в массиве
    //span.innerHTML = `${todos.length} items left`;

    const list = document.querySelectorAll("body > div > div:nth-child(4) > ul > li");
    for (let i = 0; i < list.length; i++) {
        list[i].style.background = 'red';
    }


/*const todos = [
{ name: 'task1', key: 1, status: 'overdue'},
{ name: 'task2', key: 2, status: 'overdue'},
{ name: 'task3', key: 3, status: 'done'},
{ name: 'task4', key: 4, status: 'active'},
{ name: 'task5', key: 5, status: 'active'},
];
const parent = document.querySelector("body > div > div:nth-child(4) > ul");
parent.innerHTML = '';

for (let i = 0; i < todos.length; i++) {
    let todo = todos[i];
    let newLi = document.createElement('li');
    newLi.innerHTML = `<div class="todo">
                            <input type="checkbox" class="toggle">
                            <span>${todo.name}</span>
                            <button class="destroy"></button>
                        </div>
                        <input type="text" class="edit">`;

    parent.appendChild(newLi);
    //console.dir(newLi); //просмотреть инфу

//parent.innerHTML += `<li data-id="${todo.id}"> ${todo.name}</li>`;
}

const slid_bar = document.querySelector("#js-bar");
slid_bar.style.background = 'Cyan';


const span = document.querySelector("span");
// меняем его HTML, todos.length = кол во элементов в массиве
span.innerHTML = `${todos.length} items left`;

const list = document.querySelectorAll("body > div > div:nth-child(4) > ul > li");
for (let i = 0; i < list.length; i++) {
    list[i].style.background = 'red';
}*/
