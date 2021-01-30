// biocontroller.js

// import bio model
Bio = require('./bioModel');

// for index
exports.index = function (req, res) {
  Bio.get(function (err, bio) {
    if (err)
      res.json({ status: "error", message: err });
    res.json({ status: "success", message: "Got Bio Successfully", data: bio });
  });
};

// for creating new bio
exports.add = function (req, res) {
  var bio = new Bio();
  bio.name = req.body.name? req.body.name: bio.name;
  bio.email = req.body.email;
  bio.phone = req.body.phone;
  bio.address = req.body.address;

  // save and check error
  bio.save(function (err) {
    if (err)
      res.json(err);
res.json({ message: "New bio added!", data: bio });
  });
};

// view bio
exports.view = function (req, res) {
  Bio.findById(req.params.bio_id, function (err, bio) {
    if (err) 
      res.json({ message: 'Bio Details', data: bio });
  });
};

// update bio
exports.update = function (req, res) {
  Bio.findById(req.params.bio_id, function (err, bio) {
    if (err)
      res.send(err);
    bio.name = req.body.name ? req.body.name : bio.name;
    bio.email = req.body.email;
    bio.phone = req.body.phone;
    bio.address = req.body.address;

// save and check errors
    bio.save(function (err) {
      if (err)
        res.json(err)
      res.json({ message: "Bio updated successfully", data: bio });
    });
  });
};

// delete bio
exports.delete = function (req, res) {
  Bio.deleteOne({ _id: req.params.bio_id }, function(err, contact) {
    if (err)
      res.send(err)
    res.json({ status: "success", message: 'Bio deleted' })
});
};

