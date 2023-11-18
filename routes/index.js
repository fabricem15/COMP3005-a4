var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET home page. */

router.get('/', async function(req, res, next) {

  let result = await getAllStudents();

  result.forEach(item => {
    item.enrollment_date = new Date(item.enrollment_date).toLocaleDateString('en-CA');
  });
  res.render('index', { title: 'Students', results: result });
  
});

// delete POST
router.post('/', async function(req, res){
  if (req.body == {}){
    console.log("empty request object");
  }
  else {
    
    await deleteStudent(req.body.student_id);
    res.redirect('/');

  }
});


async function getAllStudents(){
  const results = await db.query(`SELECT * FROM STUDENTS ORDER BY student_id`);
  return results.rows;
}

async function deleteStudent(student_id){
  await db.query(`DELETE FROM students WHERE student_id=${student_id}`);

}


module.exports = router;
