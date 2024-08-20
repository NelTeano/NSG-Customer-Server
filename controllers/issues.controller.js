
// MODELS
import issuesModel from "../models/issues.js"

const getIssues = async (req, res) => {

    try {
        const data = await issuesModel.find({});
        res.send(data);
        console.log("Get issues Data Success");
    } catch (error) {
        console.log("Failed getting the issues data", error);
        res.status(500).json({ message: "Error Get issues", error });
    }
}

export { getIssues }

