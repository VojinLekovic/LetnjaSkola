//src/ChuckNorris.js
import React, { useState, useEffect } from 'react';


const Joke = () => {
    const [joke, setJoke] = useState('');

    const fetchJoke = () => {
        fetch('https://api.chucknorris.io/jokes/random')
            .then((response) => response.json())
                .then((data) =>{
                    setJoke(data.value);
                });
    }
    
    useEffect(() => {
        fetchJoke();
    },[]);

    return(
        <div>
            <h2>ChuckNorris</h2>
            <p>{joke}</p>
            <button onClick={fetchJoke}>Click</button>
        </div>
    );
};

export default Joke;