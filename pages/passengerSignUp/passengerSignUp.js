// pages/passengerSignUp/passengerSignUp.js
wx.cloud.init({
    env:'cloud1-9gofqo7cf41f1699',
    traceUser: true
})
// 获取云数据库引用
const db = wx.cloud.database();
//let nickName = null;//变量，用于存放用户输入的用户名
let phoneNo = null;//变量，用于存放用户输入的账号
let password = null;//变量，用于存放用户输入的密码
let password1 = null;//变量，用于存放用户第二次输入的密码
let roleId = 1;
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    //输入用户名
    // inputNickName(event){
    //     nickName = event.detail.value//将用户输入的账号放到变量里面
    // },
    //输入手机号
    inputNo: function (event) {
        phoneNo  = event.detail.value//将用户输入的账号放到变量里面
    },
    //输入密码
    inputPassword(event) {
        password = event.detail.value//将用户输入的密码放到变量里面
    },
    inputPassword1(event) {
        password1 = event.detail.value//将用户输入的密码放到变量里面
    },
    //注册函数
    async signup(event){
        let cont = db.collection('passenger')
        let all = []
        var s = true
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
                        wx.showToast({
                            title: '该账号已注册',
                            icon:'none',
                            duration:2500
                        })
                        s=false
                    }
                
            } 
        if(s){
            if(password===password1){
               let that = this;
                cont.add({
                data: {
                    password: password,
                    phoneNo: phoneNo,
                    //nickName: nickName
                }
                }).then(res => {
                    wx.showToast({
                        title: '注册成功',
                        icon:'success',
                        duration:2500
                    })
                }) 
            }else{
                wx.showToast({
                    title: '两次输入密码不一致',
                    icon:'none',
                    duration:2500
                })
            }
        }
        
    
}
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