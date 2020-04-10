//app.js
App({
  onLaunch: function () {
   
  },
// 全局函数
addToCart(obj){
  //先判断是否已经添加进来
  const oldInfo=this.globalData.cartList.find((item)=>
    item.iid==obj.iid
  );
  if(oldInfo){
    oldInfo.count+=1
  }
  else{
    obj.count=1;
    this.globalData.cartList.push(obj)
  };
  // 购物车回调
  if(this.cartCallBack){
    this.cartCallBack()
  }
},


  globalData: {
    cartList:[]
  }
})