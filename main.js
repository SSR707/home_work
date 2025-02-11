const form = document.querySelector(".form__block");
const user_list = document.querySelector(".users__list");
const inputs = document.querySelectorAll(".form__inputs");
const inputLink = document.querySelectorAll(".form__link_inputs");
const fileInput = document.querySelectorAll(".from__file");

let users = [];

const addusers = () => {
  user_list.innerHTML = users
    .map(
      (item) => `
        <li class="user__item">
          <div class="user__img">
            <img src="${
              item.img ? item.img : "./imgs/user__logo.svg"
            }" alt="User Image" />
          </div>
          <div class="user__info">
            <h3 class="user__name">${item.fullname || "No Name"} </h3>
            <p class="description">
              ${item.description || "No description available."}
            </p>
            <div class="user__links">
              <a href="${item.twitter}" target="_blank">
                <img src="./imgs/twitter.svg" alt="Twitter" />
              </a>
                 <a href="${item.linkedin}" target="_blank">
                <img src="./imgs/linkedin.svg" alt="LinkedIn" />
              </a>

            </div>
          </div>
          <button class="user__delete_btn" id="${item.id}">x</button>
        </li>
      `
    )
    .join("");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.removeAttribute("action");

  let user = {};

  for (let i of inputs) {
    user[i.name] = i.value;
  }
  if (inputLink.length > 0) {
    user.twitter = inputLink[0].value;
    user.linkedin = inputLink[1] ? inputLink[1].value : "";
  }
  users.push({ id: Date.now(), ...user });
  addusers();
  form.reset();
});

user_list.addEventListener("click", (e) => {
  if (e.target.className === "user__delete_btn") {
    users = users.filter((item) => item.id != e.target.id);
  }
  addusers();
});
