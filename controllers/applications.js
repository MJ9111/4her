const express =require('express');
const router = express.Router();
const User = require('../models/User')
//const Product = require('../models/product')



// controllers/applications.js

// Updating product details
//router.post('/:applicationId', async (req, res) => {
//    try {
      // Find the user from req.session
//      const currentProduct = await Product.findById(req.session.Product._id);
      // Find the current application from the id supplied by req.params
//      const Product = currentProduct.applications.id(req.params.applicationId);
     
//      application.set(req.body);
      // Save the current 
//      await currentProduct.save();
      // Redirect back to the show view of the current application
//      res.redirect(
//        `/users/${currentProduct._id}/applications/${req.params.applicationId}`
//      );
//    } catch (error) {
//      console.log(error);
//      res.redirect('/')
//    }
//  });

// Show all applications of current user
router.get('/', async (req, res) => {
    try {
      // Look up the user from req.session
      const currentUser = await User.findById(req.session.user._id);
      // Render index.ejs, passing in all of the current user's 
      // applications as data in the context object. 
      res.render('applications/index.ejs', {
        applications: currentUser.applications,
      });
    } catch (error) {
      // If any errors, log them and redirect back home
      console.log(error)
      res.redirect('/')
    }
  });

  router.get('/', (req, res) => {
    res.render('index'); // Adjust if your view file has a different name
});






// Get company form
router.get('/new', async (req, res) => {
    res.render('applications/new.ejs');
  });

  // controllers/applications.js`

  // POST company
router.post('/', async (req, res) => {
    try {
      // Look up the user from req.session
      const currentUser = await User.findById(req.session.user._id);
  
      // Modify the date part of the form
      console.log(req.body)
      // Push req.body (the new form data object) to the
      // applications array of the current user
      currentUser.applications.push(req.body);
      // Save changes to the user
      await currentUser.save();
      // Redirect back to the applications index view
      res.redirect(`/users/${currentUser._id}/applications`);
    } catch (error) {
      // If any errors, log them and redirect back home
      console.log(error);
      res.redirect('/')
    }
  });



router.get('/:applicationId', async (req, res) => {
    try {
      // Look up the user from req.session
      const currentUser = await User.findById(req.session.user._id);
      // Find the application by the applicationId supplied from req.params
      const application = currentUser.applications.id(req.params.applicationId);
      // Render the show view, passing the application data in the context object
 

      res.render('applications/show.ejs', {
        application: application,  });
    } catch (error) {
      // If any errors, log them and redirect back home
      console.log(error);
      res.redirect('/')
    }
  });



router.get('/:applicationId/edit', async (req, res) => {
    try {
      const currentUser = await User.findById(req.session.user._id);
      const application = currentUser.applications.id(req.params.applicationId);
      res.render('applications/edit.ejs', {
        application: application,
      });
    } catch (error) {
      console.log(error);
      res.redirect('/')
    }
  }); 

router.delete('/:applicationId', async (req, res) => {
    try {
      // Look up the user from req.session
      const currentUser = await User.findById(req.session.user._id);
      // Use the Mongoose .deleteOne() method to delete 
      // an application using the id supplied from req.params
      currentUser.applications.id(req.params.applicationId).deleteOne();
      // Save changes to the user
      await currentUser.save();
      // Redirect back to the applications index view
      res.redirect(`/users/${currentUser._id}/applications`);
    } catch (error) {
      // If any errors, log them and redirect back home
      console.log(error);
      res.redirect('/')
    }
  });

  // controllers/applications.js`

router.put('/:applicationId', async (req, res) => {
    try {
      // Find the user from req.session
      const currentUser = await User.findById(req.session.user._id);
      // Find the current application from the id supplied by req.params
      const application = currentUser.applications.id(req.params.applicationId);
      // Use the Mongoose .set() method
      // this method updates the current application to reflect the new form
      // data on `req.body`
      application.set(req.body);
      // Save the current user
      await currentUser.save();
      // Redirect back to the show view of the current application
      res.redirect(
        `/users/${currentUser._id}/applications/${req.params.applicationId}`
      );
    } catch (error) {
      console.log(error);
      res.redirect('/')
    }
  });

  router.post('/users/:userId/applications', (req, res) => {
    const userId = req.params.userId;
    const { title, price, details } = req.body;

    // Save the product details to your database or file system
    // For simplicity, let's assume saving to a file
    const fs = require('fs');
    const productData = `${title}, ${price}, ${details}\n`;
    fs.appendFileSync('/home/student/4her/views/applications/product', productData);

    // Redirect back to the index page or wherever appropriate
    res.redirect(`/users/${userId}/applications`);
  });
module.exports = router;