//初始化导入数据库
const DB=wx.cloud.database().collection("list")
let name=""
let age=""
let id=""
Page({  
  addName(event){
    name=event.detail.value
  },
  addAge(event){
    age=event.detail.value
  },

  delId(event){
    console.log("要删除的id",event.detail.value)
    id=event.detail.value
  },

  upId(event){
    id=event.detail.value
  },
  upName(event){
    name=event.detail.value
  },
  upAge(event){
    age=event.detail.value
  },
    /* 添加数据 */
  addData(){
    DB.add({
      data:{
        name:name,
        age:age,
      },
      success(res){
        console.log("添加成功",res)
      },
      fail(res){
        console.log("添加失败",res)
      },
    })
  },
  /* 查询数据 */
  getData(){
    DB.get({
      success(res){
        console.log("查询成功",res)
      },
      fail(res){
        console.log("查询失败",res)
      },
    })
  },
  /* 删除数据 */
  delData(){
    DB.doc(id).remove({
      success(res){
        console.log("删除成功",res)
      },
      fail(res){
        console.log("删除失败",res)
      },
    })
  },
  /* 修改数据 */
  upData(){
    DB.doc(id).update({
      data:{
        name:name,
        age:age,
      },
      success(res){
        console.log("更新成功",res)
      },
      fail(res){
        console.log("更新失败",res)
      },
    })
  }
})
