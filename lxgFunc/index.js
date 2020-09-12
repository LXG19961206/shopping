class LxgDOM {
  constructor(el){
    // 会根据$中的el , 处理得到相应的选择器
   el ? this.selector = document.querySelectorAll(el) : this.selector = ''
   Object.prototype.forRange = this.forRange
  }
  
  html(content){
    if(!this.selector){
      return this.errState(`you must active this method with documentElement(s),you can use this method like "$(.container).html()"`)
    }
    if(content){  
      console.log(this.selector)
      this.selector.forEach(item=>{
        item.innerHTML = content
      })
      return this
    }else{
     const arr = []
     this.selector.forEach(item=>arr.push(item.innerHTML))
     console.log(arr)
     return arr.length == 1 ? arr[0] : arr
    }
  }
  
  css(key,val){
    if(!this.selector){
      return this.errState(`you must active this method with documentElement(s),you can use this method like "$(.container).css()"`)
    }
    if(!key&&!val){
      const arr = []
      this.selector.forEach((item)=>{
        const obj = {
          height:'',"text-align":'',width:'',color:'',margin:'',padding:'',background:'',position:'',transform:'',font:'',float:'',display:'',border:'',"border-radius":''
        }
        Object.keys(obj).forEach(element=>obj[`${element}`] = window.getComputedStyle(item).getPropertyValue(`${element}`))
        arr.push(obj)
      })
      return arr.length == 1 ? arr[0] : arr
    }else if(key&&!val){
      const arr = []
      this.selector.forEach(item=>arr.push(window.getComputedStyle(item).getPropertyValue(`${key}`)))
      return arr.length == 1 ? arr[0] : arr
    }else if(key&&val){
      this.selector.forEach(item=>item.style[`${key}`]=val)
      return this
    }else{
      throw("not the right way to use")
      return this
    }
  }
  
  clone(data){
    return JSON.parse(JSON.stringify(data))
  }
  
  dilute(func,duration,isAsync){
    //if using for async func , please apply a Promise func for params "func"
    if(!func||(!duration&&duration!=0)||typeof func != 'function'){
      return this.errState('func and duration are both necessary ! ')
    }else{
      const funcName = func.name     
      if(sessionStorage.getItem(`$[${funcName}]`)==="false"){
        console.log(`method "dilute" is effecing,func will not be actived in next ${duration} ms`)
        return
      }
      sessionStorage.setItem(`$[${funcName}]`,"false")
      
      setTimeout(()=>{
        if(!isAsync){
          func()
          sessionStorage.setItem(`$[${funcName}]`,"true")
          // console.log(sessionStorage.getItem(`$[${funcName}]`))
        }else{
          func().then(()=>{sessionStorage.setItem(`$[${funcName}]`,"true")
            // console.log(sessionStorage.getItem(`$[${funcName}]`))
          })
        }
      },duration)
    }
  }
  
  fileName(path){
    if(!path)this.errState('to active this method , path is necessary !')
    return path.replace(/(.*\/)*([^.]+).*/ig, '$2') + '.' + path.split('.')[1]
  }
  
  timestamp(){
    return Number(new Date())
  }
  
  now(sep){
    !sep ? sep = "-" : null
   return new Date().getFullYear() + sep + (new Date().getMonth + 1) + sep + new Date().getDate()
  }
  
  forRange(fun){
    // setting this method on prototype of Object , so we could active this func both on Array and Object
   try{
     let item,index,key,value
     if(Object.prototype.toString.call(this) == "[object Array]"){
       for(let i = 0 ; i < this.length ; i++){
         item = this[i],index = i
         fun.call(null,item,index,this)
       }
     }else if(Object.prototype.toString.call(this) == "[object Object]"){
       const keys = Object.keys(this)
       for(let i = 0; i < keys.length ; i++){
         fun.call(null,keys[i],this[`${keys[i]}`],this)
       }
     }
   }catch(err){
       (new LxgDOM).errState(err)
   }
  }
  
  watch(object,rule){
    if(typeof object != 'object'){
      this.errState('please apply constuct object and a rule object')
      return
    }
    return new Proxy(this.clone(object),{
      get(obj,key,val){
        console.log('getter is activing')
        if(obj.hasOwnProperty(key)){
          return JSON.parse(JSON.stringify(obj[key]))
        }
        return ''
      },
      set(obj,key,val){
        obj[key] = val
      }
    })
  }
  
  errState(err){
    throw(`not the right way to use this method${err?', '+err:'.'}`)
  }
  
  
  selector = ''
  that = this
}

const $ = (el)=>new LxgDOM(el)
$.__proto__ = LxgDOM.prototype