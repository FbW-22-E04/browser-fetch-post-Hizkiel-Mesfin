// The following line makes sure your styles are included in the project. Don't remove this.
// import "../styles/main.scss";
// import "babel-polyfill";

// \/ All of your javascript should go here \/

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const message = document.querySelector("#message");
const checkbox = document.querySelector("#checkbox");
const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  post();
});

const post = async function () {
  try {
    const data = {
      name: name.value,
      email: email.value,
      password: password.value,
      message: message.value,
      checked: checkbox.checked,
    };
    const postReq = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (postReq.status === 201)
      alert("Your information is successfully submitted");

    const dataReturn = await postReq.json();
    console.log(JSON.stringify(dataReturn));
  } catch (err) {
    console.error(err);
  }
};
