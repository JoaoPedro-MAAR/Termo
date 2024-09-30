
function getAlertBOX() {
    return document.querySelector(".alert-box");
}



export function Shake(array){
    array.forEach((element) => {
      element.classList.add("shake")
     
      element.addEventListener("animationend",()=>{
        element.classList.remove("shake")
        
      })
    },)
  }
  


export function ShowAlert(texto, duration = 1000) {
    const alert = document.createElement("div");
    alert.innerHTML = texto;
    alert.classList.add("alert");
  
    getAlertBOX().insertAdjacentElement("afterbegin", alert);
    if (duration == null) return;
  
    setTimeout(() => {
      alert.classList.add("hide");
      alert.addEventListener("transitionend", () => {
       
        alert.remove();
      });
    }, duration);
  }
  

