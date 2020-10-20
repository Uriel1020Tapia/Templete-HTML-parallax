const $images = document.querySelectorAll(".img-gallery");
const $imagesLight = document.querySelector(".add-img");
const $contentLight = document.querySelector(".img-light");
const $iconHamburger2 = document.querySelector(".icon-hamburguer");


$images.forEach(image => {
    image.addEventListener('click', () =>{
        showImage(image.getAttribute('src'));
    })
});

$contentLight.addEventListener('click', (e)=>{//cerrar modal ligthBox

    if(e.target != $imagesLight){
        $contentLight.classList.toggle("show")
        $imagesLight.classList.toggle("show-img");
        $iconHamburger2.style.opacity = '1';
    }
});

const showImage = (img) => {//mostrar modal ligthBox
    $imagesLight.src = img;
    $contentLight.classList.toggle("show")
    $imagesLight.classList.toggle("show-img")
    $iconHamburger2.style.opacity = '0';
}