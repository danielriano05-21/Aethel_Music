document.querySelectorAll(".genero").forEach(btn => {
    btn.addEventListener("click", () => {

        const genero = btn.textContent;

        console.log("Abrir carpeta:", genero);
    });
});
document.querySelector(".btn-agregar")
.addEventListener("click", () => {

    console.log("Crear nuevo álbum");

});
<button class="genero" data-folder="reggaeton"></button>
btn.dataset.folder