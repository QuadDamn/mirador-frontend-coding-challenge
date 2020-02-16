# Mirador Coding Challenge Submission (React)
 
My submission for the Mirador FE React coding challenge.

## Installation

Clone down the repository and run the following commands in order:

`npm install` -- Install of the project dependencies

`npm start` -- Spins up a local development instance of the application.

Please note that there are some warnings in the console.  Those are around Material UI and the currency text field package that I had installed.

## **Technology Overview:**

- Used just React for the solution.  Didn't see any need to use Redux in the implementation because I wasn't needing to share state across multiple components or conducting a sleuth of different actions against any state.  The only state that was shared was passed via React Router history.
- Didn't use Typescipt because I haven't used it with React as of yet.  I didn't want to spend a bunch of time trying to figure out Typescript for this particular project because I wanted to get a submission in front of you as soon as possible.  I have used Typescript with Node though, so I am sure that I can figure it out with React when things are aren't time-sensitive.

## **Application Design Overview:**

Based upon the spec, there were three pages that needed to be created -- Landing/Intake page, New Account page and the Disqualification page.  While mapping things out, I didn't see any shared code across the pages, so that is why there are no reusable components. 

I was able to leverage an NPM package for the currency field.  I did have an issue with it out of the gate however.  When implementing it, I noticed that the label for the text field was moved up to the top of the text box because the input already had the **'$'** in the input.  So, I had to figure out how to make all of the other text box labels do the same thing on rendering.  You will see in the code for the non-currency text boxes that there is a **InputAdorement** that moves the label up to the top of the text box.

In regards to the validation, I wanted to write all of the validation logic myself so that you could really see my own logic flow, rather than using a library like validator.js and extending that.  I could have also used a react form solution that had built-in validation like React Material UI Form ([https://www.npmjs.com/package/react-material-ui-form](https://www.npmjs.com/package/react-material-ui-form)).

Error handling for the application felt like it was mainly handled through all of the input validation.  The only other error handling that felt necessary was on the mock API backend call.

I ran out of time to put together some tests, so I figured I would just outline what I would test if I had more time.  

 - I would use Jest, React Testing Library, and Cypress.  
 - There are two different ways that I see you could handle the form submission testing:
	 -	Unit test with Jest / React Testing library.
	 -	End-to-End test suite with Cypress.  With this solution, you could simply just test the entire application flow and the form submissions would need to be a part of that anyways as they are the drivers of the flow.
 - The API utility should have some testing around it to ensure the inputs/outputs are working.  With a normal use case, the fetch or axios library would be used and we could mock those libraries.
