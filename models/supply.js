const mongoose = require('mongoose');


const supplySchema = new mongoose.Schema({
    name: { type: String, required: true },
    batchId: { type: String, required: true },
    type: { type: String, required: true },
    supplier: { type: String, required: true },
    receivedDate: { type: Date, default: Date.now },
    status: { type: String, default: 'Pending' },
    qualityScore: { type: Number, required: true },
    complianceCheck: { type: Boolean, required: true }
});
module.exports = mongoose.model('supply',supplySchema);