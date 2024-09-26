//loadingButtons
const loadButton = document.getElementById("load-button");
const secondLoadButton = document.getElementById("second-load-button");

//API URLS
const ImgsUrl = "https://api.pexels.com/v1/search?query=";

//Punto 1 - 2
const getImgs = (key) => {
  fetch(ImgsUrl + key, {
    headers: {
      Authorization: "V21loO34ENSMMRB5upPXHxYgS5rXLEdV8Tt63fTZusi94JnkdjaEorO9",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nella risposta del server!");
      }
    })
    .then((imgs) => {
      console.log(imgs);
      const cardsImg = document.querySelectorAll(".card img");
      cardsImg.forEach((img, i) => {
        img.src = imgs.photos[i].src.portrait;
      });

      //Punto 5
      const idCards = document.querySelectorAll(".card small");
      idCards.forEach((idCard, i) => {
        idCard.innerText = "ID: " + imgs.photos[i].id;
      });
    })
    .catch((err) => {
      console.log("ERRORE", err);
    });
};

loadButton.addEventListener("click", () => getImgs("videogames"));
// uso () => funzione() così non mi parte la funzione in automatico,
// visto che devo passarle un parametro!
secondLoadButton.addEventListener("click", () => getImgs("cameras"));

//Punto 3
const hideButton = document.querySelectorAll(".card button:nth-of-type(2)");
hideButton.forEach((button, i) => {
  button.innerText = "Hide";
  //Punto 4
  button.addEventListener("click", () => {
    const cardCol = document.querySelectorAll(".col-md-4");
    cardCol[i].classList.add("d-none");
  }); //non ciclo le colonne sennò le elimina tutte, do l'indice i al primo forEach
  //e elimino solo la colonna con indice i relativa al bottone!
});

const customSearch = document.getElementById("customSearch"); //form
customSearch.addEventListener("submit", (e) => {
  const inputField = document.getElementById("inputField");
  getImgs(inputField.value);
});
