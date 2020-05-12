## A simple app based on create-react-app to reduce the setup time and to focus on the business logic. 

### Reactjs + MaterialUI (includes a customizable theme file) + Centralized store using contextAPI + React Router + firebase Authentication. All juiced up. 


### Important files:

1) StoreContext.js ( centralised store)

2) Firebase.js (firebase config)

3) AppRouter.js (React router config)

4) Theme.js (Material UI theme config)


### Directory structure

```
├── App.css
├── App.js
├── App.test.js
├── assets
│   └── Theme.js  (Customizable material UI theme file)
├── components
│   ├── AppRouter.js  (Configure the app routes )
│   ├── Counter.js 
│   ├── DisplayCounter.js
│   ├── Firebase.js  (Firebase configuration)
│   ├── Login.js   (Firebase login component)
│   ├── NavBar.js  (App navigation bar)
│   ├── Register.js  (Firebase register component)
│   └── StoreContext.js
├── index.css
├── index.js
├── logo.svg
├── pages  
│   ├── About.js
│   ├── Contact.js
│   ├── Home.js
│   ├── LoginPage.js
│   ├── RegisterPage.js
│   └── TestPage.js
├── serviceWorker.js
└── setupTests.js
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

