var express=require('express');//core modules without dot
var hbs=require('hbs');
var path=require('path');
var bodyParser=require('body-Parser');
//user model
var usersControllers=require('./controllers/users');//user module

var app=express();//creates the  express server
app.set('views',path.join(__dirname,'views'));//tells whr d html files are taken
app.set('view engine','html');

app.engine('html',hbs.__express);
app.use(bodyParser());//parsing variables
app.use(bodyParser.json());//parsing jade
app.use(bodyParser.urlencoded({extended:false}));//parsin
app.use(express.static('public'));//makes public folder accessible


//routes
app.get('/',function(request,response)//home //
{
response.render('index',{title:"home",users:users.getUsers});//{data } render allows to send data
});
app.get('/users/:id',function(request,response)

{var user=users.getUser(request.params.id);
response.render('profile',{title:"user profile",user:user});//used to send the data
});
app.get('/about',function(request,response)
{
response.render('about',{title:"aboutus"});//server sends response as 
});//routes
app.get('/login',function(request,response)
{                          
response.render('login',{title:"login"});
});//routes
app.get('/signin',function(request,response)
{
response.render('signin',{title:"signin"});
});
app.post('/login',usersControllers.postLogin);
app.listen(3000);//listens on port 3000
