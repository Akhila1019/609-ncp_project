const axios = require('axios'); // allows to make request


exports.foodRoutes = (req, res) => {
    // Make a get request to /food_delivery
    axios.get('http://localhost:3000/fd')
        .then(function(response){
            // console.log(response.data)
            res.render('food_delivery', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
    
}

exports.medicineRoutes = (req, res) => {
    // Make a get request to /food_delivery
    axios.get('http://localhost:3000/md')
        .then(function(response){
            // console.log(response.data)
            res.render('medicine_delivery', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
    
}

exports.groceryRoutes = (req, res) => {
    // Make a get request to /food_delivery
    axios.get('http://localhost:3000/gd')
        .then(function(response){
            // console.log(response.data)
            res.render('grocery_delivery', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
    
}

exports.viewRoutes = (req, res) => {
    // Make a get request to /food_delivery
    axios.get('http://localhost:3000/view')
        .then(function(response){
            // console.log(response.data)
            res.render('view_profile', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
    
}

exports.updateRoutes = (req, res) =>{
    axios.get('http://localhost:3000/update', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_profile", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}
