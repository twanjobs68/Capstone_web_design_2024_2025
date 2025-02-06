document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
  
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent the default form submission
      window.location.href = "/Pages/successfulLogin.html";
    });
  });

// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", () => {

    // Select form element by ID
    const loginForm = document.getElementById("login-form");
  
    // Add event listener to handle form submission
    loginForm.addEventListener("submit", (event) => {

      // Prevent the default form submission behavior (which reloads the page)(Per MDN help)
      event.preventDefault();
  
      // Log a message for debugging purposes(Per MDN suggestion)
      console.log("Form submitted successfully. Redirecting...");
  
      // window.location.href will send user to the url indicated.  In this 
      window.location.href = "/Pages/successfulLogin.html";
    });
  });
 