const formulario = document.getElementById("formulario");
const entrada = document.getElementById("entrada");
const contenedor = document.getElementById("contenedor");

const key = "YOs1VlLPycgVyQQNwVaqYmZlGpdDHQcvSzVsL8q5nP48g39bq8rRXp9gQXi1KoLd";

const cargaGit = async (tema) => {
  let accessPoint = `https://api.klipy.com/api/v1/${key}/gifs/search?q=${tema}`;
  
  try {
    const respuesta = await fetch(accessPoint, {
      method: "GET",
    });
    
    let data = await respuesta.json();
    let listaGit = data.data.data; 
    
    contenedor.innerHTML = "";

    listaGit.map((imagen) => {
      let gifUno = imagen.file.md.gif.url; 
      
      let miImagen = document.createElement("img"); 
      miImagen.setAttribute('src', gifUno);
      contenedor.append(miImagen);
    });

  } catch (error) {
    console.log(error);
  }
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let texto = entrada.value;
  cargaGit(texto);
});