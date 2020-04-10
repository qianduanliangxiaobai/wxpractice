// components/we-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabClick(e){
      
      const data= {index:e.currentTarget.dataset.index}
      this.triggerEvent('tabClick',data,{})
    },
    setCurrentIndex(index){
      this.setData({
        currentIndex:index
      })
    
    }

     
    }
  
})
