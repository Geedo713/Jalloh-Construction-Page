const  hotElement = document.getElementsByTagName('p')[2];
const hotBtn = document.getElementsByTagName('button')[0];
const body = document.getElementsByTagName('body')[0];

function textInjector() {
    hotElement.innerText = "CLICK THE BUTTON FOR LANDING PAGE EXAMPLES!";
}

function textRemover() {
    hotElement.innerText = "";
}

hotBtn.addEventListener('mouseover', textInjector, false);



