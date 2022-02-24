## How I worked on this project

My goal was to build a streaming platform for video contents centered around comics.

- I used React, Sass, and Material-UI libraries for the frontend. This is work-in-progress as with time I intend to build a fully responsive frontend with CSS using Sass.

## How to navigate this project

### Frontend

- Some stateful logic: [link to stateful logic]
- CSS using Sass: [link to css]
- UI components: [link]
  The application fetched data from a backend API that I built as part of the project.
- Requests to API for authentication: [link]
- Requests to API for video content: [link]

- Integration tests using React Testing Library [link to example test]

## Why I built the project this way

### Frontend

- I used React as the major frontend library because its virtual DOM feature provides a smooth user experience whereby only necessary parts of each component are updated when state changes.
- I didn't use a state management library like Redux on purpose. For this app simple `useState` hook is sufficient. In fact, for now there's no complex logic that needs to be shared among many different components.
- Sass is a preprocessor for CSS that allows us to use the standard CSS syntax and allows us to structure our styles following component hierarchies.

## During my extra time, I intend to improve the following:

- Complete the frontend to have a fully-responsive UI based on some cool Figma designs
- Build a video recommendation system with Python
- Set up continuous integration to run the tests
- Add end-to-end tests with Cypress.

### Frontend

- `npm start` to run the application
- `npm test` to run tests
- Make sure the [backend] is up and running
