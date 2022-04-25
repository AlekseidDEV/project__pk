const modal = () => {
  const ModalBtn = document.querySelector(".modal__button");
  const modal = document.querySelector(".modal");

  ModalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  modal.addEventListener("click", (event) => {
    const modalContent = event.target.closest(".modal__inner");
    if (!modalContent) {
      modal.style.display = "";
    }
  });
};

modal()
