





function Shake(array){
    array.forEach((element) => {
      element.classList.add("shake")
     
      element.addEventListener("animationend",()=>{
        element.classList.remove("shake")
        
      })
    },)
  }
  


function ShowAlert(texto, duration = 1000) {
    const alert = document.createElement("div");
    alert.innerHTML = texto;
    alert.classList.add("alert");
  
    Alert_box.insertAdjacentElement("afterbegin", alert);
    if (duration == null) return;
  
    setTimeout(() => {
      alert.classList.add("hide");
      alert.addEventListener("transitionend", () => {
       
        alert.remove();
      });
    }, duration);
  }
  