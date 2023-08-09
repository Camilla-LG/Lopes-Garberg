//model - variabler

let Arnstein="";
let Camilla="";
let Olivia="";
let Marve="";
let themeButton="";

//view - HTML (det brukeren ser)

updateView();

function updateView(){
    document.getElementById('website').innerHTML= /*HTML*/ `

 
    <h1 id="headline">The Lopes-Garberg's</h1>
    <h3 id="subHeadline">Established 2022</h3>
    
    <button id="modeButton" onclick="lightMode(); darkMode()"></button>

    <div class="container">
        <div id="familyPic">
            <img src="img/IMG-20230204-WA0008.jpg" width="400" height="400">
        </div>

        <div class="familyMembers">
            <div id="Arnstein" onclick="clickArnstein()">Arnstein</div>
            <div id="Camilla" onclick="clickCamilla()">Camilla Maria</div>
            <div id="Olivia" onclick="clickOlivia()">Olivia Nova</div>
            <div id="Marve" onclick="clickMarve()">Marve</div>
        </div>
    </div>
   
    `;
}

//controller - funksjoner


function clickArnstein(){
    document.getElementById('website').innerHTML= /*HTML*/ `

    <h1 id="headline">The Lopes-Garberg's</h1>
    <h3 id="subHeadline">Established 2022</h3>

    <div class="buttonLine">
        <div id="Startpage" onclick="clickStartpage()">Start Page</div>
        <div id="Camilla" onclick="clickCamilla()">Camilla Maria</div>
        <div id="Olivia" onclick="clickOlivia()">Olivia Nova</div>
        <div id="Marve" onclick="clickMarve()">Marve</div>
    </div>

    <button id="modeButton" onclick="lightMode(); darkMode()"></button>

    <div class="container">
        <div id="familyPic">
            <img src="img/IMG_20230113_144215_422.jpg" width="400" height="400">
        </div>
        <div id="arnsteinInfo">
        <h2 id="nameTag"> Arnstein </h2>
        <br>
        Ivrig løper, ølbrygger, og baker av surdeigsbrød, pizza og kanelsnurrer.
         Hjertevarm og omtenksom ektemann og pappa, som stortrives i helsefagyrket med de eldre, 
         men herjer dansegulvet når anledningen byr seg. Stolt eier av de tørreste pappavitsene,
         men er fortsatt ganske så morsom til tross.
         </div>
    </div>
    `;
}

function clickStartpage(){
    updateView();
}





