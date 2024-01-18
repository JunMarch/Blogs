export const links = document.querySelectorAll('[data-link]');
function getCurrentLink(event){
  event.preventDefault();
  const data = event.target.href;
  const {pathname} = location;
  console.log(history)
//  location.assign(data)
 // console.log(location)
 //location.replace(pathname,data)
}
links.forEach(link=>{
  link.addEventListener('click',getCurrentLink)
})

/*// Assuming you have an element with id "content" to display the dynamic content
const contentElement = document.getElementById('content');

export const links = document.querySelectorAll('[data-link]');

function getCurrentLink(event) {
    event.preventDefault();
    const data = event.target.href;
    const { pathname } = new URL(data);
    
    // Fetch content for the selected page
    fetchPage(pathname);
    
    // Update the URL without a full page reload
    history.pushState({ page: pathname }, null, data);
}

function fetchPage(pathname) {
    // You can fetch content based on the pathname here
    // For simplicity, let's use a simple example
    const content = `<h2>${pathname.slice(1).toUpperCase()} Page</h2><p>This is the ${pathname.slice(1)} content.</p>`;
    contentElement.innerHTML = content;
}

// Handle the back/forward navigation using popstate event
window.addEventListener('popstate', (event) => {
    const { page } = event.state || { page: 'home' };
    fetchPage(page);
});

// Add event listeners to the links
links.forEach(link => {
    link.addEventListener('click', getCurrentLink);
});
*/
