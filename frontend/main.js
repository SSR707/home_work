const form = document.querySelector(".form__block");
const user_list = document.querySelector(".users__list");
const inputs = document.querySelectorAll(".form__inputs");
const inputLink = document.querySelectorAll(".form__link_inputs");
const fileInput = document.querySelectorAll(".from__file");
import { getLocalStorgeData, setData } from "./storage.js";

const addusers = (data) => {
  console.log("++++");
  const localUsers = getLocalStorgeData("users") || [];
  const AddData = [...localUsers, ...data];
  user_list.innerHTML = AddData.map(
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
          <button class="user__delete_btn" id="${
            item.id || item._id
          }">x</button>
          <button class="${item.classBtn || "user__save_btn_none"}" id="${
      item.id
    }">save</button>
        </li>
      `
  ).join("");
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
  user.id = Date.now();
  user.classBtn = "user__save_btn";
  form.reset();
  const oldData = getLocalStorgeData("users") || [];
  setData("users", [...oldData, user]);
  getUser();
});

user_list.addEventListener("click", async (e) => {
  if (e.target.classList.contains("user__delete_btn")) {
    let users = getLocalStorgeData("users") || [];
    const userId = parseInt(e.target.id);
    const userExistsInLocal = users.some((item) => item.id === userId);
    if (userExistsInLocal) {
      users = users.filter((item) => item.id !== userId);
      setData("users", users);
    } else {
      const response = await fetch(
        `http://65.0.76.60:3333/users/${e.target.id}`,
        {
          method: "DELETE",
        }
      );
    }
    getUser();
  }
  if (e.target.classList.contains("user__save_btn")) {
    let users = getLocalStorgeData("users") || [];
    const userId = parseInt(e.target.id);
    const user = users.find((item) => item.id === userId);
    users = users.filter((item) => item.id !== userId);
    setData("users", users);
    console.log(user);
    const response = await fetch("http://65.0.76.60:3333/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }),
    });
    if (response.ok) {
      const data = await response.json();
      showToast("User saved successfully!", "success");
      getUser();
    } else {
      const errorData = await response.json();
      showToast("Error: " + errorData.message, "error");
    }
  }
});

const getUser = async () => {
  try {
    const req = await fetch("http://65.0.76.60:3333/users");
    const data = await req.json();
    addusers(data.users);
  } catch (error) {
    console.log(error);
  }
};

function showToast(message, type) {
  const toastContainer = document.getElementById("toastContainer");
  const toast = document.createElement("div");

  toast.className = `toast ${type}`;
  toast.textContent = message;

  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.classList.add("hide");
    setTimeout(() => {
      toast.remove();
    }, 500);
  }, 3000);
}

getUser();
