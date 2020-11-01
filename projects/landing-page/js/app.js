/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/* Define Global Variables */
let sections=['Section 1','Section 2','Section 3','Section 4'];
let buttons=['Button 1','Button 2','Button 3','Button 4'];
const ul=document.getElementById('navbar__list');
const sections2 = document.querySelectorAll("section");


/* Main functions */
/* Building the navigation bar */
function buildNavBar(){
  for (let i=0;i<sections.length;i++){
    let section=sections[i];
    const li=document.createElement('li');
    const button=document.createElement('button');   
    li.appendChild(button);
    button.textContent=section;
    ul.appendChild(li);
    li.id=sections[i];
    button.id=buttons[i];
    li.addEventListener('click', function(){
      sections2[i].scrollIntoView({behavior:'smooth'}); 
    })  
  }
};



buildNavBar();

/* Add class 'active' when near the viewport  */
function classActive() {
  for (const section of sections2) {
    const item = section.getBoundingClientRect();
    if (item.top <= 150 && item.bottom >= 150) {
      section.classList.add('your-active-class');
    } else {
      section.classList.remove('your-active-class');
    }
  }
}


/* Styling */
/* Styling Navigation */
const styleBar=document.getElementById('navbar__list');
styleBar.style.cssText='background-color: rgba(136,203,171,1)'; 

/* Styling buttons */
const styleButton1=document.getElementById('Button 1');
styleButton1.style.cssText='background-color: rgba(0,13,60,1); color: white; font-size: 1em';

const styleButton2=document.getElementById('Button 2');
styleButton2.style.cssText='background-color: #425d6b; color: white; font-size: 1em';

const styleButton3=document.getElementById('Button 3');
styleButton3.style.cssText='background-color: #688e89; color: white; font-size: 1em';

const styleButton4=document.getElementById('Button 4');
styleButton4.style.cssText='background-color: rgb(136,203,171); color: white; font-size: 1em';


/* Events */
/* Active class event */
document.addEventListener('scroll', function () {
  classActive();
})


