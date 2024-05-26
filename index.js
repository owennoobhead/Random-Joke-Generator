const jokeContainer = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeButton");
const badge = document.getElementById("badge");

jokeBtn.addEventListener("click", () => getJoke());

const getJoke = () => {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json()) //convert res into a json object
    .then((data) => {
      jokeContainer.innerHTML = `${data.setup} - ${data.punchline}`;

      // remove previous class
      jokeContainer.className = "";

      if (data.type === "general") {
        jokeContainer.classList.add("joke-general");
      } else if (data.type === "programming") {
        jokeContainer.classList.add("joke-programming");
      } else if (data.type === "knock-knock") {
        jokeContainer.classList.add("joke-knock-knock");
      }
    })
    .catch((error) => {
      //if got error, it will catch it and print it out
      console.error("Error fetching joke:", error);
    });
};
