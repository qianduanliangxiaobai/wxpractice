// pages/catagory/catagory.js
import {
  getCatagory,
  getSubCatagory
}from '../../server/catagory.js'


Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles:[],
 
    categories:[],
    categoriesdata:[]
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this._getCatagoryData()
  
  },
  // 总括数据获取函数
_getCatagoryData(){
  this._getCatagory();
},
// 数据获取函数
_getCatagory(){
  getCatagory().then(res=>{
    
    // 获取categories
    const categories=res.data.category.list;
    const titles=res.data.category.list.map(v=>{
      return v.title
    });
    this.setData({
      titles,
      categories
    });

    this._getSubCatagory(0)
  })
},
_getSubCatagory(currentIndex){
  console.log(this);
  console.log(this.data);
  const maitKey= this.data.categories[currentIndex].maitKey;
  getSubCatagory(maitKey).then(res=>{
  
    const categoriesdata=res.data.list.map(v=>{
      return v.image
    })
    this.setData({
      categoriesdata
    })
   

  })
},
// 页面事件处理函数
handletitleClick(e){
 
  this._getSubCatagory(e.detail.index);
  this.selectComponent('.w-menu').setCurrentIndex(e.detail.index);
  // this.selectComponent('.itemdata').setCurrentIndex(e.detail.index)因为给catedata组件串的
  //是数据，而不是index。所以不用再传东西了。
}




 
})