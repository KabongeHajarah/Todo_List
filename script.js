const todoList=[{
    name:'make dinner',
    dueDate:'2023-12-22'
}
    
,
{
    name:'supper',
    dueDate:'2023-12-10'
}
   ];
renderTodoList()
function renderTodoList() {
  
let todoListHtml='';
 todoList.forEach(
    function(todo,index){
        
        const name=todo.name;
        const dueDate=todo.dueDate
    const html=`
        <div>${name}</div> 
        <div>${dueDate}</div>
        <button onclick="
            todoList.splice(${index},1);

            renderTodoList();

         " class="delete-todo-button">Delete</button>
            `;

    todoListHtml+=html;
    }
 );   


    document.querySelector('.js-todo-list')
    .innerHTML=todoListHtml;
}

function addTodo(){
   let inputElement= document.querySelector('.js-name-input')
   let name=inputElement.value
  

   const dateInput=document.querySelector('.js-date');
   const dueDate= dateInput.value;

   todoList.push({
    name,
    dueDate
   });

   inputElement.value='';

   renderTodoList();
}