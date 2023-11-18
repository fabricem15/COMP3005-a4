// var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var studentRouter = require('./routes/student');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/newStudent', studentRouter);




app.listen(3000);
console.log("Server listening at http://localhost:3000");




// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});







// test functions 

// get all students 
// db.query(getAllStudents(), (err, res)=>{
//   if (err){
//     console.log(err);
//     return;
//   }
//   console.log(res);
// });


// db.query("INSERT INTO STUDENTS (first_name, last_name, email, enrollment_date) VALUES ('Snoop', 'Dogg', 'snoop@dogg.com', '2023-11-16')", (err, res)=>{
//   if (err){
//     console.log("Error:" + err.detail);
//     return;
//   }
//   console.log(res.rows);
// });

// db.query(updateStudentEmail(3, 'jim.beam@gmail.com'), (err, res)=>{
//   if (err){
//     console.log(err);
//     return;
//   }
//   console.log(res);
// });


// db.query(deleteStudent(4), (err, res)=>{
//   if (err){
//     console.log(err);
//     return;
//   }
//   console.log(res);
// });




module.exports = app;
