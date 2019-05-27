const mongoose = require("mongoose");
const Url = mongoose.model("url");
const errorUrl='http://localhost/error';


const fetchRoute = async (req, res) => {
    const urlCode = req.params.code;
    const item = await Url.findOne({ urlCode: urlCode });
    if (item) {
        return res.redirect(item.originalUrl);
    } else {
        return res.redirect(errorUrl);
    }
};



module.exports = {fetchRoute};