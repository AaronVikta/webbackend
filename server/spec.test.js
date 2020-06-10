var models = require('./server.js').models

// models.Profile.create({name:'James'},(err,profile)=>{
//   console.log("data?", err,profile);
// })

// models.Profile.upsert({name:'James'},(err,profile)=>{
//   console.log("data?", err,profile);
// })

// models.Profile.findOrCreate({name:'James'},(err,profile)=>{
//   console.log("data?", err,profile);
// })

// models.Profile.findOrCreate({name:'James'},(err,profile)=>{
//   if(err){
//     console.log('There was an error',err);
//   }else if(profile){
//     profile.email = 'nick@mail.com';
//     profile.save((ue, updated)=>{
//       console.log('Updated?', updated);
//     })
//   }
// })


/*
var toSave= [
  {name:'vicky1', email:'vicky1@mail.com'},
  {name:'vicky2', email:'vicky2@mail.com'},
  {name:'vicky3', email:'vicky3@mail.com'},
  {name:'vicky4', email:'vicky4@mail.com'},
  {name:'vicky5', email:'vicky5@mail.com'},
  {name:'vicky6', email:'vicky6@mail.com'},
  {name:'vicky', email:'vicky@mail.com'}
  ]

  */

var filter ={
  where:{
    email: {like:'vicky'},
    // postCount:{gte:1}
  },// similar to MYSQL where clause
  order: 'date DESC', //order by: "field"
  limit:10,
  skip:0,
  fields:{
    email:true
  }
}

// Profile.Image

// models.Profile.findOne({where:{name:'vicky'}, order:'id DESC'}, (err, found)=>{
//   console.log('Found?', err,found);
// })

// models.Profile.find(filter, (err, found)=>{
//   console.log('Found?', err,found);
// })

models.Profile.findById("5ed90550680d2f0cd80cf674", filter, (err, found)=>{
  console.log('Found?', err,found);
})
