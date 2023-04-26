let name = [];

function onload() {
    let dropdown = document.getElementById("dropdown");
    dropdown.style.visibility = "hidden"
    if (sessionStorage.getItem("hasCodeRunBefore") === null) {
        sessionStorage.setItem("name", JSON.stringify(name));
        sessionStorage.setItem("hasCodeRunBefore", true);
    }
    else {
        name = JSON.parse(sessionStorage.getItem("name"));
        let i = 0;
        name.forEach(function (b) {
            let option = document.createElement("option");
            option.innerHTML = b.name;
            option.value = i;
            i = i + 1;
            dropdown.appendChild(option);
        });
        if (i > 0) {
            dropdown.style.visibility = "visible"
        }
    }


}

function Comment(name, email, comment) {
    this.name = name;
    this.email = email;
    this.comment = comment;
}

function addComment() {
    name = JSON.parse(sessionStorage.getItem("name"));
    let newComment = new Comment(
        document.getElementById("name").value,
        document.getElementById("email").value,
        document.getElementById("comment").value
    );
    name.push(newComment);
    sessionStorage.setItem("name", JSON.stringify(name));
    console.log(name)
}

function changeComment() {
    let selectedElement = document.getElementById("dropdown");
    let index = selectedElement.selectedIndex;
    index = index - 1
    let selname = name[index];
    document.getElementById("name").value = selname.name;
    document.getElementById("email").value = selname.email;
    document.getElementById("comment").value = selname.comment;
}

