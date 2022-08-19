// pages/login3/login3.js
wx.cloud.init({
    env:'cloud1-8g20o7ib1c00c6cc',
    traceUser: true
})
// 获取云数据库引用
const db = wx.cloud.database();
let phoneNo = null;//变量，用于存放用户输入的账号
let password = null;//变量，用于存放用户输入的密码
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //输入用户名
  inputNo: function (event) {
    phoneNo  = event.detail.value//将用户输入的账号放到变量里面
  },
  //输入密码
  inputPassword(event) {
    password = event.detail.value//将用户输入的密码放到变量里面
  },
  /**
   * 生命周期函数--监听页面加载
   */
  //注册函数
  signup(event){
    wx.navigateTo({
      url: '/pages/passengerSignUp/passengerSignUp',
    })
  },
  //登陆函数
  async  login() {
    const db = wx.cloud.database()
    let cont = db.collection('passenger')
    let all = []
    cont.get().then(res=>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })
   
    let count = await cont.count()     //获取数据库总个数
    count=count.total     //将总个数赋值给count
    //通过for循环做多次请求，并把多次请求的数据放在一个数组里面
    console.log(count)
    
    for(let i = 0; i<count; i+=20){
        let list = await db.collection('passenger').skip(i).get()
        all=all.concat(list.data);
        console.log('返回的结果',all)

     for(let i=0;i<all.length;i++ ){
            if (phoneNo===all[i].phoneNo) {
                if (password===all[i].password) {
                    console.log('登入成功')
                    wx.showToast({
                        title: '登入成功',
                        icon:'success',
                        duration:2500
                    })
                    wx.reLaunch({
                        url: '/pages/passengerPage/passengerPage?phoneNo'+phoneNo,
                    })


        } else {
          console.log('密码错误')
          wx.showToast({
            title: '密码错误',
            icon:'none',
            duration:2500
          })
        }

      } else {
        console.log('登入失败')
        wx.showToast({
          title: '无此用户名！！',
          icon:'none',
          duration:2500
        })
      }
}
  }
  },
  
  onLoad: function (options) {

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