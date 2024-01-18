import {getNews} from '../utils/fetchData.js';
import {shuffleArray} from '../utils/shuffleArray.js'
import {createElement} from '../utils/createElement.js'
import {toggler} from '../utils/light_dark_toggler.js';
import {showMenu} from '../utils/showMenu.js';
//import {links} from '../utils/router.js'
window.addEventListener('DOMContentLoaded',function(){
  let keyword = 'latest news';
  let currentOpen = null;
  let randomIndex; 
 // const nav_content = document.querySelector('.nav-content');

  const banner = document.querySelector('.banner');
  const root = document.querySelector('#root');
  const nav = document.querySelector('nav');
const search_form = document.querySelector('.search_component');
   const search_value = document.querySelector('#search');
   const submit_search = document.querySelector('.bi-search');
   //function to toggle the form display
   function checkScroll(){
     if(window.scrollY > 30){
       search_form.style.display = "none"
       /*search_form.style.position = 'fixed';
       search_form.style.top = "10px";
       search_form.style.left = "20px";*/
       nav.style.position = "fixed";
       nav.style.backgroundColor = 'inherit'
       nav.style.width = '95.7%';
     }else{
       search_form.style.position = "";
       search_form.style.display = "flex";
       nav.style.position = "";
       nav.style.backgroundColor = ''
     }
   }
   // check the scroll of the form element
   document.addEventListener('scroll',checkScroll)
  // function to re-render the root conponent based on the search request
  function search(event){
    event.preventDefault();
     
      let new_word = search_value.value.trim();
     if(new_word !== ''){
       keyword = new_word;
       banner.innerHTML = ''+'<br/>';
       root.innerHTML = "";
      
       newsData();
      new_word = "";
     }else{
       console.log('invalid')
     }
  }
submit_search.addEventListener('click',search);
search_form.addEventListener('submit',search);
const newsData = async()=>{
  const result = await getNews(keyword);
 const news = await shuffleArray(result);
randomIndex = Math.floor(Math.random()* news.length)
  //before the mapping we create a banner
  const img = createElement('img')
  const title = createElement('h2');
  banner.appendChild(img);
  img.setAttribute('src',news[randomIndex].urlToImage);
  img.setAttribute('alt',"");
  img.setAttribute('class','random')
  title.textContent = news[randomIndex].title;
  banner.appendChild(title);
  
  const href = createElement('a');
  href.setAttribute('href',news[randomIndex].url);
  href.setAttribute("target","_blank")
  const anchor = createElement('p');
  anchor.textContent='read more...'
  anchor.setAttribute('class','read_article')
  href.appendChild(anchor)
  banner.appendChild(href)
  const loaded = news?.length > 0
  if(loaded){
    news.forEach((data,index)=>{
      
      const poster = createElement('figure')
      poster.setAttribute('class','poster')
      root.appendChild(poster)
     // const url = createElement('a');
     // url.setAttribute('href',data.url)
     // url.setAttribute('target','_blank')
      //url.appendChild(poster)
      const picture = createElement('picture')
      poster.appendChild(picture)
   const img = createElement('img');
   img.setAttribute('src',data.urlToImage);
   img.setAttribute('loading','lazy')
     picture.appendChild(img)
     img.setAttribute('alt','')
     const figcaption = createElement('div');
     
const li = createElement('p');
li.setAttribute('class','description')
figcaption.appendChild(li)
     poster.appendChild(figcaption)
          li.textContent = data.title;
          //a div element to hold the reactions class and its elements
          const reactions = createElement('div');
          reactions.setAttribute('class','reactions')
          //the source with h6 tag
     const h6 = createElement('h6');
     h6.textContent ='Source: '+data.source.name.slice(0,22);
     // a heart icon responsible for likes
     const heart = createElement('i');
     heart.setAttribute('class','bi bi-heart');
  //add and addEventListener to check the current state of the like icon if its clicked or unclicked
     heart.addEventListener('click',()=>{
       if(heart.className === "bi bi-heart"){
         //if its clicked toggle the click action
         heart.classList.replace('bi-heart','bi-heart-fill')
       }else{
         heart.classList.replace('bi-heart-fill','bi-heart')
       }
     })
     //end of addEventListener
     const comment = createElement('i');
     comment.setAttribute('class','bi bi-chat-dots')
     //create a form element
     const form = createElement('form')
     form.setAttribute('class','comments-section')
     const label = createElement('label')
     const i = createElement('i')
     i.textContent = "add comments"
     label.appendChild(i)
     form.appendChild(label)
     const textarea = createElement('textarea');
     const close = createElement('i');
     close.setAttribute('class','bi bi-x');
          //xlose listener to close the comment
     form.appendChild(close)
     document.addEventListener('click', function (event) {
  if (event.target === close) {
    form.style.display = 'none';
  }
});
     form.appendChild(textarea);
     const button = createElement('button');
     button.textContent = "submit"
     form.appendChild(button)
     //ends here
     comment.appendChild(form)
     reactions.appendChild(h6)
     reactions.appendChild(heart)
     
     reactions.appendChild(comment)
     poster.appendChild(reactions)
     // add a click action to comment to popup the form element

     comment.addEventListener('click',function(){
       
       if(currentOpen){
         currentOpen.style.display = "none";
       }
       form.style.display = "flex";
     currentOpen  = form;
     })
    })
   }else{
     console.log('not fetched')
  }
}
   newsData()
   
   
   //the menu display function
   
   
})