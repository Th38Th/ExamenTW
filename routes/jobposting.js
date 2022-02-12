const express = require("express");
const router = express.Router();
const jobpostingController = require("../controllers/jobposting");
const candidateRouter = require("./candidate");

router.post('/jobposting',jobpostingController.addJobPosting);
router.get('/jobposting',jobpostingController.getAllJobPostings);
router.get('/jobposting/:id',jobpostingController.getOneJobPosting);
router.put('/jobposting/:id',jobpostingController.updateJobPosting);
router.delete('/jobposting/:id',jobpostingController.deleteJobPosting);

router.use('/jobposting/:id/candidate', candidateRouter)

module.exports = router;