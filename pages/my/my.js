// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: "/assets/self.jpeg",
    login_name: "点击登录",
    islogin: "no",
    phone: "18999999999",
    name:'',
    isActive:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
   
  },

  // 事件处理函数
 get(e){
  
   this.setData({
     avatarUrl:e.detail.userInfo.avatarUrl,
     name:e.detail.userInfo.nickName,
     isActive:false
   })
  
 }


})