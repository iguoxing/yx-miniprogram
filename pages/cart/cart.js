// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartData:[
      {
        name: '怡享经典净化器',
        img: 'https://yix.oss-cn-beijing.aliyuncs.com/assets/img/index/goods_1.png',
        sale:'2200',
        presale:'6999',
        num:'1',
        stock:'库存紧张',
      },
      {
        name: '怡享智能门锁',
        img: 'https://yix.oss-cn-beijing.aliyuncs.com/assets/img/index/goods_2.png',
        sale: '2200',
        presale: '6999',
        num: '1',
        stock: '库存紧张',
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  goToInfo: function () {
    wx.navigateTo({
      url: '/pages/goods/info?id=1'
    })
  },
  goToCoupon:function(){
    wx.navigateTo({
      url: '/pages/coupon/info',
    })
  },
  addGoodsNum: function (e) {
    console.info(1)
    console.info(e)
    e.currentTarget.dataset.goods.num = e.currentTarget.dataset.goods.num + 1;
    this.setData({
      cartData: this.data.cartData
    })
    console.info(this.data.cartData)

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

  },
  goToInfo: function () {
    wx.navigateTo({
      url: '/pages/goods/info?id=1'
    })
  },
  addGoodsNum:function(item){
    console.info(1)
    console.info(item)
    item.currentTarget.dataset.goods.num = item.currentTarget.dataset.goods.num + 1;
    this.setData({
      cartData: this.data.cartData
    })
    console.info(this.data.cartData)
    
  }
})