
ready(function(){

    console.log(rootCalculator(10))

    //Mimics the bootstrap JS to open navBar
    let buttonNav = document.getElementsByClassName('navbar-toggler')[0]
    let navBarNav = document.getElementsByClassName('navbar-nav')[0]
    let contentNav = document.getElementById('navbarNavAltMarkup')
    let show = false
    buttonNav.onclick=(()=>{
        show = !show

        //Check the status of the show variable and add or remove show class accordingly
        if(show){
          contentNav.classList.add('show')
          navBarNav.classList.add('show')
        }
        else{
          contentNav.classList.remove('show')
          navBarNav.classList.remove('show')
        }
    })

    //Calculate Button Implementation


  var calculateButton = document.getElementById("calculate-button");
  var errors=[];

  var operators = document.getElementById('operators').querySelectorAll('div');
  //We use this function in order to put the sign in the input when clicked
  for(var i=0;i<operators.length-1;i++){
    operators[i].onclick = function(e){
      if(this.innerHTML=="Del"){
        document.getElementById('main-input').value = '';
      }
      else{
        document.getElementById('main-input').value += this.innerHTML;
      }
    }
  }

  var mainInput =  document.getElementById('main-input');
  mainInput.addEventListener('input', function(e){
    mainInput.value = this.value.toLowerCase();
 })

  //Calculate the derivative after the Calculate Button is clicked
  calculateButton.onclick = function(){
    try{
      let inputEl = document.getElementById("main-input");// Equal button
      let target = inputEl.value;
      //Calculate the square Root
      let squareRootsResults = rootCalculator(target);
      let resultsDiv = document.getElementById('root-results')
       resultsDiv.innerHTML = ""
      //Reset the errors
      // document.getElementById('derivative-calculator-errors').innerHTML= '';
      //Write the results in the HTML
      
      for (let el in squareRootsResults){
        let result = squareRootsResults[el]
        console.log(result)
        el = el.charAt(0).toUpperCase() +el.slice(1)
        el = el.replace(/[A-Z]/g, (m,o,s)=>(o > 0 ? ' ' : '') + m)
        let resultObjectToHtml= '<div class=result><h6>'+el+' Method</h6><p>'+result+'</p></div>'
        resultsDiv.innerHTML += resultObjectToHtml
      }
    }
    //Catching potential errors and parsing some of them with Regex in order to have some nice rendering
    catch(err){
        console.log('hmmm there was an error with your input')
        console.log(err)
        // errMessage = parseErrorType(err.toString());
         // document.getElementById('derivative-calculator-errors').innerHTML= errMessage;
        throw err;
    } 
  }
  })


//Thanks to http://youmightnotneedjquery.com/#ready
function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState != 'loading')
        fn();
    });
  }
}