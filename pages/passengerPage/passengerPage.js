// pages/passengerPage/passengerPage.js
let app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        latitude: 0, //首次加载维度
        longitude: 0, //首次加载的经度
        mapName: "", //选点的位置
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

    },

    scan() {

        wx.scanCode({
   
          success: (res) => {
   
            console.log("扫码结果");
   
            console.log(res);
   
            this.setData({
   
              img: res.result
   
            })
   
          },
   
          fail: (res) => {
   
            console.log(res);
   
          }
   
        })
   
     },

     moveToLocation() {
        let that = this;
        wx.chooseLocation({
            success: function (res) {
                console.log(res.name);
                //赋值给data中的mapName
                that.setData({
                    mapName: res.name
                })
            },
            //错误信息
            fail: function () {
                console.log(err);
            }
        })
    },

    my_send:function(){
        wx.navigateTo({
          url: '/pages/mySend/mySend',
        })
    }
})