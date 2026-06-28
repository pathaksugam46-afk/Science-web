const mathLink = document.getElementById('mathPageLink');
const physicsLink = document.getElementById('physicsPageLink');
const chemLink = document.getElementById("chemPageLink");

function showMessage(subject){

    const snack = document.createElement("div");

    snack.innerText = `Opening ${subject} Page`;

    snack.style.position = "fixed";
    snack.style.bottom = "20px";
    snack.style.left = "20px";
    snack.style.background = "#13202d";
    snack.style.color = "white";
    snack.style.padding = "15px 20px";
    snack.style.borderRadius = "50px";
    snack.style.zIndex = "9999";

    document.body.appendChild(snack);

    setTimeout(() => {
        snack.remove();
    }, 2000);
}

if(mathLink){
mathLink.addEventListener("click",(e)=>{
    e.preventDefault();
    showMessage("Mathematics");
});
}

if(physicsLink){
physicsLink.addEventListener("click",(e)=>{
    e.preventDefault();
    showMessage("Physics");
});
}

if(chemLink){
    chemLink.addEventListener("click",(e)=>{
        e.preventDefault();
        showMessage("Chemistry");
    });
}

const footMathA = document.getElementById("footMathA");
const footMathB = document.getElementById("footMathB");
const footHypBtn = document.getElementById("footHypBtn");
const footMathResult = document.getElementById("footMathResult");

if(footHypBtn){
    footHypBtn.addEventListener("click",()=>{


        let a = parseFloat(footMathA.value) || 0;
        let b = parseFloat(footMathB.value) || 0;

        let c = Math.sqrt(a*a + b*b);

        footMathResult.innerText = `c = ${c.toFixed(4)}`;
});
}


const footEnergyVal = document.getElementById("footEnergyVal");
const footEnergyDir = document.getElementById("footEnergyDir");
const footEnergyConv = document.getElementById("footEnergyConv");
const footEnergyRes = document.getElementById("footEnergyRes");

footEnergyConv.addEventListener("click",()=>{
    let val = parseFloat(footEnergyVal.value) || 0;

    let result;

    if(footEnergyDir.value === "JtoeV"){

        result = val / 1.602176634e-19

        footEnergyRes.innerText= 
        `${val} J = ${result.toExponential(4)} eV`;
    }else{

        result = val * 1.602176634e-19;

        footEnergyRes.innerText =
        `${val} eV = ${result.toExponential(4)} J`;
    }
});



const footMolarMass = document.getElementById("footMolarMass");
const footMoles = document.getElementById("footMoles");
const footGramResult = document.getElementById("footGramResult");
const footCalcGrams = document.getElementById("footCalcGrams");

footCalcGrams.addEventListener("click",()=>{

    let  mm = parseFloat(footMolarMass.value) || 0;
    let mol = parseFloat(footMoles.value) || 0;

    let grams = mm * mol;

    footGramResult.innerText = 
    `${grams.toFixed(4)} g`;
});
}
const navContainer = document.querySelector('.nav-container');
if(navContainer && !document.getElementById('navSearch')){
    const searchDiv = document.createElement('div');
    searchDiv.style.cssText = `
    background: rgba(255,255,240,0.15);
    border-radius: 60px;
    padding: 6px 16px;
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid rgba(255, 255, 255, 0.16)
    
    `
    searchDiv.innerHTML= `
    <i class="fas fa-search" style="color:#aacde2"></i>
    <input type="text" id="navSearch" placeholder="search subjects..." style="background:transparent; color:white; outline:none; padding:8px 0;">
    `;
    navContainer.appendChild(searchDiv);
}

const navSearch = document.getElementById("navSearch");

if (navSearch) {
    navSearch.addEventListener("input", (e) => {
        let query = e.target.value.toLowerCase();
        const cards = document.querySelectorAll(".flip-card");

        cards.forEach(card => {
            let text = card.innerText.toLowerCase();
            card.style.display = text.includes(query) ? "" : "none";
        });
    });
}

