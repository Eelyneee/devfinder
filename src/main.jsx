import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ThemeContextWrapper from './store/ThemeContextWrapper.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContextWrapper>
    <React.StrictMode>
      <App />
    </React.StrictMode>{' '}
</ThemeContextWrapper>,
)
