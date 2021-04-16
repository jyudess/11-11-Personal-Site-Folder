const express = require('express');
const morgan = require('morgan')
const mongoose = require('mongoose');
const Job = require('./models/job')
const { job1, job2, job3, job4 } = require('./jobs');

const app = express();


// connect to db
const dbURI = 'mongodb+srv://user1:URICODEHERE'
mongoose.connect(dbURI, { useNewUrlParser: true , useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .then((result) => console.log('connected and listening'))
    .catch((err) => console.log(err))

// Register view engine
app.set('view engine', 'ejs');
    //app.set('views', 'views')''


// Listen for requests
console.log('listening on port 3000');

// middleware and static files
app.use(express.static('public')) // <--implements css
app.use(morgan('dev'));




// Basic Routes  /////////////////////////////////

app.get('/', (req, res) => {
    
    res.redirect('/jobs');
    //res.render('index', { title: 'Home', jobs});
});


app.get('/about', (req, res) => {
    
    res.render('about', { title: 'About'});
});

app.get('/create', (req, res) => {
    
    res.render('create', { title: 'Create'});
});

app.get('/test', (req, res) => {
    
    res.render('test', { title: 'Test'});
});

// Job Routes /////////////////////////////////

// mongoose and mongo sandbox routes
app.get('/add-job', (req, res) => {
  
    
    job4.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get('/jobs', (req,res) => {
    Job.find()
        .then((result) => {
            res.render('test', {title: 'All Jobs', jobs: result})
            
        })
})

app.get('/all-jobs', (req,res) => {
    Job.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});


app.get('/single-job', (req,res) => {
    Job.findById('5faf3b8014bcf5d798e2181c')
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err);
    });
})


// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404'});
    //res.status(404).sendFile('./views/404.html', { root: __dirname })
});
    
