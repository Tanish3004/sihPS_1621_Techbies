// Automated Quality Testing Function (Simulated)
function testQuality(supply) {
    return Math.floor(Math.random() * 100);
}

// Compliance Check Function (Simulated)
function checkCompliance(supply) {
    return supply.qualityScore > 5;
}

module.exports = {
    testQuality,
    checkCompliance
};