# Task 

Implement a number to word list converter as a Node backend and React/Redux frontend.

If you're not familiar with some of the languages or frameworks then feel free to adapt as you see fit to what you have more experience with. We're more interested in seeing your general approach rather than specific experience with the tech.

The backend should provide a rest endpoint that converts a given numeric string into a list of corresponding words in the style of T9 [https://en.wikipedia.org/wiki/T9_(predictive_text)] or Phonewords [https://en.wikipedia.org/wiki/Phoneword]. For example, given the input 23 the output should be: ad, ae, af, bd, be, bf, cd, ce, cf

(This is not an API spec, please use your judgement on what a good request or response format is)

The frontend should allow the user to enter a number, query the backend for the corresponding expansions, and display them.

We'd like you to set a deadline for your work, communicate it to us, and proceed to complete a solution that showcases your skills. The solution should be shared with us in a git repository with real history included. We're interested in seeing high quality, readable code.

If you have the time, ways to go beyond the minimal solution could include for example:

* phone keyboard -like UI
* great project setup
* filtering to include only real words based on a suitable word list


# How to run

First, clone and run https://github.com/JessicaML/edume-server on port 3001

Then clone and run this repo on port 3000.

$ `git clone git@github.com:JessicaML/edume-t9-react.git`

$ `cd edume-t9-react`

$ `yarn install`

$ `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

$ `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

<img width="883" alt="Screenshot 2020-10-18 at 15 24 31" src="https://user-images.githubusercontent.com/7221533/96370564-33de5300-1156-11eb-81cf-737555faa177.png">


# What I would implement with more time:

- Add redux and connect the data from the API fetch to the Redux state.

- Test the API fetch with a mock fetch.

- Adjust the getPredictions function to only return words which contain the letter combinations if those combinations are the first 2 characters in the word. (E.g. 23 should return ‘ad’ and ‘adipisicing’ but not ‘occaecat’.

- Add a get which queries the backend, e.g. `/get?23`, and transfer the getCombinations and getPredictions to the edume-server project and and return the combinations/predictions in the request body. However, there is a performance advantage in fetching the json object from the server once, and performing the logic on the front end. This means there is only one request to the server as the page loads and the user does not have to wait for a response.

