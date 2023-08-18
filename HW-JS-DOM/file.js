const openBtn = document.createElement("button");
openBtn.textContent = "Open";
document.body.appendChild(openBtn);

const modalWrapper = document.createElement("section");
modalWrapper.style.width = innerWidth + "px";
modalWrapper.style.height = innerHeight + "px";
modalWrapper.style.backgroundColor = "#AA0000";
modalWrapper.style.display = "none";
modalWrapper.classList.add("modal-wrapper");
document.body.appendChild(modalWrapper);


const closeBtn = document.createElement('button');
closeBtn.textContent = "Close";
document.body.appendChild(closeBtn);

// modalWrapper.addEventListener("click", () => {
//   modalWrapper.style.display = "none";
// });

openBtn.addEventListener("click", () => {
  modalWrapper.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modalWrapper.style.display = "none";
});
