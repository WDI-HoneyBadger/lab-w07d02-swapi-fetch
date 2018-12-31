# SWAPI FETCH

![](https://media.giphy.com/media/1HPUSulSOHDpe/giphy.gif)

For this lab we will be using [SWAPI](https://swapi.co/) to render a list of people from Star Wars! The files are already made. Do your work in `main.js`. 

### fetchPeople
Create a function called `fetchPeople` that does the following:
- define a variable for the url you will make a call to (`https://swapi.co/api/people/`)
- make a fetch call to the url
- then parse the response to json
- then `console.log` the data returned.
- if there is an error, `console.log` the error

Check your work by calling the `fetchPeople` function and refreshing the page. the data returned should logged to the console.

### handleData 
Create a function called `handleData` that takes the retuned data as a parameter. The function should iterate through the people and console.log each person. **Hint:** The call returns more than just the people. How can we *only* get the array of people from the result?

Go back to the `fetchPeople` function. Instead of `console.log`-ing the data, call `handleData` passing the data in as the argument. When you refresh the page now, each person should be logged to the console individually.

### renderPerson

Create a function called `renderPerson` that will take a single person as a parameter and do the following:
- create a container `div` to hold all of the person's information and append it to the div with the class of `people`.
- create an `h3` and give it a text of the person's name. Append it to the container div made earlier.
- create 3 `p` tags. One for the person's height, mass, and gender and append each to the container div made earlier. *Remember to give each a `text` of the correct value!!*

Go back to the `handleData` function. Instead of `console.log`-ing each person, call `renderPerson` passing the person in as the arguement. When you refresh the page now, each person should be rendered to the page.

### Event Listener
First remove the call to `fetchPeople` when the document loads. Nothing should run when you refresh the page.

Add a click event listener to the button that will use `fetchPeople` as the callback function. Now when you click the button, fetchPeople will run.

### BONUS

Within each person there is a link that can be used to get info on their homeworld. How can we use this link to add homeworld information (name, population) to each person?
