// counters
  
    const mySection = document.querySelector('.counter-sec'); 
    const mySectionOffsetTop = mySection.offsetTop; 
    const windowHeight = window.innerHeight; 
    
    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY; 
      if (scrollPosition > mySectionOffsetTop - windowHeight) {
    
    
        let  numDivs  = document.querySelectorAll(".num-holder h4") ; 
        let interval = 5000 ; 
        
      numDivs.forEach((numDiv)=>{
        if(numDiv.innerHTML == "0"){
          let startValue = 0 ; 
          let endValue = parseInt(numDiv.dataset.num ) ; 
          let duration =  Math.floor(interval / numDiv.dataset.num )  ;
          let counter =  setInterval(() => {
          startValue++ ;
          numDiv.textContent = startValue ;
           if(startValue == endValue){
             clearInterval(counter)
          }
      }, duration);
        }
      
    } )
    
        
      }
    });
