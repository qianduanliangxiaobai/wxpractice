// pages/home/home.js
import{
  getMultiData, getProductData
}from '../../server/home.js'


import {
  POP,
  SELL,
  NEW,
  BACK_TOP_POSITION
} from '../../common/const.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
 
    titles:['流行','潮流','实惠'],
    goods: {
     [POP]: { page: 1, list: [] },
      [NEW]: { page: 1, list: [] },
      [SELL]: { page: 1, list: [] },
    },
    currentType:POP
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getData()
   
  },
//获取所有数据
_getData(){
  this._getMultiData(),
  this._getProductData(POP),
  this._getProductData(NEW),
  this._getProductData(SELL)


},
onReachBottom:function(){
  this._getProductData(this.data.currentType)
},

//获取轮播图数据
_getMultiData(){
  getMultiData().then(res=>{
    const banners=res.data.banner.list.map(item=>{
      return item.image
    });
      // 设置数据
      this.setData({
        banners: banners
     
      })
  })
},
// 获取产品数据
_getProductData(type){
  const page=this.data.goods[type].page;
  getProductData(type,page).then(res=>{
    // 取出数据
    const list =res.data.list;
    // 将数据临时获取
    const goods=this.data.goods;
    goods[type].list.push(...list);
    goods[type].page+=1;
  
   

    // 将最新的goods设置到goods中
    this.setData({
      goods:goods
    })
  })
},
//处理tab-control组件的函数
handletabClick(e){
// 显示tab-control对应的页面数据
// 即改变currentType
let currentType='';
switch(e.detail.index){
  case 0:
    currentType=POP;
    break;
  case 1:
    currentType=NEW;
    break;
  case 2:
    currentType=SELL;
    break;
};
  this.setData({
    currentType//因为currenttype就是在home中，不需要再传值给子事件
  });


//这是更新index的传回
  this.selectComponent('.tab-control').setCurrentIndex(e.detail.index)
}





  
})