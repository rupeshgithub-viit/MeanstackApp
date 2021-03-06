var express= require('express')
var mongoose= require('mongoose')
var bodyparser= require('body-parser')
var cors= require('cors')
var path= require('path')

var app= express();
//port no
const port= 3000;

const route = require('./routes/route');



// connect to mongodb
mongoose.connect('mongodb://localhost:27017/contactlist');

// on connection 

mongoose.connection.on('connected',()=>{
    console.log('Connected to database monodb @ 27017')
});


// error

mongoose.connection.on('error',(err)=>{
    if(err){
        console.log('Error in connecting:'+err)
    }
    //console.log('Connected to database monodb @ 27017')
});


// adding middleware
app.use(cors());

// body parser
app.use( bodyparser.json() );

// static
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api',route);


app.get('/',(req,res)=>{
    res.send("foobar")
})


app.listen(port,()=>
{
    console.log("server started at port:"+port)
})