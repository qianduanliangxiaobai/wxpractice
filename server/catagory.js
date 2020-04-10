import request from './network.js'

export function getCatagory(){
  return request({
    url:'/category'
  })
}

export function getSubCatagory(maitKey){
  return request({
    url:'/subcategory',
    data:{
      maitKey
    }
  })
}