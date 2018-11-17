// pages/shop/confirm/confirm.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsData: [
      {
        name: '怡享经典净化器',
        img: 'https://yix.oss-cn-beijing.aliyuncs.com/assets/img/index/goods_1.png',
        time:48,
      },
      {
        name: '怡享智能门锁',
        img: 'https://yix.oss-cn-beijing.aliyuncs.com/assets/img/index/goods_2.png'
      },
      {
        name: '怡享净化器滤芯',
        img: 'https://yix.oss-cn-beijing.aliyuncs.com/assets/img/index/goods_3.png'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  goToCoupon: function () {
    wx.navigateTo({
      url: '/pages/coupon/info',
    })
  },
  goToPay:function(){
    console.info('去支付')
    wx.redirectTo({
      url: '/pages/order/order',
    })
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})