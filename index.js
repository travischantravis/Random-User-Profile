let url = "https://randomuser.me/api/?results=3";
const follow_btn = document.querySelectorAll(".follow-btn");
const name = document.querySelectorAll(".name");
const username = document.querySelectorAll(".username");
const img = document.querySelectorAll("img");
const refresh_btn = document.querySelector(".refresh-btn");
const male_checkbox = document.querySelector("#male-checkbox");
const female_checkbox = document.querySelector("#female-checkbox");
const alert_container = document.querySelector(".alert-container");

// Generate random user information from API fetch
function fetch_api() {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      // console.log(data.results);
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

// Refresh button
refresh_btn.addEventListener("click", () => {
  fetch_api();
});

// Follow me Button
follow_btn.forEach((element, index) =>
  element.addEventListener("click", () => {
    add_alert(index);
  })
);

// Male and femlae checkbox
male_checkbox.addEventListener("click", () => {
  if (male_checkbox.checked) {
    console.log("checked");
    url += "&gender=male";
  } else {
    console.log("unchecked");
    url = url.replace("&gender=male", "");
  }
});
female_checkbox.addEventListener("click", () => {
  if (female_checkbox.checked) {
    console.log("checked");
    url += "&gender=female";
  } else {
    console.log("unchecked");
    url = url.replace("&gender=female", "");
  }
});

// Add and remove Bootstrap alert after clicking follow button
function add_alert(index) {
  // Add alert
  const newAlert = document.createElement("div");
  newAlert.setAttribute("class", "alert alert-success");
  newAlert.setAttribute("role", "alert");
  newAlert.textContent = "Followed " + name[index].textContent + " on Facebook";
  alert_container.appendChild(newAlert);

  // Remove alert automatically after ceftain second
  setTimeout(() => {
    $(".alert")
      .fadeTo(500, 0)
      .slideUp(500, () => {
        $(this).remove();
      });
  }, 3000);
  // Remove the element from DOM completely, pretty on9
  setTimeout(() => {
    alert_container.removeChild(newAlert);
  }, 3501);
}
