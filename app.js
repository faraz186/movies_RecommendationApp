const movieForm = document.querySelector('#movieForm');
const movieList = document.querySelector('#movieList');

movieForm.addEventListener('submit', e => {
  e.preventDefault();

  const genre = document.querySelector('#genre').value;
  const rating = document.querySelector('#rating').value;
  const year = document.querySelector('#year').value;


  fetch('movies.json')
    .then(response => response.json())
    .then(data => {
      const filteredMovies = data.filter(movie => {
        return (
          movie.genre.toLowerCase().includes(genre.toLowerCase()) &&
          movie.rating >= rating &&
          movie.year >= year
        );
      });

      const movieElements = filteredMovies.map(movie => {
        const movieElement = document.createElement('div');
        movieElement.innerHTML = `
          <h2>${movie.title}</h2>
          <p>Genre: ${movie.genre}</p>
          <p>Rating: ${movie.rating}</p>
          <p>Release Year: ${movie.year}</p>
        `;
        return movieElement;
      });


      movieList.innerHTML = '';
      movieElements.forEach(movieElement => {
        movieList.appendChild(movieElement);
      });
    })
    .catch(error => console.log(error));
});
  

  function recommendMovies(genre, rating, releaseYear) {
    const filteredMovies = movies.filter(movie => {
      return movie.genre === genre && movie.rating >= rating && movie.releaseYear >= releaseYear;
    });
    
    return filteredMovies;
  }
  
  function displayRecommendations(recommendations) {
    const recommendationsElement = document.getElementById('recommendations');
    recommendationsElement.innerHTML = '';
  
    recommendations.forEach(movie => {
      const movieElement = document.createElement('div');
      movieElement.innerHTML = `<h3>${movie.title}</h3><p>Genre: ${movie.genre}, Rating: ${movie.rating}, Release Year: ${movie.releaseYear}</p>`;
      recommendationsElement.appendChild(movieElement);
    });
  }
  
  function handleRecommendButtonClick() 
  {
    const genre = document.getElementById('genre').value;
    const rating = document.getElementById('rating').value;
    const releaseYear = document.getElementById('release-year').value;
  
    const recommendations= recommendMovies(genre, rating, releaseYear);
    displayRecommendations
}
  

function recommendMovies(genre, rating, releaseYear) {
    const filteredMovies = movies.filter(movie => {
      return movie.genre === genre && movie.rating >= rating && movie.releaseYear >= releaseYear;
    });
    
    return filteredMovies;
  }
  
  function displayRecommendations(recommendations) {
    const recommendationsElement = document.getElementById('recommendations');
    recommendationsElement.innerHTML = '';
  
    recommendations.forEach(movie => {
      const movieElement = document.createElement('div');
      movieElement.innerHTML = `<h3>${movie.title}</h3><p>Genre: ${movie.genre}, Rating: ${movie.rating}, Release Year: ${movie.releaseYear}</p>`;
      recommendationsElement.appendChild(movieElement);
    });
  }