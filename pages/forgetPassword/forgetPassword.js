// pages/forgetPassword/forgetPassword.js
wx.cloud.init({
    env:'cloud1-8g20o7ib1c00c6cc',
    traceUser: true
})
// 获取云数据库引用
const db = wx.cloud.database();
let nickName = null;//变量，用于存放用户输入的用户名
let phoneNo = null;//变量，用于存放用户输入的账号
let message = null;//变量，用于存放用户输入的密码
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    //获取手机号
    inputNo(event){
        phoneNo=event.detail.value
    },

    //发送验证码
    async sendMessage(event){
        let cont = db.collection(passenger)
        let all = []
        var s = false
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
                    console.log('该账号已注册')
                    s=true
                    var countTime = 30;
                    var btn = document.querySelector(this);
                }
                
                }
            }
    },

    //获取验证码
    inputMessage(event){
        message=event.detail.value
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})