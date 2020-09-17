const toast = {
  confirm(params:any){
    const content:HTMLElement = <HTMLInputElement> document.querySelector('.content')
    const width = content.clientWidth * 0.70 + 'px'
    let text:string|number,success:()=>{},cancel:()=>{}
    const styleExtra = 
    `
      .lxg-ui-toast {
        border: 1px solid #eee;
        color: #333;
      }
      #lxg-ui-toast-button-success:hover{
          background-color: #ddd;
          border-radius:0 0 .5rem 0;
      }
      #lxg-ui-toast-button-cancel:hover{
          background-color: #ddd;
          border-radius:0 0 0 .5rem;
      }
    `
    const styleElem:HTMLElement = <HTMLElement>document.querySelector('style')
    styleElem.innerHTML += styleExtra

    switch (typeof(params)){
      case "string":
        text = params
        break;
      case "object":
        text = params.text
        success = params.success
        cancel = params.cancel
        break;
      default:
        text = ''
        break;
    }
    let toast = document.createElement('div')
    const buttonCss = `width:50%;
                     padding:0.5rem;
                     font-size:0.7rem;
                     border-top:1px solid #ddd;
                     font-weight:400;
                     float:left;
                     box-sizing:border-box;
                     display:inline-block;`
    toast.innerHTML = `<div 
                        class="lxg-ui-toast"
                        style="
                               width:${width};
                               background-color:#fff;
                               border-radius:0.5rem;
                               position:fixed;
                               text-align:center;
                               top:50%;
                               left:50%;
                               transform:translate(-50%,-50%);">
                          <span
                            style="
                              margin:auto;
                              padding:2rem;
                              font-size:0.7rem;
                              font-weight:400;
                              display:inline-block;"
                          >${text}</span>
                          <br/>
                          <span id="lxg-ui-toast-button-cancel"
                            class='lxg-ui-toast-button'
                            style="${buttonCss}
                            border-right:1px solid #ccc;
                            font-weight:600;
                            color:#444;
                            ">取消
                          </span>
                          <span id="lxg-ui-toast-button-success"
                            class='lxg-ui-toast-button'
                            style="${buttonCss};
                            font-weight:600;
                            color:#0084FF;
                            ">确认 
                          </span>
                      </div>`
    content.appendChild(toast)
    const el:HTMLElement = <HTMLElement>document.getElementById("lxg-ui-toast-button-success")
    el.addEventListener("click",()=>{
      Array.from(document.querySelectorAll(".lxg-ui-toast")).forEach(item=>{
        const el:HTMLElement = <HTMLElement> item 
        el.style.display = 'none'
      })
      success()
    })
    const btns:HTMLElement = <HTMLElement>document.getElementById("lxg-ui-toast-button-cancel")
    btns.addEventListener("click",()=>{
      Array.from(document.querySelectorAll(".lxg-ui-toast")).forEach(item=>{
        const el:HTMLElement = <HTMLElement> item 
        el.style.display = 'none'
      })
      cancel()
    })
  },
  show(msg:any){
    const content:HTMLElement = <HTMLElement>document.querySelector('.content')
    const width = content.clientWidth * 0.50 + 'px'
    let toast = document.createElement('span')
    if(document.querySelectorAll('.lxg-ui-toast')){
      Array.from(document.querySelectorAll('.lxg-ui-toast')).forEach(item=>{
        const el:HTMLElement = <HTMLElement> item 
        el.style.display = 'none'
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
export default toast