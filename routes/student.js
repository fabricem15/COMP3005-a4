var express = require('express');
var router = express.Router();
const db = require('../db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('newStudent', {title: "Add student"});
  
});

router.post('/', async function(req, res){

    if (req.body == {}){
        console.log("empty request object");
    }
    else {
        await addStudent(req.body.first_name, req.body.last_name, req.body.email, req.body.enrollment_date);
        res.redirect('../');
    }
    
});


router.get('/:student_id', async function(req, res, next) {
    let student_id = req.params.student_id;
    
    let results = await getStudent(student_id);

    let result = results.rows[0];
    result.enrollment_date = new Date(result.enrollment_date).toLocaleDateString('en-CA');

    result.url = '/newStudent/' + result.student_id;
    res.render('newStudent', {title: "Edit student", student: result});
    
});


router.post('/:student_id', async function(req, res, next) {

    if (req.body == {}){
        console.log("empty request object");
    }
    else {
        let student_id = req.params.student_id;
        let newEmail = req.body.email;
    
        await updateStudentEmail(student_id, newEmail);
    
        res.redirect('../');
    }
});



async function getStudent(student_id){
    return await db.query(`SELECT * FROM STUDENTS WHERE student_id= ${student_id}`);
}

async function updateStudentEmail(student_id, new_email){
    return await db.query(`UPDATE students SET email = '${new_email}' where student_id=${student_id}`);
}

async function addStudent(first_name, last_name, email, enrollment_date){

   return await db.query(`INSERT INTO  students (first_name, last_name, email, enrollment_date) VALUES ('${first_name}', 
    '${last_name}', '${email}', '${enrollment_date}')`);

  }

module.exports = router;
