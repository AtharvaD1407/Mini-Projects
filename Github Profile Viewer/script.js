function fetchInfo() {
  const username = String(document.getElementById("username").value);
  const info = `https://api.github.com/users/${username}`;

  fetch(info)
    .then((response) => response.json())
    .then((data) => {
      if (data.message === "Not Found") {
        alert("User not found.");
      } else {
        const name = data.name;
        const location = data.location;
        const bio = data.bio;
        const repos = data.public_repos;
        const followers = data.followers;
        const following = data.following;

        document.getElementById("name").innerText = `${name}`;
        document.getElementById(
          "location"
        ).innerText = `Location - ${location}`;
        document.getElementById("bio").innerText = `Bio - ${bio}`;
        document.getElementById("repos").innerText = `Repository - ${repos}`;
        document.getElementById(
          "followers"
        ).innerText = `Followers - ${followers}`;
        document.getElementById(
          "following"
        ).innerText = `Following - ${following}`;
      }
    })
    .catch((error) => {
      alert(`Error fetching data:, ${error}`);
    });

  document
    .getElementById("profile-link")
    .setAttribute("href", `https://github.com//${username}`);

  document.getElementById("container").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("check-profile").style.display = "block";
}
