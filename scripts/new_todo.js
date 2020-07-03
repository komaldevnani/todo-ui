document.getElementById('new-todo').onkeydown = function(e){
    if(e.keyCode == 13){
      // submit
      let todo = document.getElementById('new-todo').value;
      let token = localStorage.getItem("token");
      var postUrl = rootUrl + "/todos";
      fetch(postUrl, {
          method: 'POST',
          body: JSON.stringify({
              title: todo
          }),
          headers: {"content-type": "application/json; charset=UTF-8",
                    "Authorization": token}
      }).then(response => response.json())
      .then(todo => {console.log(todo);
                    document.getElementById('new-todo').value = '';
                    document.getElementById('todos').prepend(showTodo(todo));
                })
      .catch(err => alert(err.message));
    }; 
};