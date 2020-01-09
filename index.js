const url = "https://randomuser.me/api/?results=3";
const btn = document.querySelectorAll("button");
const name = document.querySelectorAll(".name");
const username = document.querySelectorAll(".username");
const img = document.querySelectorAll("img");

// Generate random user information from API fetch
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

// Follow me Button
btn.forEach((element, index) =>
  element.addEventListener("click", () => {
    console.log(name);
    alert("Followed " + name[index].textContent);
  })
);
