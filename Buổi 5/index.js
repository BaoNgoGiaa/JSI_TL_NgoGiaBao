import { auth, dangki } from "./basic.js";
console.log(auth);

let Email = document.querySelector("#email");
let Password = document.querySelector("#password");
let submit = document.querySelector(".submit");
submit.addEventListener("click", (e) => {
  dangki (auth, Email.value, Password.value)
});
