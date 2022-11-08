let todo = [];

const formEl = document.querySelector(`#form`);
const inputEl  =document.querySelector(`#input`);
const todoListEl =document.querySelector(`.container-todolist`);

formEl.addEventListener(`submit`, (e) =>{
    e.preventDefault(); // chặn reset lại trang do submit
    
    const value = inputEl.value;
if(value=== '') {
    alert(`Write what you want`)
}
    const newTodos = {
        name: value,
        iscompleted: false,
        id: todo.length
    };
    todo.push(newTodos); // đẩy vào mảng todo

    showTodo();
    // tái cấu trúc ô input rỗng để nhập tiếp theo
    inputEl.value = ``;
    console.log(todo);
})
// tạo ra 1 hàm để render các todo ra màn hình
const showTodo = () =>{
    //reset lại cái list để k bị lặp mấy phần tử đã nhập 
    todoListEl.innerHTML =``;
    todo.forEach((item) => {
        const divTodo = document.createElement(`div`);
        divTodo.classList.add(`todo-list`);
        divTodo.innerHTML = `
        <p class ="todo-item">${item.name}</p>
        <p class = "completed">${item.iscompleted ?"completed" : "Not completed" }</p>
        <p class = "not-completed" onclick = done(${item.id})> Make Completed</p>

        <p class = "remove" onclick = removed(${item.id})> Delete</p>
        `;


        todoListEl.appendChild(divTodo);
    });
}
// tạo hàm xóa todo item theo id
const removed = (id)=>{
 todo = todo.filter((t) => t.id !== id)
  showTodo();
}
// tạo hàm Done
const done = (id) =>{
    todo = todo.map((el) => el.id === id ? 

}