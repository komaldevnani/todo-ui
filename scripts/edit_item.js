function editdone(inp) {
    var todo = inp.getAttribute('data-todo');
    var item = inp.id;
    var iname = inp.name;
    var state = inp.checked;
    var token = localStorage.getItem('token');
    var url = rootUrl + "/todos/" + todo + "/items/" + item;
    fetch(url, {
        method: 'PUT',
        body: JSON.stringify({
            id: item,
            name: iname,
            done: state,
            todo_id: todo
        }),
        headers: {
            "content-type": "application/json; charset=UTF-8",
            "Authorization": token
        }
    }).then(() => {
        var divEl = inp.parentElement;
        var pdiv = divEl.parentElement;
        pdiv.removeChild(divEl);
        pdiv.appendChild(divEl);
    })
    .catch(err => console.log(err));
}