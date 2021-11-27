import request from '@/utils/request'

export default{

  //1、添加课程信息
  addCourseInfo(courseInfo){
          return request({
          // url: `/eduservice/subject/getAllSubject`,
          url: `/eduservice/course/addCourseInfo`,
          method: 'post',
          data:courseInfo
    })
  },
  //2、查询所有讲师
  getListTeacher(){
    return request({
      url: `/eduservice/teacher/findAll`,
      method: 'get'
     })
  },
  //根据课程id查询课程基本信息
  getCourseInfoId(id){
    return request({
      url: `/eduservice/course/getCourseInfo/${id}`,
      method: 'get'
    })
  },
  //修改课程信息
  updateCourseInfo(courseInfo){
    return request({
      url: `/eduservice/course/updateCourseInfo`,
      method: 'post', 
      data: courseInfo
    })
  },
  //课程确认信息
  getCoursePublishInfo(id) {
    return request({
      url: `/eduservice/course/getPublishCourseInfo/${id}`,
      method: 'get'
    })
  },
  //课程最终发布
  publishCourse(id) {
    return request({
        url: `/eduservice/course/publishCourse/${id}`,
        method: 'post'
      })
  },
  //课程列表
    //current当前页 limit每页记录数 Query条件对象
    getPageList(current,limit,searchObj){
      return request({
      url: `/eduservice/course/pageCourseCondition/${current}/${limit}`,
      method: 'post',
      //courseQuery条件的对象，后端Requestbody获取数据
      //data表示把对象转换json进行传递到接口里
      data:searchObj
  })
},
removeById(id) {
  return request({
      url: `/eduservice/course/${id}`,
      method: 'delete'
  })
}
}
