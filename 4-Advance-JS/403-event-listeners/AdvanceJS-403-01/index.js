const keyBoard = document.querySelector(".keyboard");

keyBoard.addEventListener("keyup", (e) => {
  let key = document.getElementById("key-text");
  let ans = document.getElementById("ans");

  ans.innerHTML = "You Pressed " + e.key;
  key.innerHTML = e.keyCode;
});
