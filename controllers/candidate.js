const Candidate = require('../models').Candidate;
const fmtValidationError = require('../models').fmtValidationError;

const controller = {
    addCandidate: async (req,res) => {
        const candidate = {
            name: req.body.name,
            cv: req.body.cv,
            email: req.body.email,
            jobId: req.params['id']
        }
        try {
            const newCandidate=await Candidate.create(candidate);
            res.status(200).send("Candidate added!");
        }
        catch (error) {
            console.log('Error:', error);
            let msg = "Error creating new candidate!"
            if (error.errors){
                res.status(400).send({message: fmtValidationError(msg,error)});
            } else {
                res.status(500).send({message: msg + "\n" + error.message});
            }
        }
    },
    getCandidate: async(req, res) => {
        try{
            let candidateId = req.params['cid'];
            const candidate = await Candidate.findOne({ where: { id: candidateId }});
            res.status(200).send(candidate);
        } catch(err){
            res.status(500).send({
                message: "Error selecting candidate!"
            })
        }
    },
    updateCandidate: async(req, res) => {
        let candidateId = req.params['cid'];
        const candidate=await Candidate.findOne({ where: { id: candidateId }});
        candidate.update({
            name: req.body.name,
            cv: req.body.cv,
            email: req.body.email,
            jobId: req.params['id'] 
        })
            .then(() => {
                res.status(200).send({message:"Edited candidate"})
            })
            .catch((error) => {
                let msg = "Error updating candidate!"
                if (error.errors){
                    res.status(400).send({message:fmtValidationError(msg, error)});
                } else {
                    res.status(500).send({message:msg + "\n" + error.message});
                }
            })
    },
    deleteCandidate : async(req,res) => {
        try{
            let candidateId = req.params['cid'];
            const candidate = await Candidate.destroy({
                where: {
                    id: candidateId
                }
            })
            res.status(200).send({
                message: "Candidate" + candidateId + " deleted."
            });
        }
        catch(error){
            res.status(500).send({
                message: "Error deleting candidate!"
            })
        }
    }
}

module.exports = controller;