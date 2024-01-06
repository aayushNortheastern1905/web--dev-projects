const express = require('express')
const multer = require('multer')
const Sneaker = require('../models/sneaker')
const SneakerAsset = require('../models/sneakerAsset')
const router = new express.Router()

// endpoint to create a sneaker
router.post('/sneaker/add', async (req, res) => {
    const sneaker = new Sneaker(req.body)

    try {
        await sneaker.save()
        res.status(201).send({ sneaker })
    } catch(e) {
        res.status(400).send(e)
    }
})

// endpoint to get the all the sneakers
router.get('/sneakers', async (req, res) => {
    try{
        const sneakers = await Sneaker.find({})
        res.send(sneakers)
    } catch(e) {
        res.status(500).send()
    }
})

// endpoint to update sneaker details 
router.patch('/sneaker/update/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const updateFields = req.body; 
  
      const updatedSneaker = await Sneaker.findByIdAndUpdate(id, updateFields, {
        new: true, 
        runValidators: true, 
      });
  
      if (!updatedSneaker) {
        return res.status(404).send({ error: 'Sneaker not found' });
      }
  
      res.send(updatedSneaker);
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: 'Server Error' });
    }
  });

// endpoint to delete a sneaker
router.delete('/sneaker/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        
        const deletedSneaker = await Sneaker.findByIdAndDelete(id);

        if(!deletedSneaker) {
            return res.status(404).send({ error: 'Sneaker not found' });
        }

        res.send(deletedSneaker)
    } catch(e) {
        res.status(500).send({ error: 'Server Error' });
    }
})

module.exports = router
