# Guess the Number
A simple game for guessing numbers.

## Getting Started
```sh
git clone https://github.com/ppalladino/guess-the-number.git
```

### Play the game
Open /index.html in your browser and have fun!

### Development Environment
The development environment uses Node.js to execute tooling: development server,
transpiling, linting, unit testing, and, building.
1. install [Node.js](https://nodejs.org/en/download/).

1. Install dependency packages and start the development server.
```sh
cd guess-the-number
npm install
npm run start
```
1. View the application in your browser by navigating to http://localhost:8080.
1. Any changes to source will hot reload the browser and automatically
trigger a linting cycle.

### Building
Game scripts are tested and then bundled into /dist
```sh
npm run build
```

### Linting
Uses the [airbnb eslint config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
```sh
npm run linter
```

### Unit tests
```sh
npm run test
```
