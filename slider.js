// const body = document.getElementById('body');
body.insertAdjacentHTML('beforeend',
    '<section id = "block" class="block"></section>');

block.insertAdjacentHTML('beforeend',
    '<div id = "container" class="container block_2"></div>');

container.insertAdjacentHTML('beforeend',
    `<div id = "projectInfo" class="project_info"></div>
<div id = "projectExample" class="project_example"></div>
`)

projectInfo.insertAdjacentHTML('beforeend',
    `<h2 class="yo">completed project</h2>
<p class="description">Only a small part of the work performed by our company is presented on the
    site. For 14 years on in the construction<br> market we have made happy more than 1000 families
</p>
<div id = "info" class="info"></div>
<div id = "rulet" class="rulet"></div>
`)

info.insertAdjacentHTML('beforeend',
    `<div>
<h3 class="yo info_title">City:</h3>
<p id="City" class="info_content">Rostov-on-Don<br>LCD admiral</p>
</div>
<div>
<h3 class="yo info_title">apartment area:</h3>
<p id="Area" class="info_content">81 m2</p>
</div>
<div>
<h3 class="yo info_title">Repair time:</h3>
<p id="Repair_time" class="info_content">3.5 months</p>
</div>
<div>
<h3 class="yo info_title">Repair Cost:</h3>
<p class="info_content">Upon request</p>
</div>
`);

rulet.insertAdjacentHTML('beforeend',
    `<ul class="rulet_1">
<li id="row_left" class="row row_left" tabindex="0"></li>
<li id="dot1" class="dot"><span class="dot_click">•</span></li>
<li id="dot2" class="dot"><span class="dot_click">•</span></li>
<li id="dot3" class="dot"><span class="dot_click">•</span></li>
<li id="row_righ" class="row row_right" tabindex="0"></li>
</ul>
`);

projectExample.insertAdjacentHTML('beforeend',
    `<ul>
<li><a id="Admiral" class="yo">Rostov-on-Don, Admiral</a></li>
<li><a id="Sochi" class="yo">Sochi Thieves</a></li>
<li><a id="Patriot" class="yo">Rostov-on-Don Patriotic</a></li>
</ul>
<div id="Image_project"><img src="image/image 2.1.png" alt="desing" width="679px" height="482px">
</div>
`);

const admiral = document.getElementById('Admiral');
const sochi = document.getElementById('Sochi');
const patriot = document.getElementById('Patriot');
const city = document.getElementById('City');
const area = document.getElementById('Area');
const repairTime = document.getElementById('Repair_time');
const rowLeft = document.getElementById('row_left');
const dotOne = document.getElementById('dot1');
const dotTwo = document.getElementById('dot2');
const dotThre = document.getElementById('dot3');
const rowRight = document.getElementById('row_righ');
const imageProject = document.getElementById('Image_project');

sochiProject = {

    sochiStyle: 'color: #e3b873; border-bottom: solid #e3b873 1px;',
    admiralStyle: 'text-decoration:none; color: rgba(255, 255, 255, 0.3);',
    patriotStyle: 'text-decoration:none; color: rgba(255, 255, 255, 0.3);',
    cityName: 'Sochi<br>Thieves',
    area: '105 m2',
    repairTime: '4 months',
    dotOneColor: 'color: rgba(255, 255, 255, 0.3);',
    dotTwoColor: 'color: white',
    dotThreColor: 'color: rgba(255, 255, 255, 0.3);',
    imageProject: '<img src="image/slider_2.jpg" alt="desing" width="679px" height="482px">',
}

admiralProject = {

    sochiStyle: 'text-decoration:none; color: rgba(255, 255, 255, 0.3);',
    admiralStyle: 'color: #e3b873; border-bottom: solid #e3b873 1px;',
    patriotStyle: 'text-decoration:none; color: rgba(255, 255, 255, 0.3);',
    cityName: 'Rostov-on-Don<br>LCD admiral',
    area: '81 m2',
    repairTime: '3.5 months',
    dotOneColor: 'color: white',
    dotTwoColor: 'color: rgba(255, 255, 255, 0.3);',
    dotThreColor: 'color: rgba(255, 255, 255, 0.3);',
    imageProject: '<img src="image/slider_1.jpg" alt="desing" width="679px" height="482px">',
}

patriotProject = {

    sochiStyle: 'text-decoration:none; color: rgba(255, 255, 255, 0.3);',
    admiralStyle: 'text-decoration:none; color: rgba(255, 255, 255, 0.3);',
    patriotStyle: 'color: #e3b873; border-bottom: solid #e3b873 1px;',
    cityName: 'Rostov-on-Don<br>Patriotic',
    area: '93 m2',
    repairTime: '3 months',
    dotOneColor: 'color: rgba(255, 255, 255, 0.3);',
    dotTwoColor: 'color: rgba(255, 255, 255, 0.3);',
    dotThreColor: 'color: white',
    imageProject: '<img src="image/slider_3.jpg" alt="desing" width="679px" height="482px">',
}

admiral.style = admiralProject.admiralStyle;
dotOne.style = admiralProject.dotOneColor;

