export const toggler = document.querySelector('[data-off]');
  toggler.addEventListener('click',function(){
      const off = toggler.classList.toggle('bi-toggle-off');
   const on = toggler.classList.toggle('bi-toggle-on');
   if(on){
    // document.body.style.backgroundColor = '#151720';
    document.documentElement.style.setProperty('--primary','#151720');
    document.documentElement.style.setProperty('--poster','rgba(0,0,0,0.8)');
    document.documentElement.style.setProperty('--blue-black','#eeee');
    document.documentElement.style.setProperty('--faded-black','#eee')
   }else if(off){
     //document.body.style.backgroundColor = '#dddd';
         const dark = document.documentElement.style.setProperty('--primary','#dddd');
         document.documentElement.style.setProperty('--poster','#eee');
         document.documentElement.style.setProperty('--blue-black','#151720');
         document.documentElement.style.setProperty('--faded-black','rgba(0,0,0,0.8)')
   }
    })
    