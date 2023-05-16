var modal = document.getElementById("modal");
var modalImg = document.getElementById("modal-img");
var gallery = document.getElementById("galeria");
var images = gallery.getElementsByTagName("img");
var closeModal = document.getElementsByClassName("close")[0];

for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
}

closeModal.addEventListener("click", function() {
    modal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});