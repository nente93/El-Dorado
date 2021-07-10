const nav = document.querySelector('.navlinks');
const OpenNav = document.querySelector('.navOpen');
const Close = document.querySelector('.close');

OpenNav.onclick = function(){
    if(nav.style.display = 'none'){
     nav.style.display = 'block'; 
     nav.style.textAlign = 'center';
    }
};
Close.onclick = function(){
    if(nav.style.display = 'block'){
     nav.style.display = 'none'
    }
}