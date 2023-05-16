function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid; //+'string' will be converted to number

  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorOutputElement.textContent = "";

  //getting input html and setting its value to empty when closing the form
  formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
  event.preventDefault();

  /*FormData() is  a built in function  --> it knows to generate an Object of certain shape 
                                        --> FormData() a function which extract all form value
  */
  const formData = new FormData(event.target);

  /* get function get the name attribute */
  const enteredPlayername = formData.get("playername").trim();

  if (!enteredPlayername) {
    event.target.firstElementChild.classList.add("error");
    errorOutputElement.textContent = "please enter a valid name!";
    return;
  }

  //constructing the id dynamically based on whether it is for player 1 or player 2
  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );

  updatedPlayerDataElement.children[1].textContent = enteredPlayername;

  if (editedPlayer === 1) {
    players[0].name = enteredPlayername;
  } else {
    players[1].name = enteredPlayername;
  }

  closePlayerConfig();
}