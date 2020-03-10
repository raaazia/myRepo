var mongoose = require('mongoose');
var employeSchema=new mongoose.Schema({
    name:String,
    email:String,
    Etype:String,
    HOURLYRATE:Number,
    totalHour:Number,
});
employeSchema.method.
var employeeModel=mongoose.model('Employee',employeSchema);
var employees =new employeeModel({name:'raazia',
email:'sdf@gmail.com',
Etype:'hourly',
HOURLYRATE:10,
totalHour:16,});
console.log("Total income of employees:"employees.HOURLYRATE*employees.totalHour);