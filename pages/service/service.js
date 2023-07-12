// pages/splash/splash.js
Page({
  
    
    data: {
     
        message:"",
        isShow:"true"
      
    },
    close(){
        this.setData({
            show:false
        })
    },
    default(){
        return
    },
    commandInput:function(e){
       
        var value=e.detail.value;
        console.log(value);
        this.setData({inputValue:value})
       
     },
       
    
        loginBtnClick:function (e){
         var value=this.data.inputValue;
         console.log(value);
        
            if(value=="你好"){
                this.setData({
                   isShow:false,
                    message:"你好呀，请问有什么需要吗？"
                  
                })
                
            }
            else if(value=="谢谢你"){
                this.setData({
                    isShow:false,
                    message:"不客气，时刻为您效劳,如还有其它问题，请拔打人工客服电话：13317535090"
                    
                })
                
            }
            else if(value=="拜拜"){
                this.setData({
                    message:"再见，希望你对我的服务满意",
                    isShow:false
                })
            }
            else if(value=="转人工"){
                this.setData({
                   message:"人工客服电话：13317535090",
                    isShow:false
                })
            }
            else{
                this.setData({
                    message:"不好意思，我不太明白，如问题未解决，请拔打人工客服电话：13317535090",
                    isShow:false
                })
            }
            
            
            console.log(this.data.message)
            console.log(this.data.isShow)
        },
    buttons1: function(e)  {
          this.setData({
              message:"请点击主页，找到我的账单进行提现”",
              isShow:false
          })
    } ,
    buttons2:function(e){
        this.setData({
            message:"请输入“转人工”，进行详细咨询",
            isShow:false
        })
    },
    buttons3:function(e){
        this.setData({
            message:"本店所有运输均按规章制度进行，保证您的物品运输安全",
            isShow:false
        })
    },
    buttons4:function(e){
        this.setData({
            message:"请点击主页，寻找订单信息进行打印",
            isShow:false
        })
    },
    buttons5:function(e){
        this.setData({
            message:"请点击主页，寻找我的订单，进行取消",
            isShow:false
        })
    }

}
        
        
)
    
     
     

    
