function deleteTodo(e) {
    var head = e.parentElement;
    var id = head.getAttribute("data-todoid");
    var delUrl = rootUrl + "/todos/" + id;
    var token = localStorage.getItem("token");
    fetch(delUrl, {
        method: 'DELETE',
        headers: {
            'Authorization': token
        }
    }).then(document.getElementById("todos").removeChild(head.parentElement))
    .catch(err => alert(err));
    
}