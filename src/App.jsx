import React,{ useState } from 'react'
import './App.css'
import { ThemeContext, themes } from './store/ThemeContext';
import { Icon } from '@iconify/react';
import SearchBar from './Components/SearchBar';
import Content from './Components/Content';

function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <p className='header'>devfinder</p>
          <ThemeContext.Consumer>
            {({ changeTheme }) => (
              <button
                className="theme-button"
                color="link"
                onClick={() => {
                  setDarkMode(!darkMode);
                  changeTheme(darkMode ? themes.light : themes.dark);
                }}
              >
                <span >{darkMode ? 'Light' : 'Dark'}  </span>
                {darkMode ? <Icon icon="ph:sun-duotone" /> : <Icon icon="ph:moon-duotone" />}
              </button>
            )}
          </ThemeContext.Consumer>
      </header>
      <Content />
    </div>
  );
}

export default App
