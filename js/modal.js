// Modal functionality
document.addEventListener('DOMContentLoaded', (event) => {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var span = document.getElementsByClassName("close")[0];

    document.querySelectorAll('.property-img').forEach(img => {
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    });

    span.onclick = function() { 
        modal.style.display = "none";
    }
});
