const rootUrl = "http://localhost:3000"
function showItem(item,todoId) {
    var itemBox = document.createElement('div');
    var cb = document.createElement('input');
    cb.type = "checkbox";
    cb.name = item.name;
    cb.checked = item.done;
    cb.id = item.id;
    cb.setAttribute("onclick","editdone(this)");
    // cb.className = "form-check-input";
    cb.setAttribute('data-todo',todoId);
    var label = document.createElement('label');
    label.htmlFor = item.id;
    label.appendChild(document.createTextNode(item.name));
    itemBox.appendChild(cb);
    itemBox.appendChild(label);
    return itemBox;
}

function closeBtn() {
    var btn = document.createElement('button');
    btn.className = "close-btn"; btn.type = "button"; 
    btn.innerHTML = "X"; 
    btn.setAttribute("onclick","deleteTodo(this)");
    return btn;
}

function showTodo(todo) {
    var card = document.createElement('div');
    card.className = 'card text-white bg-secondary mb-4'
    card.style = "width: 24rem; ";

    var head = document.createElement('h3');
    head.className = 'card-header'
    head.setAttribute("data-todoid",todo.id);
    var span=document.createElement('span'); span.className = "edit-title"; span.setAttribute("onclick","editAction(this)");
    span.innerHTML = todo.title; 
    head.appendChild(span);
    var dBtn = closeBtn();
    head.appendChild(dBtn);
    card.appendChild(head);

    var cbody = document.createElement('div');
        cbody.className = "card-body ";
        cbody.id = todo.id;
        todo.items.forEach(item => {
            var itemBox = showItem(item,todo.id);
            if (item.done) {
                cbody.appendChild(itemBox);
            }                                       
            else {
                cbody.prepend(itemBox);
            } 
        });
        card.appendChild(cbody);
    var footer = document.createElement('div');
    footer.innerHTML = document.getElementById('inp-item').innerHTML.replace('here',todo.id);
    card.appendChild(footer);

    return card;
}
var token = localStorage.getItem("token");
var getUrl = rootUrl + "/todos"
fetch(getUrl, {
    method: 'GET',
    redirect: "follow",
    headers: {
        'Accept': 'application/json; charset=utf-8',
        'Authorization': token ,
        
    }
})
.then(response => response.json()) 
.then(data => {
    console.log(data);
    data.forEach(todo => {
        var todoCard = showTodo(todo);
        todoCard = showTodo(todo);
        document.getElementById("todos").prepend(todoCard);
    })
})
.catch(err => {
    window.location.href="../pages/login.html?notlogged=true"
});