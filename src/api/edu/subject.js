import request from '@/utils/request'

export default{

    //1、课程分类列表
    getSubjectList(current,limit,teacherQuery){
        return request({
        // url: `/eduservice/subject/getAllSubject`,
        url: `/eduservice/subject/getAllSubject`,
        method: 'get'
    })
  }
  

}
