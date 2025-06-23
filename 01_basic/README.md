

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deleted all the files from `src` folder except -

- **`App.js`**
```javascript
function App() {
  return (
    <h1>New React Series | Ranjit Dey </h1>
  );
}

export default App;
```
- **`index.js`**
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> // you can remove this also
    <App />
  </React.StrictMode>
);
```

There is no `script` tag in  `./public/index.html` so how the `index.js` is rendered from `./src/index.js`

for that there is an script which load the js

```json
 "react-scripts": "5.0.1",
 ```
 this adds the js file to the html file
