When you create a new react app with vite then the node_modules folder will no be there.

To initialize `node modules` folder run this command in that project directory

-   `npm install` or `npm i`

```json
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  ```

Run the above command as -
    `npm run dev`

### Deleted all the files and folder from `src` folder except -

- **`App.jsx`**
```jsx
function App() {
  return (
    <h1>React app using vite | Ranjit Dey</h1>
  )
}

export default App

```
- **`main.jsx`**
```javascript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

Here the `index.html` file is outside the `public` folder and `script` tag is already included to the `index.html` file and ther is no json like - 

```json
 "react-scripts": "5.0.1",
 ```
 in `package.json` which load the script tag.