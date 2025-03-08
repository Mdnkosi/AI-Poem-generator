function displayPoem(response) {
    new Typewriter("#poem", {
      strings:response.data.answer,
      autoStart: true,
      delay: 100,
      cursor: null,
    });
  
}

function generatePoem(event) {
  event.preventDefault();


  let userInput = document.querySelector("#user-instruction")
  let apiKey = "t0dbadd020obaf40a394084940d3fadf";
  let context = "You are great english native poet.Your mission is to generate a short poem and follow the prompt. Keep the poem to 5 lines and dispaly in sonnet structure,make the structure of the poem a sonnet structure.Seperate each line with the HTML <br> and add a  generated heading  at the top with a HTML <strong> element with a font-size of 1.5 to the body's size.Make it centre aligned "
  let prompt = `generate a poem about ${userInput.value}`
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`prompt:${ prompt }`);
  console.log(`context${context}`)
axios.get(apiUrl).then(displayPoem)

}


let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

