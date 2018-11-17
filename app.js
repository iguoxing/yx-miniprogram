//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    post_img_list: [],
    textare_value: '',
    title_value: '',
    domain: 'https://yixiangshop.cn/',
    htApiUrl: 'https://yixiangshop.cn/xcx/ht.php',
    shopApiUrl: 'https://yixiangshop.cn/xcx/shop.php',
    userApiUrl: 'https://yixiangshop.cn/xcx/xcx_user.php'
  },
  weixin_login: function (is_qz = 0, is_update = 0, that_tmp = '') {
    var that = this
    var user_info = that.getUserInfo();

    console.log('开始登录');

    if (user_info != null) {
      // 用户已登录
      console.log('用户已经登录!');
      return 1;
    } else {
      console.log('跳转到登陆页');
      core.doLogin();
      return 0;
    }

    wx.login({
      success: function (res) {
        if (res.code) {
          wx.getUserInfo({
            success: function (res2) {
              //拿到code，同时拿到基本信息，开始注册
              var userInfo = res2.userInfo
              var nickName = userInfo.nickName
              var avatarUrl = userInfo.avatarUrl
              var gender = userInfo.gender


              wx.request({
                url: that.globalData.domain + that.globalData.htApiUrl,
                header: {
                  'Content-Type': 'application/json'
                },
                data: {
                  act: 'Wx_login',
                  js_code: res.code,
                  nickName: nickName,
                  avatarUrl: avatarUrl,
                  gender: gender
                }
                ,
                success: function (res) {

                  console.log(res);

                  if (res.data.err == 0) {
                    wx.showToast({
                      title: '登录成功！',
                      icon: 'success',
                      duration: 2000
                    })

                    // 将数据存储到本地
                    try {
                      wx.setStorageSync('userInfo', res.data);
                    } catch (e) {
                      console.log('保存用户信息到缓存出错！');
                    }
                    if (is_update == 1) {
                      that_tmp.setData({
                        user: res.data,
                        userInfo: res.data
                      })
                    }
                  }
                  else if (res.data.err == 6) {
                    wx.showModal({
                      title: '提示',
                      showCancel: false,
                      content: res.data.msg,
                      success: function (res) {

                      }
                    })
                  }
                  else {

                    wx.showModal({
                      title: '提示',
                      showCancel: false,
                      content: res.data.msg,
                      success: function (res) {

                      }
                    })

                    return 0;
                  }

                }
              })


            },
            fail: function (res2) {
              wx.showModal({
                title: '提示',
                showCancel: false,
                content: '获取您的信息失败，请稍后再试！',
                success: function (res) {

                }
              })
            }
          })

        } else {
          wx.showModal({
            title: '提示',
            showCancel: false,
            content: '获取授权失败，请稍后再试！',
            success: function (res) {

            }
          })
        }
      }
    });
  }
})