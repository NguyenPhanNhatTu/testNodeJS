const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');
class CourseController {
  show(req, res,next) {

    Course.findOne({ slug: req.params.slug })
      .then(course => 
        res.render('courses/show',{course : mongooseToObject(course)})
      )
      .catch(next);
  }
  //GET Courses/create
  create(req,res,next){
    res.render('Courses/create');
  }
    //Post Courses/store
    store(req,res,next){
      // res.json(req.body);
      const formData=req.body;
      formData.image=`https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;
      const course = new Course(formData);
      course.save()
        .then(() => res.redirect('/'))
        .catch(error =>{

        });
  }
}

module.exports = new CourseController();
