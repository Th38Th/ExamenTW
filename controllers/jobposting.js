const JobPosting=require('../models').JobPosting;
const fmtValidationError = require('../models').fmtValidationError;

const controller = {
    addJobPosting: async (req, res) => {
        const jobposting = {
            descriere: req.body.descriere,
            deadline: req.body.deadline
        }
        try {
            const newDisplacement=await JobPosting.create(jobposting);
            res.status(200).send("JobPosting added.");
        }
        catch (error) {
            console.log('Error:', error);
            let msg = "Error creating JobPosting!"
            if (error.errors){
                res.status(400).send({message:fmtValidationError(msg,error)});
            } else {
                res.status(500).send({message:msg + "\n" + error.message});
            }
        }
    },
    importJobPostings: async(req, res) => {
        const jobs = req.body;
        console.log(jobs)
        try {
            await JobPosting.bulkCreate(jobs);
            res.status(200).send("JobPostings imported!");
        } catch (error){
            console.log('Error:', error);
            let msg = "Error creating JobPosting!"
            if (error.errors){
                res.status(400).send({message:fmtValidationError(msg,error)});
            } else {
                res.status(500).send({message:msg + "\n" + error.message});
            }
        }
    },
    getAllJobPostings: async(req, res) => {
        try {
            let jobpostings=await JobPosting.findAll();
            res.status(200).send(jobpostings);
        } catch(err){
            res.status(500).send({
                message: "Error selecting all jobpostings!"
            })
        }
    },
    getOneJobPosting: async(req, res) => {
        try{
            let jobpostingId = req.params['id'];
            const jobposting = await JobPosting.findOne({ where : { id: jobpostingId }});
            res.status(200).send(jobposting);
        } catch(err){
            res.status(500).send({
                message: "Error selecting jobposting!"
            })
        }
    },

    updateJobPosting: async(req, res) => {
        let jobpostingId=req.params['id'];
        const jobposting=await JobPosting.findOne({where:{id:jobpostingId}});
        jobposting.update({
            name:req.body.name,
            displacement:req.body.displacement
        })
            .then(() => {
                res.status(200).send({message:"Jobposting updated!"})
            })
            .catch((error) => {
                console.log('Error:', error);
                let msg = "Error updating jobposting!"
                if (error.errors){
                    res.status(400).send({message:fmtValidationError(msg,error)});
                } else {
                    res.status(500).send({message:msg+"\n"+error.message});
                }
            })
    },
    deleteJobPosting : async(req, res) => {
        try{
            let jobpostingId = req.params['id'];
            const jobposting = await JobPosting.destroy({
                where: {
                    id: jobpostingId
                }
            })
            res.status(200).send({
                message: "jobpostings " + jobposting + " deleted."
            });
        }catch(error){
            console.log("Error:",error);
            res.status(500).send({
                message: "Error deleting jobposting!"
            })
        }
    }
}

module.exports = controller;