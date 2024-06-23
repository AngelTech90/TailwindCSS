
const $ = selector => document.getElementById(selector);

//*This is for show the menu:

//*Button for change the display of one of our menu's section:
let menuButton = $('menuAccessButton');
let sectionMenu2 = $('secondSection');

let clicksCounter = 1;

//*Here we hide our second menu section:
sectionMenu2.style.display = 'none';


//*Here we'll render our menu once we click our button:
menuButton.onclick = () => {

    //*We count the amount of our clicks for render our hide our section:
    if(clicksCounter === 1){

        sectionMenu2.style.display = 'flex';
        
    }
    
    if(clicksCounter === 2){
    
         //*Here we hide our second menu section:
        sectionMenu2.style.display = 'none';

    }

    //*When we click our button we increase the total amount of clicks
    clicksCounter = clicksCounter + 1;

    //*Once our clicks reach the the limit we reset our clicks
    if(clicksCounter > 2){

        clicksCounter = clicksCounter - 2;

    }

}





