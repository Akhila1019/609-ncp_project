var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const sessions = require('express-session');

const app = express();


app.use(bodyParser.json())
app.use(express.static('views/')) // find static html files in public folder
app.use(bodyParser.urlencoded({
    extended:true
}));


const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
}));


// cookie parser middleware
app.use(cookieParser());

// a variable to save a session
var cust_session,comp_session,worker_session,session,contact_session,payment_session,feedback_session;

mongoose.connect('mongodb://localhost:27017/mydb1',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"));

// set view engine
app.set("view engine", "ejs"); // place ejs files in views dir

const User = require('./models/user.js')
const Worker = require('./models/worker.js')
const Customer = require('./models/customer.js')
const Company = require('./models/company.js')
const Feedback = require('./models/feedback.js')

app.post("/cust_reg",async (req,res)=>{
    var name = req.body.name;
    var age = req.body.age;
    var addr = req.body.address;
    var gender = req.body.gender;
    var phoneno = req.body.phoneno;

    var customer_data = {
        "name": name,
        "age" : age,
        "address": addr,
        "gender": gender,
        "phoneno": phoneno
    }    
    const user = await Customer.findOne({ name: name });
    if(user)
    {
        // res.status(401).json({ error: "User already exist" });
        return res.redirect('wrong.html')
    }
    else {
        cust_session = req.session;
        cust_session.name = req.body.name;
        console.log(session)
        db.collection('customers').insertOne(customer_data,(err,collection)=>{
            if(err){
                throw err;
            }
            console.log("Customer data Inserted Successfully");
        });
        return res.redirect('set_pwd.html')
    }
});

app.post("/worker_reg", async (req,res)=>{
    var name = req.body.name;
    var age = req.body.age;
    var addr = req.body.address;
    var gender = req.body.gender;
    var phoneno = req.body.phoneno;
    var occ = req.body.occupation;
    var exp = req.body.experience;
    var sal = req.body.salary;
    var photo = req.body.image;

    var worker_data = {
        
        "name": name,
        "age" : age,
        "address": addr,
        "gender": gender,
        "phoneno": phoneno,
        "occupation": occ,
        "exprience": exp,
        "salary": sal,
        "type": "Individual",
        "photo": photo
    }

    const user = await Worker.findOne({ name: name });
    // console.log(password, user);
    if(user) {
      // check user password with hashed password stored in the database
      res.status(401).json({ error: "User already exist" });
    }
    else {
        worker_session = req.session;
        worker_session.name = req.body.name;
        db.collection('workers').insertOne(worker_data,(err,collection)=>{
            if(err){
                throw err;
            }
            console.log("Worker data Inserted Successfully");
        });
        return res.redirect('set_pwd.html')
    }

});

app.post("/comp_reg",async (req,res)=>{
    
    var name = req.body.name;
    var info = req.body.info;
    var addr = req.body.address;
    var occ = req.body.occupation;
    var noofworkers = req.body.noofworkers;
    var salary = req.body.salary;

    var company_data = {
        "name": name,
        "info" : info,
        "address": addr,
        "occupation": occ,
        "No of workers": noofworkers,
        "salary": salary,
        "type": "Company",
    }
    const user = await Company.findOne({ name: name });

    if(user) {
        // check user password with hashed password stored in the database
        res.status(401).json({ error: "User already exist" });
      }
      else {
            comp_session = req.session;
            comp_session.name = req.body.name;
            db.collection('companies').insertOne(company_data,(err,collection)=>{
                if(err){
                    throw err;
                }
                console.log("Company data Inserted Successfully");
            });
            return res.redirect('set_pwd.html');
      }
});


app.post("/set_pwd", async (req,res)=>{
    // console.log(req.body);
    var worker,company,customer;
    const hashedPwd = await bcrypt.hash(req.body.pwd, 8);
    session = req.session
    session.username = req.body.uname;
    const user_data ={
      username: req.body.uname,
      password: hashedPwd
    };
    console.log(session)
    db.collection('users').insertOne(user_data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("User data Inserted Successfully");
    });
    if(worker_session)
    {
        worker = await Worker.findOne({ name: worker_session.name });
    }
    if(comp_session)
    {
        company = await Company.findOne({ name: comp_session.name });
    }
    if(cust_session)
    {
        customer = await Customer.findOne({ name: cust_session.name });
    }
    if(worker)
    {
        var myquery = { name: worker_session.name };
        var newvalues = { $set: {username: session.username } };
        db.collection("workers").updateOne(myquery, newvalues, function(err, res) {
            if (err) throw err;
            
            console.log("Username added");
        });
    }
    if(company)
    {
        var myquery = { name: comp_session.name };
        var newvalues = { $set: {username: session.username } };
        db.collection("company").updateOne(myquery, newvalues, function(err, res) {
            if (err) throw err;
            
            console.log("Username added");
        });
    }
    if(customer)
    {
        var myquery = { name: cust_session.name };
        var newvalues = { $set: {username: session.username } };
        db.collection("customers").updateOne(myquery, newvalues, function(err, res) {
            if (err) throw err;
            
            console.log("Username added");
        });
    }
    return res.redirect("services");
  
});

