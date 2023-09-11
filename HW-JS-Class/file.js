// const openBtn = document.createElement("button");
// openBtn.textContent = "Open";
// document.body.appendChild(openBtn);

// const modalWrapper = document.createElement("section");
// modalWrapper.style.width = innerWidth + "px";
// modalWrapper.style.height = innerHeight + "px";
// modalWrapper.style.backgroundColor = "#AA0000";
// modalWrapper.style.display = "none";
// modalWrapper.classList.add("modal-wrapper");
// document.body.appendChild(modalWrapper);

// const closeBtn = document.createElement('button');
// closeBtn.textContent = "Close";
// document.body.appendChild(closeBtn);

// // modalWrapper.addEventListener("click", () => {
// //   modalWrapper.style.display = "none";
// // });

// openBtn.addEventListener("click", () => {
//   modalWrapper.style.display = "flex";
// });

// closeBtn.addEventListener("click", () => {
//   modalWrapper.style.display = "none";
// });

// closeBtn.onclick = sayThanks;

// const API = "http://www.omdbapi.com/?i=tt3896198&apikey=49391560";
// fetch(`${API}/movie`)
//   .then((response) => response.json())
//   .then((movie) => {
//     movie.forEach((movie) => document.body.appendChild(getChoseFilms(movie)));
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Finalize");
//   });

// function getChoseFilms(movie) {
//   const filmsPost = document.createElement("div");
//   const poster = document.createElement("h2");
//   const description = document.createElement("p");

//   poster.innerText = film.poster;
//   desctiption.innerText = film.body;

//   getChoseFilms.appendChild(poster);
//   getChoseFilms.appendChild(description);
//   getChoseFilms.appendChild(document.createElement("hr"));

//   return getChoseFilms;
// }

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    if (value > 0) {
      this._radius = value;
    } else {
      throw new Error("Радіус повинен бути більше за 0.");
    }
  }

  get diameter() {
    return this.radius *2;
  }

  area() {
    return Math.PI * this.radius **2;
  }

  circumference() {
    return 2 * Math.PI * this.radius;
  }
}

const circle = new Circle(5);
console.log(circle.radius);
console.log(circle.diameter);
console.log(circle.area());

circle.radius = 7;
console.log(circle.diameter);
