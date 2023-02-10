// let buttons = document.getElementsByClassName("nav-link");
// for (let button of buttons) {
//   //   console.log(button.classList);
//   button.addEventListener("click", () => {
//     for (let button of buttons) {
//       button.classList.remove("active");
//     }
//     button.classList.add("active");
//   });
// }

let links = document.querySelectorAll(".nav-link");
// console.log(links);
links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((link) => link.classList.remove("active"));
    link.classList.add("active");
  });
});
