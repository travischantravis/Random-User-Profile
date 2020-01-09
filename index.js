const btn = document.querySelectorAll("button");

const name = document.querySelectorAll("h4");

btn.forEach((element, index) =>
  element.addEventListener("click", () => {
    console.log(name);
    alert("Followed " + name[index].textContent);
  })
);
