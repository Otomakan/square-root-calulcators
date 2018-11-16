"use strict";function ready(t){"loading"!=document.readyState?t():document.addEventListener?document.addEventListener("DOMContentLoaded",t):document.attachEvent("onreadystatechange",function(){"loading"!=document.readyState&&t()})}ready(function(){console.log(rootCalculator(10));var t=document.getElementsByClassName("navbar-toggler")[0],e=document.getElementsByClassName("navbar-nav")[0],n=document.getElementById("navbarNavAltMarkup"),a=!1;t.onclick=function(){(a=!a)?(n.classList.add("show"),e.classList.add("show")):(n.classList.remove("show"),e.classList.remove("show"))};for(var o=document.getElementById("calculate-button"),r=document.getElementById("operators").querySelectorAll("div"),l=0;l<r.length-1;l++)r[l].onclick=function(t){"Del"==this.innerHTML?document.getElementById("main-input").value="":document.getElementById("main-input").value+=this.innerHTML};var i=document.getElementById("main-input");i.addEventListener("input",function(t){i.value=this.value.toLowerCase()}),o.onclick=function(){try{var t=document.getElementById("main-input").value,e=rootCalculator(t),n=document.getElementById("root-results");for(var a in n.innerHTML="",e){var o=e[a];console.log(o);var r="<div class=result><h6>"+(a=(a=a.charAt(0).toUpperCase()+a.slice(1)).replace(/[A-Z]/g,function(t,e,n){return(0<e?" ":"")+t}))+" Method</h6><p>"+o+"</p></div>";n.innerHTML+=r}}catch(t){throw console.log("hmmm there was an error with your input"),console.log(t),t}}});var rootCalculator=function(t){if(t<0)throw"The target can't be a negative number";var e=Math.exp(.5*Math.log(t)),n=babylonianMethod(t,t/2,2),a=bakshaliMethod(t,t/2,2);return{exponentialIdentity:e,mathjs:Math.sqrt(t),babylonian:n,baskshali:a}};function babylonianMethod(t,e,n){return 0==n?e:babylonianMethod(t,(e+t/e)/2,n-=1)}function bakshaliMethod(t,e,n){if(0==n)return e;var a=(t-Math.pow(e,2))/(2*e),o=e+a;return console.log(a),n-=1,bakshaliMethod(t,o-Math.pow(a,2)/(2*o),n)}