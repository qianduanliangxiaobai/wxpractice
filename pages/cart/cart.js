// pages/cart/cart.js

const app=getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.setData({
      // 初始化数据
      cartList:app.globalData.cartList
    });
    console.log('这是onload的options');

    // 购物车回调
    app.cartCallBack=()=>{
      console.log('这是cartjs里的购物车回调');
      this.setData({
        cartList:app.globalData.cartList
      });
      console.log(this.data.cartList);
      console.log(this.data.cartList+'这是购物车回调后的cartlist')
    }
   
  

}
})