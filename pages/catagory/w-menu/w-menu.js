// pages/catagory/w-menu/w-menu.js
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
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    titleClick(e){
      const data={index:e.currentTarget.dataset.index}; 
      this.triggerEvent('titleClick',data,{})
    },
    setCurrentIndex(index){
      this.setData({
        currentIndex:index
      })
    }
  }
})
