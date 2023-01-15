import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [buttons, setButtons] = useState([]);
  const [joke, setJoke] = useState({});

  useEffect(() => {
    const url = 'https://api.chucknorris.io/jokes/categories';

    const fetchData = async () => {
      try {
          const response = await fetch(url);
          const json = await response.json();
          setButtons(json);
      } catch (error) {
          console.log("error", error);
      }
    };

    fetchData();

  }, []);

  
  const getJoke = async (category) => {
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
    try {
      const response = await fetch(url);
      const json = await response.json();
      setJoke(json);
    } catch (error) {
        console.log("error", error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <p>Chuck Norris Jokes</p>

        <div className="btn-wrapper">
          {buttons.map((item) => {
          return (
            <button 
              key={item}
              className="btn"
              onClick={() => getJoke(item)}
            >{item}</button>
          )
        })}
        </div>

        <div className="joke-wrapper">
          {joke.value}
        </div>
        
      </header>
    </div>
  );
}

export default App;
