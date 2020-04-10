// pages/goodsdetail/goodsdetail.js
import {
  getDetail
}from '../../server/detail.js'

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    iid:'',
    image:'',
    count:0
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.setData({
     iid:options.iid
   });
   this._getDetail()
  
  },
// 数据获取函数
_getDetail(){
  getDetail(this.data.iid).then(res=>{
   
  
  
    const image=res.result.detailInfo.detailImage[0].list[0];
    
    
    this.setData({
      image,
      iid:res.iid
    })
  })
},


// 事件处理函数
addCart(){
  //获取商品对象
  const obj={};
  obj.iid=this.data.iid;
  obj.image=this.data.image;
  obj.count=this.data.count;
  console.log(obj)
console.log(obj+'这是商品详情页面的obj');
  // 加入到购物车列表
  app.addToCart(obj);
  // 加入提示
  wx.showToast({
    title: '加入成功！',
  })
}





})