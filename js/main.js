const infoCon = document.querySelector("#info-con");

const info = [
    { name: "Our History", text: "Zima was launched in 1993 as an alcoholic beverage as an alternative to beer, with a crisp, citrus-like flavor. Originally targeted towards young men, it failed to reach the recognition it sought, and was discontinued in 2008."},
    { name: "Us Now", text: "Zima has been revitalized with a brand new formula, now as Zima Sweet Tundra. The new formula brings the lush citrus flavor to new heights with a tangy combination of lemon and lime flavor." }
];

let count = 0;
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");

function displayInfo() {
    const infoDiv = document.createElement("div");
    infoDiv.classList.add("col-span-full");
    const infoHead = document.createElement("h1");
    const infoParagraph = document.createElement("p");
    
    
    infoHead.textContent = info[count].name;
    infoParagraph.textContent = `"${info[count].text}"`;
    

    infoCon.innerHTML = "";

    
    infoDiv.appendChild(infoParagraph);
    infoDiv.appendChild(infoHead);

    infoCon.appendChild(infoDiv);
}

function nextInfo() {
    count++;
    if (count >= info.length) {
        count = 0;
    }
    displayInfo();
}

function previousInfo() {
    count--;
    if (count < 0) {
        count = info.length-1;
    }
    displayInfo();
}

displayInfo();

next.addEventListener("click", nextInfo);
previous.addEventListener("click", previousInfo);