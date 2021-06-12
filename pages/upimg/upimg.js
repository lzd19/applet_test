// pages/upimg/upimg.js
Page({
  data:{
    AddImg:"",
    AddVedeo:""
  },
  /* 上传文件 */
  upExcel(){
    wx.chooseMessageFile({
      count: 1,
      type:'all',
      success(res){
        console.log("选择成功".res)
        wx.cloud.uploadFile({
          cloudPath:'编程.xlsx',
          filePath:res.tempFiles[0].path,
          success(res){
            console.log('上传成功',res)
          },fail(res){
            console.log('上传失败',res)
          }
        })
      }
    })
  },
  /* 下载打开文件 */
  opExcel(){
    wx.cloud.downloadFile({
      fileID:'cloud://ce-shi-1o9pp.6365-ce-shi-1o9pp-1301847921/编程.xlsx',
      success(res){
        wx.openDocument({
          filePath:res.tempFilePath,
          success(res){
            console.log('打开成功',res)
          }
        })
      }
    })
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
        wx.cloud.uploadFile({
          cloudPath: 'dege.mp4',
          filePath: res.tempFilePath, // 文件路径(由于data的链接写死了，此处不会报错，)
          success: res => {
            // get resource ID
            console.log("YES",res)
          },
          fail: err => {
            console.log("NO",err)
          }
        })
      }
    })
  },
})