## How I worked on this project

My goal was to build a streaming platform for video contents centered around comics.

- I used React, Sass, and Material-UI libraries for the frontend. This is work-in-progress as with time I intend to build a fully responsive frontend with CSS using Sass.

## How to navigate this project

### Frontend

- Frontend Routing: [Click here](https://github.com/Lambertyubin/media_streaming_frontend/blob/main/src/MainRouter.js#L17)
- Some stateful logic: [Click here](https://github.com/Lambertyubin/media_streaming_frontend/blob/main/src/components/media/EditMedia.js#L49)
- CSS using Sass: [Click here](https://github.com/Lambertyubin/media_streaming_frontend/blob/main/src/components/featured/featured.scss#L1)

- The application fetches data from a backend API that I built as part of the project.
- Requests to API for authentication: [Click here](https://github.com/Lambertyubin/media_streaming_frontend/blob/main/src/auth/api-auth.js#L3)
- Requests to API for video content: [Click here](https://github.com/Lambertyubin/media_streaming_frontend/blob/main/src/components/media/api-media.js#L71)

- Integration tests using React Testing Library

### Backend

- [Link to Backend](https://github.com/Lambertyubin/media_streaming_backend)

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
