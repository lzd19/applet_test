// pages/data1/data1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },
  /* 加载数据 */
  getDataList(){//Es6写法
    let len=this.data.list.length//获取列表的长度
    console.log('list的长度:',len)
    wx.cloud.database().collection('list')
      .limit(10)//限制单次加载的数据
      .skip(len)//从第len开始加载
      .get()
      .then(res=>{
        console.log('获取成功',res)
        this.setData({
          list:this.data.list.concat(res.data)//前面的数据加上后面的数据
        })
      })
      .catch(res=>{
        console.log('获取失败',res)
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDataList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('加载更多...')
    this.getDataList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})