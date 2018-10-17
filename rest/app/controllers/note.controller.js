var note = require('../models/note.model');

exports.create = (req, res) => {
    // Create a Note
    const n = new note({
    //   title1:req.body.title,
    //   content1:req.body.content

    title:"RAM",
    content:"123"
    });
 
    // Save Note in the database
    n.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
 };


exports.findAll = (req,res) => {
   note.find()
   .then(notes => {
       res.send(notes);
   }).catch(err => {
       res.status(500).send({
           message: err.message || "Some error occurred while retrieving notes."
       });
   });
};



exports.findOne = (req,res) => {
   Note.findById(req.params.noteId)
   .then(note => {
       if(!note) {
           return res.status(404).send({
               message: "Note not found with id " + req.params.noteId
           });
       }
       res.send(note)
   }).catch(err => {
       if(err.kind === 'objectId') {
           return res.status(404).send({
               message: "Note not found with id" + req.params.noteId
           });
       }
       return res.status(500).send({
           message: "Error retrieving note with id" + req.params.noteId
       });
   });
};

exports.update = (req,res) => {
   if(!req.body.content) {
       return res.status(400).send({
           message: "Note content can not be empty"
       });
   }
   Note.findByIdAndUpdate(req.params.noteId, {
       title: req.body.title,
       content: req.body.content
   }, {new: true})
   .then(note => {
       if(!note) {
           return res.status(404).send({
               message: "Note not found with id" + req.params.noteId
           });
       }
       res.send(note);
   }).catch(err => {
       if(err.kind === 'objectid') {
           return res.status(404).send({
               message: "Note not found with id "+ req.params.noteId
           });
       }
       return res.status(500).send({
           message: "Error updating note with id " + req.params.noteId
       });
   });
};

exports.delete = (req,res) => {
   Note.findByIdAndRemove(req.params.noteId)
   .then(note => {
       if(!note) {
           return res.status(404).send({
               message : "Note not found with id "+ req.params.noteId
           });
       }
       res.send({message:"Note deleted successfully!"});
   }).catch(err =>{
       if(err.kind === 'ObjectId' || err.name ==='NotFound') {
           return res.status(404).send({
               message: "Note not found with id" + req.params.noteId
           });
       }
       return res.status(500).send ({
           message:"Could not delete note id "+ req.body.noteId
       })
   });
}