const express = require("express");
const router = express.Router();
const candidateController = require("../controllers/candidate");

router.post('/candidate/',candidateController.addCandidate);
router.get('/candidate',candidateController.getAllCandidates);
router.get('/candidate/:cid',candidateController.getCandidate);
router.put('/candidate/:cid',candidateController.updateCandidate);
router.delete('/candidate/:cid',candidateController.deleteCandidate);

module.exports = router;