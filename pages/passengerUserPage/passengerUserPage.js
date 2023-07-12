// pages/passengerUserPage/passengerUserPage.js

let app = getApp();
// 获取云数据库引用
const db = wx.cloud.database();
let nickName = null;//变量，用于存放用户输入的用户名

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
    //isLogin: false,
    listData: [{
    //   imgUrl: "/images/ziliao.png",
      navUrl: "/pages/userrule/userrule",
      text: "服务协议"
    }, {
    //   imgUrl: "/images/cunchu.png",
      navUrl: "/pages/userGuide/userGuide",
      text: "用户操作手册"
    }, {
    //   imgUrl: "/images/zhangdan.png",
      navUrl: "/pages/identification/identification",
      text: "个人身份认证"
    }, {
    //   imgUrl: "/images/fankyu.png",
      navUrl: "/pages/setting/setting",
      text: "个性化管理"
    }, {
    //   imgUrl: "/images/guanyu.png",
      navUrl: "/pages/aboutPlatform/aboutPlatform",
      text: "关于平台"
    }, ],
  },

  // 点击头像事件
//   onLogin() {
//     wx.navigateTo({
//       url: '/pages/login/login',
//     })
  onLoad() {
    if (wx.getUserProfile) {
        this.setData({
          canIUseGetUserProfile: true
        })
      }
  },
  getUserProfile(e) {
    wx.getUserProfile({
      desc: '用于完善个人资料', // 声明获取用户个人信息后的用途
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
//   onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */

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

  }, //显示对话框-提交
  showModal: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200);
    this.setData({
      showModeText: false,
      backModel: true
    });
  },

  backModel() {
    this.setData({
      showModalStatus: false,
      showModalStatusFinsh: false
    });
    if (!this.data.showModalStatus && !this.data.showModalStatusFinsh) {
      this.setData({
        backModel: false,
        showModeText: true
      });
    }
  },

  //隐藏对话框-提交
  hideModalFinsh: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatusFinsh: false
      })
    }.bind(this), 200);
    setTimeout(res => {
      this.setData({
        showModalStatus: false
      });
    }, 200)

  },

  //退出功能
  sign_out() {
    wx.clearStorageSync(); //清楚缓存
    wx.redirectTo({
      url: '../login1/login1',
    })
  }
})