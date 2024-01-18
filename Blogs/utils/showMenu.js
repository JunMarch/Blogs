export const showMenu = document.querySelector('.bi-list')
const nav_content = document.querySelector('.nav-content');
function show_menu(){
     nav_content.style.display = 'flex';
   }
  showMenu.addEventListener('click',show_menu)
  //event to close the menu 
  function hideMenu(event){
    if(event.target === document.body){
      nav_content.style.display = 'none';
    };
  }
  document.addEventListener('click',hideMenu)