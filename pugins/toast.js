export default{
  show(msg){
    console.log(123)
    const content = document.querySelector('.content')
    const width = content.clientWidth * 0.50 + 'px'
    let toast = document.createElement('span')
    if(document.querySelectorAll('.lxg-ui-toast')){
      Array.from(document.querySelectorAll('.lxg-ui-toast')).forEach(item=>{
        item.style.display = "none"
      })
    }
    if(typeof(msg)=="object"){
      let {text,duration,type} = msg
      switch (type){
        case "success":
          type = '../../static/success.png'
          break;
        case "failed":
          type = '../../static/failed.png'
          break;
        case "warning":
          type = '../../static/warning.png'
          break;
        case "waiting":
          type = '../../static/waiting.png'
          break;
        default:
          type = type
          break;
      }
      toast.innerHTML = `<div 
                            class="lxg-ui-toast"
                            style="
                            text-align:center;
                            background-color:rgba(0,0,0,0.6);
                            position:fixed;
                            font-weight:700;
                            top:50%;
                            left:50%;
                            padding:0.5rem 1.2rem;
                            border-radius:0.3rem;
                            transform:translate(-50%,-50%);">
                            <img 
                              src="${type}" 
                              style="width:2rem;
                                     height:2rem"/>
                            <br/>
                            <span 
                              style="
                              color:#eee;
                              text-align:center;
                              font-size:0.6rem;
                              line-height:0.5;
                              ">${text}
                          </span>
                        </div>`
      content.appendChild(toast)
      setTimeout(()=>{
        content.removeChild(toast)
      },duration?duration:2000)
    }else{
      const text = msg
      toast.innerHTML = `<span
                        class="lxg-ui-toast"
                        style="background-color:rgba(0,0,0,0.6);
                        color:#eee;
                        display:inline-block;
                        text-align:center;
                        font-size:0.6rem;
                        padding:0.5rem 1rem;
                        position:fixed;
                        font-weight:700;
                        top:50%;
                        left:50%;
                        transform:translate(-50%,-50%);
                        border-radius:0.1rem;
                        ">${text}</span>`
      content.appendChild(toast)
      setTimeout(()=>{
        content.removeChild(toast)
      },2000)
    }
  }
}