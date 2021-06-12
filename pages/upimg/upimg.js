// pages/upimg/upimg.js
Page({
  data:{
    AddImg:""
  },
  /* 上传图片 */
  upImg(){
    let that=this
    console.log('点击了上传')
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        console.log('上传成功',res)
        that.upLoadImg(res.tempFilePaths[0]);
      }
    })
  },
  /* 上传图片到云存储 */
  upLoadImg(lzd){
    let that=this
    wx.cloud.uploadFile({
      cloudPath: new Date().getTime()+'.png',//运用了js时间戳
      filePath: lzd, // 文件路径
      success: res => {
        // get resource ID
        console.log("YES",res)
        that.setData({
          AddImg:res.fileID
        })
      },
      fail: err => {
        console.log("NO",err)
      }
    })
  },
  /* 上传视频 */
  upVedio(){
    wx.chooseVideo({
      sourceType: ['album','camera'],
      maxDuration: 600,
      camera: 'back',
      success(res) {
        console.log("选择成功",res.tempFilePath)
        
      }
    })
  },
})