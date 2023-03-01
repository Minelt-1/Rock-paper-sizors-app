const btn = document.querySelector(".rules");
const rules = document.querySelector(".rules-div-main");
const btnclose = document.querySelector(".close-btn");

btn.addEventListener("click", () =>{
    rules.style.display = "block";
    totalresultdiv.style.display = "none"
})

btnclose.addEventListener("click", () =>{
    rules.style.display = "none";
})