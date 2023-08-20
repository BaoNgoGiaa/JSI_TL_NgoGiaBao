import { auth, dangnhap } from "./basic.js";
console.log(auth);

let Email = document.querySelector("#email");
let Password = document.querySelector("#password");
let submit = document.querySelector(".submit");
submit.addEventListener("click", (e) => {
  dangnhap (auth, Email.value, Password.value)
});
