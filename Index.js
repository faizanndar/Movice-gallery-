const movies = [
  { title: "Action Movie 1", genre: "action", image: "abc1.jpg" },
  { title: "Comedy Movie 1", genre: "comedy", image: "abc2.jpg" },
  { title: "Drama Movie 1", genre: "drama", image: "abc3.jpg" },
  { title: "Action Movie 2", genre: "action", image: "oop16.jpg" },
  { title: "Comedy Movie 2", genre: "comedy", image: "oop3.jpg" },
  { title: "Drama Movie 2", genre: "drama", image: "abc3.jpg" },
];
function displayMovies(filteredMovies) {
  const container = document.getElementById("movie-container");
  container.innerHTML = "";

  filteredMovies.forEach((movie) => {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}">
      <h3>${movie.title}</h3>
    `;
    container.appendChild(card);
  });
}

function filterMovies(genre) {
  if (genre === "all") {
    displayMovies(movies);
  } else {
    const filtered = movies.filter(movie => movie.genre === genre);
    displayMovies(filtered);
  }
}

window.onload = () => {
  displayMovies(movies);
};

   


      
    
   
      

    
 
