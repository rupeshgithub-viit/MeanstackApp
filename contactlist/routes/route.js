const express = require('express');
const contact = require('../models/contacts');
const router = express.Router();
const Contact = require('../models/contacts');

router.get('/contacts',(req,res,next)=>{
    //res.send('Retriving the contact list');

    Contact.find(function(err,contact){
        res.json(contact);
    })
});


router.post('/contact',(req,res,next)=>{
    //logic
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });

    newContact.save((err, contact)=>{
        if(err){
            res.json({msg: 'Failed toadd contact'});
        }
        else{
            res.json({msg: 'Contact added successfully'});
        }
    });
});

//delete
router.delete('/contact/:id',(req,res,next)=>{
    //logic
    Contact.remove({_id: req.params.id}, function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });


});

module.exports = router;