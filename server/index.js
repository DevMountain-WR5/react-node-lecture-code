// Require express (similar to importing)
const express = require('express');
const ctrl = require('./controller');

// Create a variable, saved to an instance of express
const app = express();

// Implement a JSON parser in some middleware
app.use(express.json());

//Endpoints
// app.get('/api/greeting', (req, res) => {
//     res.status(200).send('Hello World!')
// })

app.get('/api/greeting', ctrl.greeting);
app.get('/api/movies', ctrl.getMovies);
app.get('/api/movie/:id', ctrl.getSingleMovie);
app.post('/api/movie', ctrl.addMovie);
app.put('/api/movie/:id', ctrl.updateName);
app.delete('/api/movie/:id', ctrl.deleteMovie);

// Use the listen method, and place your server on a port (between 3001 and 8000)
app.listen(3333, () => console.log('Server running on 3333'));