let galery = [admiralProject, sochiProject, patriotProject];

let currentIndex = 0;

function showSochi() {

    admiral.style = sochiProject.admiralStyle;
    sochi.style = sochiProject.sochiStyle;
    patriot.style = sochiProject.patriotStyle;
    dotOne.style = sochiProject.dotOneColor;
    dotTwo.style = sochiProject.dotTwoColor;
    dotThre.style = sochiProject.dotThreColor;
    imageProject.innerHTML = sochiProject.imageProject;
    city.innerHTML = sochiProject.cityName;
    area.innerHTML = sochiProject.area;
    repairTime.innerHTML = sochiProject.repairTime;

    currentIndex = 1;
}

function showAdmiral() {

    admiral.style = admiralProject.admiralStyle;
    sochi.style = admiralProject.sochiStyle;
    patriot.style = admiralProject.patriotStyle;
    dotOne.style = admiralProject.dotOneColor;
    dotTwo.style = admiralProject.dotTwoColor;
    dotThre.style = admiralProject.dotThreColor;
    imageProject.innerHTML = admiralProject.imageProject;
    city.innerHTML = admiralProject.cityName;
    area.innerHTML = admiralProject.area;
    repairTime.innerHTML = admiralProject.repairTime;
    currentIndex = 0;
}

function showPatriot() {

    admiral.style = patriotProject.admiralStyle;
    sochi.style = patriotProject.sochiStyle;
    patriot.style = patriotProject.patriotStyle;
    dotOne.style = patriotProject.dotOneColor;
    dotTwo.style = patriotProject.dotTwoColor;
    dotThre.style = patriotProject.dotThreColor;
    imageProject.innerHTML = patriotProject.imageProject;
    city.innerHTML = patriotProject.cityName;
    area.innerHTML = patriotProject.area;
    repairTime.innerHTML = patriotProject.repairTime;
    currentIndex = 2;
}

function next() {

    if (currentIndex == (galery.length - 1)) {

        admiral.style = galery[0].admiralStyle;
        sochi.style = galery[0].sochiStyle;
        patriot.style = galery[0].patriotStyle;
        dotOne.style = galery[0].dotOneColor;
        dotTwo.style = galery[0].dotTwoColor;
        dotThre.style = galery[0].dotThreColor;
        imageProject.innerHTML = galery[0].imageProject;
        city.innerHTML = galery[0].cityName;
        area.innerHTML = galery[0].area;
        repairTime.innerHTML = galery[0].repairTime;
        currentIndex = 0;
    } else {
        admiral.style = galery[currentIndex + 1].admiralStyle;
        sochi.style = galery[currentIndex + 1].sochiStyle;
        patriot.style = galery[currentIndex + 1].patriotStyle;
        dotOne.style = galery[currentIndex + 1].dotOneColor;
        dotTwo.style = galery[currentIndex + 1].dotTwoColor;
        dotThre.style = galery[currentIndex + 1].dotThreColor;
        imageProject.innerHTML = galery[currentIndex + 1].imageProject;
        city.innerHTML = galery[currentIndex + 1].cityName;
        area.innerHTML = galery[currentIndex + 1].area;
        repairTime.innerHTML = galery[currentIndex + 1].repairTime;
        currentIndex++;
    }
}

function prev() {

    if (currentIndex == 0) {

        admiral.style = galery[galery.length - 1].admiralStyle;
        sochi.style = galery[galery.length - 1].sochiStyle;
        patriot.style = galery[galery.length - 1].patriotStyle;
        dotOne.style = galery[galery.length - 1].dotOneColor;
        dotTwo.style = galery[galery.length - 1].dotTwoColor;
        dotThre.style = galery[galery.length - 1].dotThreColor;
        imageProject.innerHTML = galery[galery.length - 1].imageProject;
        city.innerHTML = galery[galery.length - 1].cityName;
        area.innerHTML = galery[galery.length - 1].area;
        repairTime.innerHTML = galery[galery.length - 1].repairTime;
        currentIndex = (galery.length - 1);
    } else {
        admiral.style = galery[currentIndex - 1].admiralStyle;
        sochi.style = galery[currentIndex - 1].sochiStyle;
        patriot.style = galery[currentIndex - 1].patriotStyle;
        dotOne.style = galery[currentIndex - 1].dotOneColor;
        dotTwo.style = galery[currentIndex - 1].dotTwoColor;
        dotThre.style = galery[currentIndex - 1].dotThreColor;
        imageProject.innerHTML = galery[currentIndex - 1].imageProject;
        city.innerHTML = galery[currentIndex - 1].cityName;
        area.innerHTML = galery[currentIndex - 1].area;
        repairTime.innerHTML = galery[currentIndex - 1].repairTime;
        --currentIndex;
    }
}

rowRight.addEventListener('click', next);

admiral.addEventListener('click', showAdmiral);
dotOne.addEventListener('click', showAdmiral);
sochi.addEventListener('click', showSochi)
dotTwo.addEventListener('click', showSochi)
patriot.addEventListener('click', showPatriot);
dotThre.addEventListener('click', showPatriot);

rowLeft.addEventListener('click', prev);