app.post("/login", async (req,res)=>{
    // console.log(req.body);
    
    const username = req.body.uname;
    const password = req.body.pwd;
    // console.log(username)
    const user = await User.findOne({ username: username });
    // console.log(password, user);
    if(user) {
      // check user password with hashed password stored in the database
      const validPassword = await bcrypt.compare(password, user.password)
      if (validPassword) {
        session = req.session;
        session.username = username 
        return res.redirect("services.html");
      } else {
        // res.status(400).json({ error: "Invalid Password" });
        return res.redirect("wrong.html")

      }
    } else {
    //   res.status(401).json({ error: "User does not exist" });
    return res.redirect("wrong.html")
    }
  
});



app.post("/forgot_pwd", async (req,res)=>{
    // console.log(req.body);
    
    const username = req.body.uname;
    const password = req.body.newpwd;
    const hashedPwd = await bcrypt.hash(password, 8);
    // console.log(username)
    const user = await User.findOne({ username: username });

    if(user)
    {
        var myquery = { username: username };
        var newvalues = { $set: {password: hashedPwd } };
        db.collection("users").updateOne(myquery, newvalues, function(err, res) {
            if (err) throw err;
            console.log("Password updated");
        });
        return res.redirect("services");
    }
    else 
    {
        // res.status(401).json({ error: "User does not exist" });
        return res.redirect("wrong.html")
    }
  
});

app.post('/payment_success',async (req,res) => {
    payment_session = req.session
    payment_session.name = req.body.name;

    const user = await Customer.findOne({ name: payment_session.name });
    var data = {
        "name": req.body.name,
        "email": req.body.email,
        "address": req.body.address,
        "state": req.body.state,
        "city": req.body.city
    }
    if(user)
    {
        db.collection('payments').insertOne(data,(err,collection)=>{
            if(err){
                throw err;
            }
            console.log("Payment Info Inserted Successfully");
        });
        res.redirect('payment_success.html');
    }
    else
    {
        return res.redirect("wrong.html");
    }
    
});

app.post('/feedback_success',async (req,res) => {
    feedback_session = req.session
    feedback_session.username = req.body.uname;

    const user = await Customer.findOne({ username: feedback_session.username });
    var data = {
        "username": req.body.uname,
        "email": req.body.email,
        "feedback": req.body.feedback
    }
    if(user)
    {
        db.collection('feedbacks').insertOne(data,(err,collection)=>{
            if(err){
                throw err;
            }
            console.log("Feedback Inserted Successfully");
        });
        res.redirect('feedback_success.html');
    }
    else
    {
        return res.redirect("wrong.html");
    }
    
});

app.post('/contact_success',async (req,res) => {
    
    contact_session = req.session
    contact_session.username = req.body.uname;

    const user = await Customer.findOne({ username: contact_session.username });
    var data = {
        "username": req.body.uname,
        "email": req.body.email
    }
    if(user)
    {
        db.collection('contacts').insertOne(data,(err,collection)=>{
            if(err){
                throw err;
            }
            console.log("Contact Info Inserted Successfully");
        });
        res.redirect('contact_success.html');
    }
    else
    {
        return res.redirect("wrong.html");
    }
    
});

app.post('/logout',(req,res) => {
    req.session.destroy();
    console.log('session ended')
    res.redirect('logout.html');
});
// ==================================================================================

// load routers
app.use('/', require('./routes/router.js'));


app.listen(3000);