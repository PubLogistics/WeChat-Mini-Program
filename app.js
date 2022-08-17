// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.cloud.init ({
        // env 参数说明：
        // env 参数决定接下来小程序发起的云开发调用 (wx.cloud.xxx) 会默认请求到哪个云环境的资源
        // 此处请填入环境 ID ，环境 ID 可打开云控制台查看
        // 如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        env:'cloud1-8g20o7ib1c00c6cc',
        traceUser: true
      })
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    isLogin : false
  }
})
