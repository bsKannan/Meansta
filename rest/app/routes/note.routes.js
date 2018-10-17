module.exports = (app) => {
    var notes = require('../controllers/note.controller');

    

    app.get('/notes', notes.findAll);

    app.get('/notes/:noteId', notes.findOne);

     app.post('/notes', notes.create);

    app.put('/notes/:noteId',notes.update);

    app.delete('/notes/:noteId', notes.delete);
    
}