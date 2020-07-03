function editAction(e) {
    var title = e.innerHTML;
    var head = e.parentElement;
    head.removeChild(e);
    var inp = document.createElement("input");
        inp.type = "text";
        inp.id = "inpid"
        inp.name = "txt_title";
        inp.value = title;
        inp.autofocus = true;    
    head.prepend(inp);    
};    
$("#todos").on('keydown','#inpid', function(e) {
    console.log("in");
    if(e.which == 13){
        var name = $(this).val();
        var head = e.target.parentElement;
        id = head.getAttribute("data-todoid");
        var putUrl = rootUrl + "/todos/" + id;
        fetch(putUrl, {
            method: 'PUT',
            headers: {
                "Authorization": localStorage.getItem("token"),
                "content-type": "application/json; charset=UTF-8",

            },
            body: JSON.stringify({
                title: name
            })
        }).then(() => {
            head.removeChild(e.target);
            var sp = document.createElement("span");
                sp.className = "edit-title";
                sp.setAttribute("onclick","editAction(this)");
                sp.innerHTML = name;
            head.prepend(sp);
        })
        .catch(err => alert(err))
    }  
}); 