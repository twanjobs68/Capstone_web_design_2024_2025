

// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", () => {
    
    //code for the Log OFF button on musicMenu Page
    //select element by ID
const logOffAppButton = document.getElementById("logOffButton");
    console.log(logOffAppButton);
   // Add event listener to handle form submission
    logOffAppButton.addEventListener("click", (event) => {
       
    //Prevent default form submission behavior (which reloads the page)(Per MDN help)
       event.preventDefault();

     //Log a message for debugging purposes(Per MDN suggestion)
     console.log("Navigating to Home Log In page. Redirecting...");

     window.location.href = "/index.html";

    });
});