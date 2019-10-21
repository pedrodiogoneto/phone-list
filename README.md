# Client - Phone Catalogue

## Project Overview

### Objective

write a very simple product catalogue app.

### Requirements

- Consume a REST API which has the `/phone` enpoint. (Deployed at: https://phone-list-server.herokuapp.com/) that contains the phone list.

- Write a React app that displays the phones from the API
- Use redux for state management and Axios (or similar library) for fetching data from the API
- Display an initial list with all phones
- When a phone model is selected from the list, it will render a phone detail view displaying a few more details about that phone.
- Display a spinner or placeholder component while the API request is ongoing
- Responsive Design.
- Dockerize the app.

## Instructions

### Build Docker Image `npm run docker:build`

### Run Docker Container `npm run docker:run`

### Stop Docker Container `npm run docker:stop`