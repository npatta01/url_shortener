const mongoose = require("mongoose");
const validUrl = require("valid-url");


require('../models/url')

const Url = mongoose.model("url");
const shortid = require("shortid");
const {fetchRoute} =  require( "./shared");

const express = require('express');
const router = express.Router();


router.get("/url/:code", async (req, res) => {
    const urlCode = req.params.code;
    const item = await Url.findOne({ urlCode: urlCode });

    res.status(200).json(item);
});

// About page route.
router.post("/url", async (req, res) => {
    let { originalUrl, urlCode  } = req.body;

    if (urlCode == null){
      urlCode = shortid.generate();
    }

    const updatedAt = new Date();
    if (validUrl.isUri(originalUrl)) {
      try {
        const item = await Url.findOne({ urlCode: urlCode });
        if (item) {
          res.status(200).json(item);
        } else {
          const item = new Url({
            originalUrl,
            urlCode,
            updatedAt
          });
          await item.save();
          res.status(200).json(item);
        }
      } catch (err) {
        console.log(err)
        res.status(401).json("Invalid User Id");
      }
    } else {
      return res
        .status(401)
        .json(
          "Invalid Original Url"
        );
    }
  });




module.exports = router;  