// Get all elements with the "item" class
addEventListener("DOMContentLoaded", function () {
  const image = document.getElementsByClassName("item"); // Select the image element
  for (let i = 0; i < image.length; i++) {
    image[i].addEventListener("dblclick", function () {
      this.classList.toggle("liked"); // Add the "liked" class to the clicked image
      console.log(image)
    });
  }

})




// $(".item").on("dblclick", function() {
//     $(this).toggleClass("liked");
//     $.post("/like", {item_id: $(this).data("item-id")});
//   });