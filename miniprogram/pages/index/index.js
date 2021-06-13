
Page({
  data:{
    massage:[],
  },
  /* 云函数加法计算 */
  Add(){
    wx.cloud.callFunction({//云函数的导入
      name:'test',
      data:{
        a:1,
        b:3,
      },
      success(res){
        console.log('yes',res)
      },
      fail(res){
        console.log('no',res)
      },
    })
  },
  /* 云函数获取appid */
  Getop(){
    wx.cloud.callFunction({
      name:'getop',
      success(res){
        console.log('成功',res)
      },
      fail(res){
        console.log('失败',res)
      },
    })
  },
  /* 通过数据库api获取数据 */
  shujuku(){
    let that=this
    wx.cloud.database().collection("list").get({
      success(res){
        console.log('成功',res)
        that.setData({
          massage:res.data
        })
      },
      fail(res){
        console.log('失败',res)
      }
    })
  },
  /* 通过云函数获取数据 */
  yunhanshu(){
    let that=this
    wx.cloud.callFunction({
      name:"getdata",
      success(res){
        console.log('成功',res)
        that.setData({
          massage:res.result.data
        })
      },
      fail(res){
        console.log('失败',res)
      },
    })
  },
})
