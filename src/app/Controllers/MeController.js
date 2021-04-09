const Course = require('../models/Course');
const { mongooseToObject, multipleMongooseToObject } = require('../../util/mongoose');
class MeController {
  
  storedCourses(req,res,next){
    //Get /stored/courses
    Course.find({})
      .then(courses =>  res.render('me/stored-courses',{
        courses: multipleMongooseToObject(courses)
      }))
      .catch(next);
   
  }
  
  }


module.exports = new MeController();
