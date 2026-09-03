const inputArchivo = document.getElementById("archivo");
      inputArchivo.addEventListener("change", function(){
        if(this.files.length > 0){
          window.location.href = "views/home.html";
        } 
});