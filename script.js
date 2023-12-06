    const Navigation = document.querySelector(".banner");
        const HiddenNav = document.querySelector(".hidden-nav");
        
       
/* CHECK IF VISIBLE */    

        function checkIfVisible(){
            let rect = Navigation.getBoundingClientRect();
            if(rect.top <= -rect.height){            
                HiddenNav.style.opacity = "100%";
            
            }else if(rect.top > -rect.height){
            HiddenNav.style.opacity = "0%"      
            }
        }
        document.addEventListener("scroll", checkIfVisible);

            const Services = document.querySelectorAll(".services-single");

            Services.forEach(($e) =>{
                let servicesSingle = $e.querySelector(".services-single-hidden");
                let servicesArrow = $e.querySelector(".services-single-arrow");
                $e.addEventListener("click", () =>{
                    if(servicesSingle && servicesSingle.classList.contains("services-single-active")){
                        servicesArrow.style.setProperty("--transform-rotate", "0deg");
                        servicesSingle.classList.remove("services-single-active");
                        $e.style.minHeight = "5rem";
                        $e.style.paddingBlock = "1rem"
                        servicesSingle.classList.add("services-single-hidden");
                       
                    }else if(servicesSingle){
                        servicesArrow.style.setProperty("--transform-rotate", "180deg");
                        $e.style.minHeight = "27.5rem";
                        servicesSingle.classList.add("services-single-active");
                        servicesSingle.classList.remove("services-single-hidden");
                   
                    }
                    
                })
            })

/* FORM */

const Form = document.querySelector("#survey-form");
const InputValues = document.querySelectorAll(".input-value");
const FormErrors = document.querySelectorAll(".form-error");
const FormSubmit = document.querySelector("#submit");
const FormIntro = document.querySelector(".flaw-intro");

function checkIfFormSent(){
    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    let tel = document.querySelector("#tel");
    let flaws = document.querySelector("#flaws");

    console.log(name.value);
}
function checkIfError(){
    /* EMPTYINPUT */

            /* NAME */
    if (window.location.href.indexOf("emptyinputName") > -1) {
        InputValues[0].classList.add("input-value-invalid");
        FormErrors[0].innerText = "Proszę wypełnić to pole";
        FormErrors[0].style.opacity = "100%";
      }
    if (window.location.href.indexOf("emptyinputEmail") > -1) {
        InputValues[1].classList.add("input-value-invalid");
        FormErrors[1].innerText = "Proszę wypełnić to pole";
        FormErrors[1].style.opacity = "100%";
      }
    if (window.location.href.indexOf("emptyinputTel") > -1) {
        InputValues[2].classList.add("input-value-invalid");
        FormErrors[2].innerText = "Proszę wypełnić to pole";
        FormErrors[2].style.opacity = "100%";
      }
    if (window.location.href.indexOf("emptyinputFlaws") > -1) {
        InputValues[3].classList.add("input-value-invalid");
        FormErrors[3].innerText = "Proszę wypełnić to pole";
        FormErrors[3].style.opacity = "100%";
      }
      /* NO ERROR */
      if (window.location.href.indexOf("none") > -1){
        FormIntro.innerText = "Udało się wysłać maila!";
      }
}
window.addEventListener("hashchange", checkIfError);
window.addEventListener("DOMContentLoaded", checkIfError);