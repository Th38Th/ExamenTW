const express = require("express");
const router = express.Router();
const jobpostingController = require("../controllers/jobposting");
const candidateController = require("../controllers/candidate");

router.post('/jobposting',jobpostingController.addJobPosting);
router.get('/jobposting',jobpostingController.getAllJobPostings);
router.get('/jobposting/:id',jobpostingController.getOneJobPosting);
router.put('/jobposting/:id',jobpostingController.updateJobPosting);
router.delete('/jobposting/:id',jobpostingController.deleteJobPosting);

router.use('/jobposting/:id/candidate', candidateController)

module.exports = router;