"use strict";function ready(e){"loading"!=document.readyState?e():document.addEventListener?document.addEventListener("DOMContentLoaded",e):document.attachEvent("onreadystatechange",function(){"loading"!=document.readyState&&e()})}ready(function(){console.log(rootCalculator(10));var e=document.getElementsByClassName("navbar-toggler")[0],t=document.getElementsByClassName("navbar-nav")[0],n=document.getElementById("navbarNavAltMarkup"),a=!1;e.onclick=function(){(a=!a)?(n.classList.add("show"),t.classList.add("show")):(n.classList.remove("show"),t.classList.remove("show"))};for(var o=document.getElementById("calculate-button"),r=document.getElementById("operators").querySelectorAll("div"),l=0;l<r.length-1;l++)r[l].onclick=function(e){"Del"==this.innerHTML?document.getElementById("main-input").value="":document.getElementById("main-input").value+=this.innerHTML};var c=document.getElementById("main-input");c.addEventListener("input",function(e){c.value=this.value.toLowerCase()}),o.onclick=function(){try{var e=document.getElementById("main-input").value,t=rootCalculator(e),n=document.getElementById("root-results");for(var a in n.innerHTML="",t){var o=t[a];console.log(o);var r="<div class=result><h6>"+(a=(a=a.charAt(0).toUpperCase()+a.slice(1)).replace(/[A-Z]/g,function(e,t,n){return(0<t?" ":"")+e}))+" Method</h6><p>"+o+"</p></div>";n.innerHTML+=r}}catch(e){throw console.log("hmmm there was an error with your input"),console.log(e),e}}});var rootCalculator=function(e){if(e<0)throw"The target can't be a negative number";var t=Math.exp(.5*Math.log(e)),n=babylonianMethod(e,e/2,100);return{exponentialIdentity:t,mathjs:Math.sqrt(e),babylonian:n}};function babylonianMethod(e,t,n){return 0==n?t:babylonianMethod(e,(t+e/t)/2,n-=1)}