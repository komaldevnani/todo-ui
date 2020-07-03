var input = $( "input[name='item']" )
$("#todos").on("keydown", input, function(e) {
     if(e.which == 13 && e.target.name == "item") {
         console.log("wrong");
       var itemName = e.target.value;
        var todoId = e.target.getAttribute("data-todo"); 
        var url = rootUrl + "/todos/" + todoId + "/items";
        fetch(url, {
            method: 'POST',
            headers: {
                "content-type":"application/json; charset=UTF-8",
                "Authorization": localStorage.getItem("token")              
            },
            body: JSON.stringify({
                name: itemName
            })
        }).then(response => response.json()
        ).then(obj => {
            e.target.value = '';
            var itemBox = showItem(obj.items[obj.items.length-1],obj.id)
            document.getElementById(obj.id).prepend(itemBox);
        })
        .catch(err => console.log(err))
    }
    
});