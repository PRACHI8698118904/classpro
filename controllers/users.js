var userModel=require('../models/Users');
exports.getUsers=function()
{
return userModel.users;
}
exports.getUser=function(id)
 {
   for(var i=0;i < userModel.length;i++)
   {
   if(userModel.users[i].id==id)
   return userModel.users[i];
  
 }
 }
 exports.compareAuth=function(username,password)
 {
 for(var  i=0;i<userModel.users.length;i++)
 {
 if(userModel.users[i].username== username &&
 userModel.users[i].password==password)
   {//return true;
   return userModel.users[i];
   }
  }
  return false;
 
 
 
 
exports.postLogin=function(request,response)
{
var result=users.compareAuth(request.body.email,request.body.password);
//console.log(request.body);
//console.log(request.body.email);
if(result)
{response.send("login sucessfull .hi"+result.name);
}
//console.log(request.body.password);
//response.send("send data"+request.body.email+request.body.password);
else{
response.send("failed");
 }

}