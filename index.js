const url = "https://randomuser.me/api/?results=3";
const btn = document.querySelectorAll("button");
const name = document.querySelectorAll(".name");
const username = document.querySelectorAll(".username");
const img = document.querySelectorAll("img");
const refresh_btn = document.querySelector(".refresh-btn");

// Generate random user information from API fetch
function fetch_api() {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data.results);
      const users = data.results;
      users.forEach((user, index) => {
        img[index].src = user.picture.thumbnail;
        name[index].innerHTML = `${user.name.first} ${user.name.last}`;
        username[index].innerHTML = `${user.login.username}`;
      });
    })
    .catch(error => {
      console.log(error);
    });
}

fetch_api();

// Follow me Button
btn.forEach((element, index) =>
  element.addEventListener("click", () => {
    console.log(name);
    alert("Followed " + name[index].textContent + " on Facebook");
  })
);

// Refresh button
refresh_btn.addEventListener("click", () => {
  fetch_api();
});
