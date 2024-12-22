const Listing = require("../models/listing");
const { listingSchema, reviewSchema } = require("../schema.js");
const mongoose = require("mongoose");

// index route function
module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  };

// new render route function
module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
  };  

// show listing route function
module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
    .populate({
      path : "reviews",
      populate:{
        path : "author",
      },
      })
    .populate("owner");
    if(!listing){
      req.flash("error","Listing you requested for does not exist!");
      res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
  };
// create listing route function
module.exports.createListing = async (req, res,next) => { 
  let url = req.file.path;
  let filename = req.file.filename;
  
  let result = listingSchema.validate(req.body);
  
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };

  await newListing.save();
  req.flash("success","New listing Created!");
  res.redirect("/listings");
  };  
// edit listing route function
module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
      req.flash("error","Listing you requested for does not exist!");
      res.redirect("/listings");
    }
    let orignalImageUrl = listing.image.url;
    orignalImageUrl = orignalImageUrl.replace("/upload", "/upload/w_250");
    res.render("listings/edit.ejs", { listing , orignalImageUrl });
  };
// update listing route function  
module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }

    req.flash("success","Listing Updated!");
    res.redirect(`/listings/${id}`);
  };
//   delete listing route function
module.exports.destroyListing =  async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success","listing Deleted!");
    res.redirect("/listings");
  };   