import mongoose from "mongoose";

const issuesSchema = new mongoose.Schema({
    
    issue_title :{
        type: String,
        required:true,
    },
    category :{
        type: String,
        required:true,
    },
    
});


const issuesModel = mongoose.model('issues', issuesSchema);

export default issuesModel;