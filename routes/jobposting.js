const express = require("express");
const router = express.Router();
const jobpostingController = require("../controllers/jobposting");
const candidateRouter = require("./candidate");

router.post('/jobposting',jobpostingController.addJobPosting);
router.post('/jobposting/import',jobpostingController.importJobPostings);
router.get('/jobposting',jobpostingController.getAllJobPostings);
router.get('/jobposting/:id',jobpostingController.getOneJobPosting);
router.put('/jobposting/:id',jobpostingController.updateJobPosting);
router.delete('/jobposting/:id',jobpostingController.deleteJobPosting);

router.use('/jobposting/:id', (req, res, next) => {
    res.locals.currentJobId = req.params['id']
    next();
})

router.use('/jobposting/:id/', candidateRouter)

module.exports = router;