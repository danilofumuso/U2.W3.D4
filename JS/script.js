//loadingButtons
const loadButton = document.getElementById("load-button");
const secondLoadButton = document.getElementById("second-load-button");

//API URLS
const firstImgsUrl = "https://api.pexels.com/v1/search?query=videogames";
const secondImgsUrl = "https://api.pexels.com/v1/search?query=cameras";

//Punto 1
loadButton.addEventListener("click", () => {
  const getImgs = () => {
    fetch(firstImgsUrl, {
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
      })
      .catch((err) => {
        console.log("ERRORE", err);
      });
  };

  getImgs();
});

//Punto 2
secondLoadButton.addEventListener("click", () => {
  const getImgs = () => {
    fetch(secondImgsUrl, {
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
        //così da errore perché ho meno cards di quante immagini arrivano dall'API, quindi uso il metodo di sotto!
        // imgs.photos.forEach((photo, i) => {
        //   const cardsImg = document.querySelectorAll(".card img");
        //   cardsImg[i].src = photo.src.original;
        // });

        const cardsImg = document.querySelectorAll(".card img");
        cardsImg.forEach((img, i) => {
          img.src = imgs.photos[i].src.portrait;
        });
      })
      .catch((err) => {
        console.log("ERRORE", err);
      });
  };
  getImgs();
});

//Punto 3
const hideButton = document.querySelectorAll(".card button:nth-of-type(2)");
hideButton.forEach((button, i) => {
  button.innerText = "Hide";
  //Punto 4
  button.addEventListener("click", () => {
    const cardCol = document.querySelectorAll(".col-md-4");
    cardCol[i].classList.add("d-none");
  }); //non ciclo le colonne sennò le elimina tutte, do l'indice i al primo forEach
  //e elimino solo la colonnac con indice i relativa al bottone!
});

//Punto 5
