var User = require('../models/users');

exports.create = (req,res) =>{
    if(!req.body) {
        return res.status(400).send({
            message: "User content can not be empty"
        });
    }
    const user = new User({
        // title: req.body.title,
        // content: req.body.content
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        address:{
            street: req.address.street,
            suite: req.address.suite,
            city: req.address.city,
            zipcode: req.address.zipcode,
            geo: {
                lat: req.body.address.geo.lat,
                lng: req.body.address.geo.lng
            }
        },
        phone: req.body.phone,
        website: req.body.website,
        company: {
            cname: req.body.company.cname,
            catchPhrase: req.body.company.catchPhrase,
            bs: req.body.company.bs
        }

    });

    user.save()
    .then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

exports.findAll = (req,res) => {
    User.find()
    .then(users => {
        res.json(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        })
    })
    
}

exports.findOne = (req,res) => {
    User.findById(req.params.userId)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.body.userId
            });
        }
        res.json(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.body.userId
            });
        }
        return res.status(500).send({
            message: "Error retrieving user with id " + req.body.userId
        })
    })
}

// exports.update = (req,res) => {
//     if(!req.body.content) {
//         return res.status(400).send({
//             message:"Note content can not be empty"
//         });
//     }
//     Note.findByIdAndUpdate(req.params.noteId, {
//         title: req.body.title,
//         content: req.body.content
//     },{new:true})
//     .then(note => {
//         if(!note) {
//             return res.status(404).send({
//                 message: "Note not found with id " + req.params.noteId
//             });
//         }
//         res.send(note);
//     }).catch(err => {
//         if(err.kind === 'ObjectId') {
//             return res.status(404).send({
//                 message:"Note not found with id " + req.params.noteId
//             });
//         }
//         return res.status(500).send({
//             message: "Error updating note with id"
//         });
//     });
// };

// exports.delete = (req,res) => {
//     Note.findByIdAndRemove(req.params.noteId)
//     .then(note => {
//         if(!note) {
//             return res.status(404).send({
//                 message: "Note not found with id " + req.params.noteId
//             });
//         }
//         res.send({message: "Note deleted successfully!" });
//     }).catch(err => {
//         if(err.kind === 'ObjectId' || err.name === 'NotFound') {
//             return res.status(404).send({
//                 message: "Note not found with id " + req.params.noteId
//             });
//         }
//         return res.status(500).send({
//             message: "Could not delete note with id " + req.params.noteId
//         });
//     });
// };