var form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method: "POST",
        body: new FormData(document.getElementById("sheetdb-form")),
    }).then(
        response => response.json()
    ).then((html) => {
        // you can put any JS code here
        swal({
            title: "Success!",
            text: "Your Question has been Submitted Successfully!",
            icon: "success",
            button: "Owh Yeah!",
          });
    });
});

function nope(){
    alert('Collections are not available at this moment!');
}