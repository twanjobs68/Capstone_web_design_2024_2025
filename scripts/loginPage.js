
// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", () => {
    
    //code for the About This App box

    //select element by ID
    const aboutBox = document.querySelector(".aboutBox");

    // Add event listener to handle form submission
    aboutBox.addEventListener("click", function() {

    // Prevent default form submission behavior (which reloads the page)(Per MDN help)
       // event.preventDefault();

     // Log a message for debugging purposes(Per MDN suggestion)
     console.log("Form submitted successfully for aboutHTML. Redirecting...");

     window.location.href = "/Pages/about.html";

    });

    // Select form element by ID
    const loginForm = document.getElementById("login-form");
  
    // Add event listener to handle form submission
    loginForm.addEventListener("submit", (event) => {

      // Prevent the default form submission behavior (which reloads the page)(Per MDN help)
      event.preventDefault();
  
      // Log a message for debugging purposes(Per MDN suggestion)
      console.log("Form submitted successfully for sucesfulLoginHTML. Redirecting...");
  
      // window.location.href will send user to the url indicated.  In this 
      window.location.href = "/Pages/successfulLogin.html";
    });
  });
 