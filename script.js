
const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.getElementById("close");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

const filterButtons = document.querySelectorAll(".filter-btn");

let images = [];
let currentIndex = 0;

imagegalleryItems.forEach((item) => {
    const img = item.querySelector("img");

    images.push(img.src);

    item.addEventListener("click", () => {
        currentIndex = images.indexOf(img.src);

        lightboxImg.src = img.src;
        lightbox.style.display = "flex";
    });
})

nextBtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    lightboxImg.src = images[currentIndex];
});

 

prevBtn.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    lightboxImg.src = images[currentIndex];
});



closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

/* Close by clicking background */

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }

});



filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const category = button.dataset.category;

        galleryItems.forEach((item) => {

            if (
                category === "all" ||
                item.dataset.category === category
            ) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }

        });

    });

});



document.addEventListener("keydown", (event) => {

    if (lightbox.style.display === "flex") {

        if (event.key === "ArrowRight") {
            nextBtn.click();
        }

        if (event.key === "ArrowLeft") {
            prevBtn.click();
        }

        if (event.key === "Escape") {
            closeBtn.click();
        }
    }

});