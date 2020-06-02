'use strict';
exports.main = async (event, context) => {
  //event为客户端上传的参数
  const db=uniCloud.database()
  let res=db.collection('product').get()
  return res
  // db.collection('product').where({
	 //  "pid":"1"
  // }).get({
	 //  success(res){
		//   console.log(res)
		//   //返回数据给客户端
		//   return res
	 //  }
  // })
 
 
 
};
