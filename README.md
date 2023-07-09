# Lord of the Pies

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

### Summary:

Are you looking for new dessert recipes to impress your friends, or you want to share some recipes that you are proud of? Well then look no further than the Lord of the Pies! With our new website, everyone can share their love of desserts!

### How:

- Technologies: Mysql, sequelize, node.js, express.js, handlebars
- Frameworks: Bulma CSS

### APIs:

- [Cloudinary](https://cloudinary.com/documentation/cloudinary_get_started) for asset management
- [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)

## Table of Contents

- [Installation](#installation)

- [Usage](#usage)

- [Development Team](#development-team)

- [Tests](#tests)

- [Challenges and Things Learned](#challenges-and-things-learned)

- [Future Considerations and Improvements](#future-considerations-and-improvements)

- [Acknowledgments](#acknowledgements)

- [License](#license)

## Installation

This application requires the user to have Node.js downloaded onto their system. It is recommended that the user downloads v16 up to v18 for this application to run properly. You can download it from [here](https://nodejs.org/en/blog/release/v16.16.0).

MySQL is also required for this app to run properly. Follow this step-by-step [guide](https://coding-boot-camp.github.io/full-stack/mysql/mysql-installation-guide) to make sure everything is downloaded smoothly.

After opening up this app, make sure to type these into the integrated terminal and install these required npm packages/dependencies:

- `npm i express` is required to build the server.
- `npm i express-session` is session middleware for temporarily saving data in express.
- `npm i express-handlebars` is used for templating html in the app for different routes.
- `npm i connect-session-sequelize` connects the session with sequelize.
- `npm i mysql2` connects users to the MySQL database.
- `npm i dotenv` handles environmental variables to hold sensitive data.
- `npm i sequelize` is the tool used for ORM.
- `npm i bcrypt` is needed for password hashing.
- `npm i jest` is needed to run unit testing on the application.

## Usage

Using our website is easy! First, you must create an account.

1. Click to signup for an account on the top right of the page.
2. Once logged in, you will be able to view and or post your own recipes.
3. You can search for, view and comment on other people's recipes through the homepage.

[Click here for the Live Site](https://lord-of-the-pies-f3c957a9b4a8.herokuapp.com/)

## Development Team

- [Damien Brockington](https://github.com/damez21)
- [Elvis Lau](https://github.com/elvislau74)
- [Myro Joy Lee](https://github.com/myrojoylee)
- [Aubrey McKinney](https://github.com/shadowasders)
- [Jimmy Pedone](https://github.com/JimmyPedone)

## License

## Tests

You will be able to perform unit tests using the jest package. Just type into the terminal `npm run test` or `npx jest` to run through all the tests provided in the test folder.

## Challenges and Things Learned

- Coordinating changes between models, views and controller code
- Git workflow
- Team communication/collaboration

## Future Considerations and Improvements

- Short Term:
  - Clean up styling for better UI
- Long Term:
  - Add functionality to chatbot using openAI API
  - Use tags to create category buttons for 'easy-search' function
  - Add a way to favorite recipes and add them to your personal list
  - Adding validation for sign-up
  - Add better error code to guide users to making a better password

## Acknowledgements

### Sources:

- Chatbox code adapted from [Federico Azzu](https://github.com/federicoazzu/mscbot)'s repository.
- Code for Navbar Burger adapted from the Bulma [Documentation](https://bulma.io/documentation/components/navbar/#navbar-burger)

### Thank you...

- ... to our instructional team at Bootcamp for all the help and feedback.

## License

[MIT License](https://opensource.org/licenses/MIT)
