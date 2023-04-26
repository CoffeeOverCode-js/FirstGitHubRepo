//creates a saves array
//it first checks to see if there is anything saved in sessionStorage and if not it will be given null
//which then sets it to an empty array to allow storage for the users saves
let saves = JSON.parse(sessionStorage.getItem("saves")) || [];
//creates a function that loads when a user opens the website
function onload() {
    let dropdown = document.getElementById("dropdown");
    let link = document.getElementById("saves-link");
    if (link) {
        //sets link visibility to hidden
        link.style.visibility = "hidden";
    }

    //creates a forEach function
    let i = 0;
    //loops through each item of the array and append it to the dropdown
    saves.forEach(function (b) {
        let option = document.createElement("option");
        option.innerHTML = b;
        option.value = i;
        i = i + 1;
        dropdown.appendChild(option);
    });
    //creates an if statement
    //it checks whether an item was added to the dropdown and if so then the link will be visible
    if (i > 0) {
        if (link) {
            link.style.visibility = "visible";
        }

    }
}
document.addEventListener("DOMContentLoaded", function () {
    //creates functionality that allows the user to click ona  save for later button and pushes it into the saves array
    let buttons = document.getElementsByClassName("SaveforLater");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            let src = event.target.getAttribute("src");
            saves.push(src);
            sessionStorage.setItem("saves", JSON.stringify(saves));
            alert("There are " + saves.length + " Items in your folder")
        });
    }
    //calls the onload function to update the dropdown
    onload()
});

//creates functionality to allow the user to display their saved image by selecting it in the dropdown
function showimage() {
    let selectedElement = document.getElementById("dropdown")
    let index = selectedElement.selectedIndex
    index = index - 1
    let selsave = saves[index];
    // console.log("Selected index:", index)
    // console.log("Selected image:", selsave)

    if (index >= 0 && index < saves.length) {
        let imageContainer = document.getElementById("image-container")
        let img = document.createElement("img")
        img.src = "../" + selsave
        img.alt = selsave
        img.width = 400
        img.height = 500
        //resets the image containers innerHtML inorder to allow neat image display
        imageContainer.innerHTML = ""
        imageContainer.appendChild(img)
        // console.log("Image displayed")
    } else {
        console.log("No image selected")
    }
    //Creates jQuery functionality to allow the dropdown to be able to redirect the user to the selected website
    $(document).ready(function () {
        $("#dropdown").change(function () {
            var selectedOption = $(this).val();
            if (selectedOption != '') {
                window.location.href = selectedOption;
            }
        });

    });
}
//creates an accordion effect
$(document).ready(function () {
    $('#my-element').click(function () {
        $('#hidden-element').toggle();
    });

    $('#my-element2').click(function () {
        $('#hidden-element2').toggle();
    });

    //creates a fadeIn/Out function
    $("#hideShow").click(function () {
        console.log("clicked");
        $("#image1").fadeToggle("slow");
    });
    $("#hideShow2").click(function () {
        console.log("clicked");
        $("#image2").fadeToggle("slow");
    });
    //creates a rainbow effect when the user click on the button Rainbow
    let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    let index = 0;
    //uses the set interval function and changes the css color according to the array
    $(".animate").click(function() {
      let interval = setInterval(function() {
        $("#animate").css("color", colors[index]);
        index = (index + 1) % colors.length;
        //color changes ater 500/ms
      }, 500);
      //uses the set timeout function to stop the function above after 5 seconds
      setTimeout(function() {
        clearInterval(interval);
      }, 5000);
    });
});

// let saves = [];
// function onload() {
//     let dropdown = document.getElementById("dropdown");
//     let link = document.getElementById("saves-link");
//     link.style.visibility = "hidden"
//     if(sessionStorage.getItem("hasCodeRunBefore") === null) {
//         sessionStorage.setItem("saves", JSON.stringify(saves));
//         sessionStorage.setItem("hasCodeRunBefore", true)
//     }
//     else {
//         saves = JSON.parse(sessionStorage.getItem("saves"))
//         let i = 0
//         saves.foreach(function(b) {
//             let option = document.createElement("option")
//             option.innerHTML = b.saves[i]
//             i = i + 1
//             dropdown.appendChild(option)
//         })
//         sessionStorage.getItem("saves")
//         alert(saves)
//         if (i > 0) {
//             link.style.visibility = "visible"
//         }
//     }
// }

// document.addEventListener("DOMContentLoaded", function() {
//   let buttons = document.getElementsByClassName("SaveforLater");
//   for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", function() {
//         let src = event.target.getAttribute("src")
//       saves.push(src);
//       sessionStorage.setItem("saves", JSON.stringify(saves));
//       console.log(saves);
//     });
//   }
// });

// fetch('./About Me.html')
//   .then(response => response.text())
//   .then(data => {
//     // Parse the response HTML to find the element with the specified ID
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(data, 'text/html');
//     const element = doc.getElementById('image1');

//     // Do something with the element
//     console.log(element);
//   })
//   .catch(error => console.error(error));

// function getIndex(button) {
//     let buttons = document.getElementsByClassName("SaveforLater")
//     let index = Array.prototype.indexOf.call(buttons, button);
//     return index
// }
// //Add a way to save these into an array then display it on a website
// document.addEventListener("DOMContentLoaded", function () {
//     let button = document.getElementsByClassName("SaveforLater");
//     for (let i = 0; i < button.length; i++) {
//         button[i].addEventListener("click", function () {
//             let index = getIndex(this)
//             alert("The index of the button is " + index)
//             if (index === 0) {
//                 let HMS = document.getElementById("HMS")
//                 console.log(HMS)
//                 let image1 = document.getElementById("image1")
//                 console.log(image1)
//                 // let image1 = document.getElementById("image1")
//                 let Awards = [HMS, image1]
//                 console.log(Awards)

//                 for (let i = 0; i < Awards.length; i++) {
//                     let imagepath = Awards[i].src
//                     console.log(imagepath)
//                     alert(imagepath)
//                     if (Awards[0].src === null) {
//                         alert("I can and i will Image was saved!!")
//                     }
//                     else if (Awards[1].src === null) {
//                         alert("High Master Certificate was saved!!")
//                     }
//                     // else if(imagepath === Awards[i].src) {
//                     //     alert("High Master Certificate was saved!!")
//                     //     console.log(Awards[1].src)
//                     //     break;
//                     // }
//                     // // else if(Awards[0].src === null) {
//                     // //     break;
//                     // // }
//                     // else if (Awards[1].src === null) {
//                     //     break;
//                     // }
//                     // else if (imagepath === Awards[i].src) {
//                     //     alert("I can and i will Image was saved!!")
//                     //     break;
//                     // }

//                 }

//             }
//             else if (index === 1) {
//                 alert("Saved[1]")
//             }
//             else if (index === 2) {
//                 alert("Saved[2]")
//             }
//         });
//         button[i].setAttribute("onclick", "getIndex(this)")
//     }

//     // let image = document.getElementById("HMS")
//     // let imagepath = image.src
//     // console.log(imagepath)
// });

