
//velge elementer og lagre dem i variabler
const themeChangeButton  = document.getElementById("theme-change");
const mainContainer = document.querySelector(".main-container");
const body = document.body;
const p = document.querySelectorAll("p");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const omMeg = document.querySelector(".om-meg");
const button= document.getElementById("theme-change");
const menuList = document.querySelector(".hoved-meny").firstElementChild.children;



themeChangeButton.addEventListener('click', () => {
    //document.cookie = "dark";   
    
    //skifter på kanpp tekst
    button.innerHTML = button.innerText.toLowerCase() === "dark theme" ? "Light theme" : "Dark theme";
    //skifter farge på body
    body.classList.toggle("dark-theme-body");
    //skifter farge på main-container
    mainContainer?.classList.toggle("dark-theme-main-container");
    //skrifer tekst farge
    themeChangeButton.classList.toggle("black-text");
    //..for alle paragrafer
    p.forEach((paragraph)=>{
        paragraph?.classList.toggle("white-text");
    });
    //..for alle meny knappene
    for(i=0;i<menuList.length;i++){
        menuList[i].firstChild.classList.toggle("black-text");
    }
    
    

    //skifter farge på header 1
    h1.classList.toggle("white-text");
    //Hvis header2 finnes skift farge
    if(h2 != null){
        h2.classList.toggle("white-text");
    }
    //Hvis omMeg container finnes skift farge
    if(omMeg != null){
        omMeg.classList.toggle("dark-theme-main-container");
    }
    
});


