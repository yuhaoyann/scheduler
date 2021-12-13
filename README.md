# Interview Scheduler

Interview Scheduler is a single-page application (SPA) that allows users to book technical interviews between students and mentors. Appointments can be between the hours of 12 PM and 5 PM, Monday to Friday. Each appointment has one student and one interviewer. When creating a new appointment, the user can enter any student name while the interviewer is chosen from a predefined list. The user can save the appointment and view the entire schedule of appointments on any day of the week. Appointments can also be edited or deleted. The front end of this project is built with `React` and makes requests to an API to fetch and store appointment data from a database.

# Additional features

Installed `WebSocket Server` function so that when one user update the page, it will render to all other users using the APP (can be tested by openning two browsers to the app web and try updating info on one browser)

## Setup

### Setup database server

1. Go to [Scheduler-API](https://github.com/yuhaoyann/scheduler-api) page, fork and clone the repo to local
2. Follow instructions and run the server in `http://localhost:8001`, keep it running in the terminal

### Setup APP

1. Go to [Scheduler](https://github.com/yuhaoyann/scheduler), fork and clone the repo to local.
2. Cd into the repository and install all dependencies (using the `npm install` command).

- The APP was developed in Node version `v14.18.1` and does not support newest version of Node, if npm install failed, delete the `node_modules` folder, switch to older version of Node and try `npm install` again

3. In a separate terminal window run `npm start`
4. In web browser (Chrome preferred) open [this page](http://localhost:8080/)

## Final Product

- main page
  !["main page"](https://github.com/yuhaoyann/scheduler/blob/master/public/docs/1.main_page.png)<br />
- create interview
  !["create interview"](https://github.com/yuhaoyann/scheduler/blob/master/public/docs/2.create_interview.png)<br />
- show interviews
  !["show interviews"](https://github.com/yuhaoyann/scheduler/blob/master/public/docs/3.show_page.png)<br />
- delete interview
  !["delete interview"](https://github.com/yuhaoyann/scheduler/blob/master/public/docs/4.delete_interviews.png)

## Dependencies

- "axios": "^0.24.0",
- "classnames": "^2.2.6",
- "node-sass": "^4.14.1",
- "normalize.css": "^8.0.1",
- "react": "^16.9.0",
- "react-dom": "^16.9.0",
- "react-scripts": "3.0.0"

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
