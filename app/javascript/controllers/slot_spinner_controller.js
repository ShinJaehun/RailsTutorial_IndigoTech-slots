import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="slot-spinner"
export default class extends Controller {
  static targets = ["image"]
  static values = { number: Number, spin: Array }
  connect() {
    // console.log("hello")
    // console.log(this.element.scrollTop, this.element.scrollHeight)
    // this.element.scrollTop=this.element.scrollHeight

    // for (let i=0; i < this.element.scrollHeight; i++) {
    //   setTimeout(()=> {
    //     this.element.scrollTop = i
    //     if (i+2 == this.element.scrollHeight) {
    //       console.log("last count!")
    //     }
    //   }, i)
    // }

    // Array.from(this.element.children).forEach((child) => {
    //   if(!child.classList.contains("hidden")){
    //     child.classList.add("hidden")
    //   }
    // })
    // this.imageTarget.classList.remove("hidden")
    // this.image.classList.remove("hidden")

    // const finishedCallback = () => {
    //   Array.from(this.element.children).forEach((child) => {
    //     if(!child.classList.contains("hidden")){
    //       child.classList.add("hidden")
    //     }
    //   })
    //   this.imageTarget.classList.remove("hidden")
    // }
    // spin(this.element, 5, 1, finishedCallback)

    spin(this.element, 5, 1, () => {
      Array.from(this.element.children).forEach((child) => {
        if(!child.classList.contains("hidden")){
          child.classList.add("hidden")
        }
      })
      this.imageTarget.classList.remove("hidden")

      // console.log(this.spinValue)
      const allEqual = arr => arr.every(v => v === arr[0])
      if(allEqual(this.spinValue)){
        console.log("Win")
      }
    })
  }
}

function spin(el, count=1, currentspin=1, finishedCallback=null){
  if(currentspin <= count){
    currentspin +=1
    for (let i=0; i < el.scrollHeight; i++) {
      setTimeout(()=> {
        el.scrollTop = i
        if (i+1 == el.scrollHeight) {
          // console.log("last count!")
          spin(el, count, currentspin, finishedCallback)
        }
      }, i)
    }
  } else {
    // console.log(finishedCallback)
    // if(finishedCallback){
    //   console.log("doing the callback")
    //   finishedCallback()
    // }
    finishedCallback()
  }
}
