const express = require('express');
const router = express.Router();
const Supply = require('../models/supply');
const { testQuality, checkCompliance } = require('../modules')



//add a new supply
router.post('/', async (req,res) => {
    try {
        const { name, batchId, type, supplier } = req.body;

        // Test Quality and Check Compliance
        const qualityScore = testQuality(req.body);
        const complianceCheck = checkCompliance({ ...req.body, qualityScore });

        // Determine Supply Status
        const status = complianceCheck ? 'Approved' : 'Rejected';

        // Create new supply record
        const newSupply = new Supply({
            name,
            batchId,
            type,
            supplier,
            receivedDate: new Date(),
            status,
            qualityScore,
            complianceCheck
        });

        // Save to DB
        await newSupply.save();

        // Log status message
        console.log(`Supply with Batch ID: ${batchId} has been ${status.toLowerCase()}.`);

        // Return the created supply as a response
        res.status(201).json(newSupply);
    } catch (error) {
        console.error('Error creating supply:', error);
        res.status(500).json({ error: 'Server error while creating supply' });
    }

});

router.get('/test',(req,res) => {
    res.send('hello tanish don worry the backend will work soon');
});

// get all the supplies
router.get('/',async (req,res) => {
    
        const {status} = req.query;
        let query = {};

        if (status) { 
          supplies = await Supply.find({ status })
        }else {
            supplies = await Supply.find();
        }

     res.status(200).json(supplies);
});

router.put('/:id',async(req,res) => {
try{
    const { status }= req.body;
    const supply = await supply.findByIdAndUpdate(req.params.id, { status },{ new :true});
    if(!supply)return res.status(404).json({error:"supply not found "});
    res.json(supply);
}catch(err){
    res.status(500).json({error: err.message });
}
});

module.exports = router;