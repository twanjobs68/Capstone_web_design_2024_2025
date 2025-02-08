// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", () => {
  //add error handling should destination pages not load

  try {
    //code for the About This App box
    //select element by ID
    const aboutAppButton = document.getElementById("aboutAppButton");

    if (!aboutAppButton) {
      throw new Error("Element with IF 'aboutAppButton' not found.");
    }

    // Add event listener to handle form submission
    aboutAppButton.addEventListener("click", (event) => {
      try {
        //Prevent default form submission behavior (which reloads the page)(Per MDN help)
        event.preventDefault();

        //Log a message for debugging purposes(Per MDN suggestion)
        console.log("Navigating to aboutHTML. Redirecting...");

        window.location.href = "./Pages/about.html";
      } catch (error) {
        console.error("Error when clicking About App button:", error);
      }
    });
  } catch (error) {
    console.error("Error with About App button set up:", error);
  }

  try {
    // Select form element by ID-This is for the Login section of the page
    const loginForm = document.getElementById("login-form");

    if (!loginForm) {
      throw new Error("Element wit ID 'login-form' not found.");
    }

    // Add event listener to handle form submission when the submit button is clicked
    loginForm.addEventListener("submit", (event) => {
      try {
        // Prevent the default form submission behavior (which reloads the page)(Per MDN help)
        event.preventDefault();

        // Log a message for debugging purposes(Per MDN suggestion)
        console.log(
          "Form submitted successfully for sucesfulLoginHTML. Redirecting..."
        );

        // window.location.href will send user to the url indicated.  In this
        window.location.href = "./Pages/succesfulLogin.html";
      } catch (error) {
        console.error("Error during form submission:", error);
      }
    });
  } catch (error) {
    console.error("Error with Login form set up:", error);
  }
});
