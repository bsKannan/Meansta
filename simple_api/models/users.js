var mongooose = require('mongoose');

var UserSchema = new mongooose.Schema({
    name: {
        type:String,
        required:true,
        unique:true
    },
    username: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required:true
    },
    address: {
        street: {
            type:String
        },
        suite:{
            type:String
        } ,
        city: {
            type:String
        },
        zipcode: {
            type:String
        },
        geo: {
            lat: {
                type:String
            },
            lng: {
                type:String
            }
        }
    },
    phone: {
        type: String
    },
    website: {
        type: String
    },
    company: {
        cname: {
            type:String
        },
        catchPhrase:  {
            type:String
        },
        bs : {
            type:String
        }
    }
})



// var companySchema=new mongooose.Schema({
//     cname: {type:String,
//         required:true
//         },
//         catchPhrase: {type:String,
//             required:true
//             },
//         bs : {type:String,
//             required:true
//             },
// })

// var geoSchema=new mongooose.Schema({
//     lat:{type:String,
//         required:true
//         },
//     lng:{type:String,
//         required:true
//         },
// })

// var addressSchema=new mongooose.Schema({
//     street:{type:String,
//             required:true
//             },
//     suite: {type:String,
//         required:true
//         },
//     city: {type:String,
//         required:true
//         },
//     zipcode:{type:String,
//         required:true
//         },
//         geo:[geoSchema]
// })
module.exports = mongooose.model('users',UserSchema)