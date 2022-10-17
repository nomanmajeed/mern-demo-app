
const jwt = require("jsonwebtoken");
const { ObjectId } = require("mongodb");
const User = require("../models/user");

const authMiddleware = async (req, res, next) => {
    console.log("")
    if(req.headers && req.headers.authorization && req.headers.authorization.split(" ")[1]){
        const token = req.headers.authorization.split(" ")[1]
        console.log(token, " TOKEN 22" )

        try {
            const decodedData = await jwt.verify(token, "fake-env-jwt-key")
            const user = await User.findOne({ _id: ObjectId(decodedData.user._id)})
            if(!user){
                res.status(401).json({ error: "Unauthorized" });
                return;
            }
            next();
        } catch (error) {
            res.status(401).json({ error: "Unauthorized" });
        }
    }
    else{
        res.status(401).json({ error: "Unauthorized" });
    }

}

module.exports = authMiddleware;