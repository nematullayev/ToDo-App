const elInput = document.querySelector("#inp");
const elBtn = document.querySelector("#btn");
const elHeroCenter = document.querySelector("#hero-center");
const elHeroCenterOne = document.querySelector("#hero-center-one");
const elHeroBottom = document.querySelector("#hero-bootom");
const elHeroBottomP = document.querySelector("#hero-bootom-p");
const elClear = document.querySelector("#clear");
const elNum = document.querySelector("#num");

const toDoList = [];

elBtn.addEventListener("click", function () {
  const newToDoList = {
    dream: elInput.value,
  };
  if (elInput.value !== "") {
    toDoList.push(newToDoList);
    elNum.textContent = toDoList.length;
    newDivCard();
  }
});

function newDivCard() {
  if (elInput.value !== "") {
    const elInputValue = elInput.value;
    const newDiv = document.createElement("div");
    newDiv.className = "hero-center-one";
    newDiv.style.marginTop = "10px";

    newDiv.innerHTML = `
              <strong>
               ${elInputValue}
               
             </strong>
             <button class="bin">
                 <img id="bin-img" src="./image/bin.png" alt="bin" />
               </button>
        `;
    elHeroCenter.appendChild(newDiv);

    const deleteButton = newDiv.querySelector(".bin");
    deleteButton.addEventListener("click", function () {
      // Remove from DOM
      newDiv.remove();
      // Remove from toDoList array
      toDoList.pop();
      // Update counter
      elNum.textContent = toDoList.length;
    });

    elHeroCenter.appendChild(newDiv);
  }
}

elClear.addEventListener("click", () => {
  const tasks = document.querySelectorAll(".hero-center-one");
  tasks.forEach((task) => task.remove());

  toDoList.splice(0, toDoList.length);
  elNum.textContent = 0;
});
