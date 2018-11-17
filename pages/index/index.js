//获取应用实例
const app = getApp()
const core = require('../../static/js/core.js');


Page({
  data: {
    motto: 'Hello 1World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    goodsData:[
      {
        name:'怡享经典净化器',
        img:'https://yix.oss-cn-beijing.aliyuncs.com/assets/img/index/goods_1.png'
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
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.info(wx.getSystemInfoSync())
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    core.requestApi(app.globalData.shopApiUrl, {
      act: 'main'
    }, function (res) {
      if (res.data.err == 0) {
        console.log(res.data)
        // that.setData({
        //   goods: res.data.buying_list
        // });
      }

    }, 'GET');

  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
