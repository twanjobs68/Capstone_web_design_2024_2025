
// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", () => {
    
    //code for the About This App box
    //select element by ID
    const aboutAppButton = document.getElementById("aboutAppButton");
    console.log(aboutAppButton);
   // Add event listener to handle form submission
    aboutAppButton.addEventListener("click", (event) => {
       
    //Prevent default form submission behavior (which reloads the page)(Per MDN help)
       event.preventDefault();

     //Log a message for debugging purposes(Per MDN suggestion)
     console.log("Navigating to aboutHTML. Redirecting...");

     window.location.href = "/Pages/about.html";

    });

    // Select form element by ID-This is for the Login section of the page
    const loginForm = document.getElementById("login-form");
  
    // Add event listener to handle form submission when the submit button is clicked
    loginForm.addEventListener("submit", (event) => {

      // Prevent the default form submission behavior (which reloads the page)(Per MDN help)
      event.preventDefault();
  
      // Log a message for debugging purposes(Per MDN suggestion)
      console.log("Form submitted successfully for sucesfulLoginHTML. Redirecting...");
  
      // window.location.href will send user to the url indicated.  In this 
      window.location.href = "/Pages/succesfulLogin.html";
    });
  });
 