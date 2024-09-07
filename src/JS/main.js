
const $ = selector => document.getElementById(selector);

//*Button code for show the menu when we click it:
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



// Main slider template function:

//Sliders elements:

const rankedSlider = document.querySelector('#rankedBookSlider');
const rankedSlider2 = document.querySelector('#bestSelledSlider')

const max = rankedSlider.scrollWidth - rankedSlider.clientWidth;
const left = rankedSlider.clientWidth;

const max2 = rankedSlider.scrollWidth - rankedSlider.clientWidth;
const left2 = rankedSlider.clientWidth;


// rakedBooks slides buttons:
const btnLeft1 = document.getElementById('leftButton');
const btnRight1 = document.getElementById('rightButton');

const btnLeft2 = document.getElementById('leftButton2');
const btnRight2 = document.getElementById('rightButton2');

const btnLeft3 = document.getElementById('leftButton3');
const btnRight3 = document.getElementById('rightButton3');


//ranked books slides buttons:
const btnLeft4 = document.getElementById('leftButton4');
const btnRight4 = document.getElementById('rightButton4');

const btnLeft5 = document.getElementById('leftButton5');
const btnRight5 = document.getElementById('rightButton5');

const btnLeft6 = document.getElementById('leftButton6');
const btnRight6 = document.getElementById('rightButton6');



    function moveSlideRight(slider) {
        slider.scrollBy({left: slider.clientWidth, behavior: 'smooth'});
    }
        
    function moveSlideLeft(slider) {
        slider.scrollBy({left: (slider.clientWidth * -1), behavior: 'smooth'});
    }

    // Function for create the slider buttons: 
    function createButtonForSlider(newButtonRight, newButtonLeft, slider){
        newButtonRight.onclick = () => {
            moveSlideRight(slider);
        };
    
        newButtonLeft.onclick = () => {
            moveSlideLeft(slider);
        }
    }

// Here we create the button pairs ofr ranked slider:

//Slider 1:
createButtonForSlider(btnRight1, btnLeft1, rankedSlider);
createButtonForSlider(btnRight2, btnLeft2, rankedSlider);
createButtonForSlider(btnRight3, btnLeft3, rankedSlider);

//Slider 2:
createButtonForSlider(btnRight4, btnLeft4, rankedSlider2);
createButtonForSlider(btnRight5, btnLeft5, rankedSlider2);
createButtonForSlider(btnRight6, btnLeft6, rankedSlider2);

//Here we create the button pairs of selled slider

