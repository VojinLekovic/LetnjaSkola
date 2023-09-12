function card() {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => {
        return response.json();
      })
      .then((final) => {
        console.log(final.results);
      });
  }
  
  card();