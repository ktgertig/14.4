var movies = [
  	{
    		id: 1,
		title: 'Harry Potter',
		desc: 'Film o czarodzieju',
		poster: 'https://ia.media-imdb.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		poster: 'https://ia.media-imdb.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SY1000_CR0,0,673,1000_AL_.jpg'
	},
	{
		id: 3,
		title: 'Terminator',
		desc: 'Film o cyborgu',
		poster: 'https://ia.media-imdb.com/images/M/MV5BODE1MDczNTUxOV5BMl5BanBnXkFtZTcwMTA0NDQyNA@@._V1_SY1000_CR0,0,666,1000_AL_.jpg'
	},
	{
		id: 4,
		title: 'Park jurajski',
		desc: 'Film o dinozaurach',
		poster: 'https://ia.media-imdb.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_.jpg'
	}

];

var Movie = React.createClass({
  	propTypes: {
    		movies: React.PropTypes.array.isRequired,
  	},

  	render: function() {
    		var movies = this.props.movies.map(function(movie) {
      			return React.createElement('li', {key: movie.id},
        			React.createElement(MovieTitle, {movieTitle: movie.title}),
        			React.createElement(MovieDescription, {movieDesc: movie.desc}),
        			React.createElement(MoviePoster, {moviePoster: movie.poster})
      			);
    		});

    		return (
      			React.createElement('div', {},
      				React.createElement('h1', {}, 'Lista filmów:'),
      				React.createElement('ul', {}, movies)
      			)
    		);
 	 }	
});

var MovieTitle = React.createClass({
	propTypes: {
    		movieTitle: React.PropTypes.string.isRequired,
 	},

  	render: function() {
    		return React.createElement('h2', {}, this.props.movieTitle);
  	}
});

var MovieDescription = React.createClass({
	propTypes: {
    		movieDesc: React.PropTypes.string.isRequired,
  	},

  	render: function() {
    		return React.createElement('p', {}, this.props.movieDesc);
  	}
});

var MoviePoster = React.createClass({
	propTypes: {
    		moviePoster: React.PropTypes.string.isRequired,
  	},

  	render: function() {
    		return React.createElement('img', {src: this.props.moviePoster, height: 300, width: 200});
  	}
});

var moviesElement = React.createElement(Movie, {movies: movies});
ReactDOM.render(moviesElement, document.getElementById('app'));
