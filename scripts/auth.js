const myForm = document.getElementById("myform");
myForm.addEventListener('submit', function(e) {
    e.preventDefault();

    var i_email = document.getElementById("email").value;
    var i_password = document.getElementById("password").value;
    fetch('http://localhost:3000/auth/login',{
        method: "post",
        body: JSON.stringify({
            email: i_email,
            password: i_password}),
        headers: {'Content-Type': "application/json; charset=UTF-8"}
        }
    ).then(response => response.json()) 
    .then(json => {
        localStorage.setItem("token", json.auth_token);
        window.location.href = "../pages/todos.html";
    }).catch(err => {
        alert(err)
    });
});