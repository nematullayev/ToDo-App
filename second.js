const elInput = document.querySelector("#inp");
const elBtn = document.querySelector("#btn");
const elResult = document.querySelector("#result");

elBtn.addEventListener("click", function () {
  calkPromp();
});

function calkPromp() {
  let newArray = elInput.value.split(" ");
  let newVAlue = "";
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i].length > newVAlue.length) {
      newVAlue = newArray[i];
    }
  }

  return (elResult.textContent = newVAlue);
}
