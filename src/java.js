function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings:"love is a breeze!",
    autoStart: true,
    delay: 200,
    cursor:null,
  });
  
}


let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

