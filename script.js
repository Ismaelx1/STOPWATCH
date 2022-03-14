
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  const title = document.getElementById('title')
  const buttonStart = document.getElementById('button-start');
  const buttonStop = document.getElementById('button-stop');
  const stopText = document.getElementById('lmao')

buttonStop.addEventListener('click', function() {
  clearInterval(momo)
})

window.onload = function () {
  
  const appendTens = document.getElementById("tens")
  const appendSeconds = document.getElementById("seconds")

  const buttonReset = document.getElementById('button-reset');




    let Interval ;
    let seconds = 00; 
    let tens = 00; 

    buttonStart.onclick = function() {
      
      clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
       
    
    }
    
    buttonStop.onclick = function() {
      clearInterval(Interval);
     document.body.backgroundColor = "black"
  
 }
  
    buttonReset.onclick = function() {
       clearInterval(Interval);
      tens = "00";
        seconds = "00";
           appendTens.innerHTML = tens;
             appendSeconds.innerHTML = seconds;
    }
    
     
    
    function startTimer () {
      tens++; 
   
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
       
        
      }
      
      if (tens > 9){
        appendTens.innerHTML = tens;
      
    
        
      } 
      
      if (tens > 99) {
        seconds++;
            appendSeconds.innerHTML = "0" + seconds;
              tens = 0;
               appendTens.innerHTML = "0" + 0;    

              
      }
      
      if (seconds > 9){
          appendSeconds.innerHTML = seconds;
      }
    };
    }
  
  


    let momo = setInterval(
      function () {
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = "#"+randomColor;
        stopText.style.color = "#"+randomColor;
        title.style.color = "#"+randomColor;
        
   return momo
      },1000);