/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var rand = Math.floor(1000 + Math.random() * 3000);


var para = document.createElement("p");
var node = document.createTextNode("Authenticating...");
para.setAttribute("style", "color:white");

para.setAttribute("style", "text-align:left; font-size:50%; line-height:70%");
para.appendChild(node);
var element = document.getElementById("loadingContent");
element.appendChild(para);

text1();

function text1(){
    var para = document.createElement("p");
    var node = document.createTextNode("Authenticated - Thank you.");
    
    para.setAttribute("style", "text-align:left; font-size:50%; line-height:70%");
    para.appendChild(node);
    var element = document.getElementById("loadingContent");
    element.appendChild(para);
    rand = Math.floor(500 + Math.random() * 2000);
    setTimeout(text2, rand);
}


function text2(){

    var para = document.createElement("p");
    var node = document.createTextNode("Establishing Control......");
    para.setAttribute("style", "text-align:left; font-size:50%; line-height:70%");
    para.appendChild(node);
    var element = document.getElementById("loadingContent");
    element.appendChild(para);
    rand = Math.floor(500 + Math.random() * 2000);
    setTimeout(text3, rand );

}


function text3(){

    var para = document.createElement("p");
    var node = document.createTextNode("Loading assets......");
    para.setAttribute("style", "text-align:left; font-size:50%; line-height:70%");
    para.appendChild(node);
    var element = document.getElementById("loadingContent");
    element.appendChild(para);
    rand = Math.floor(500 + Math.random() * 2000);
    setTimeout(text4, rand );

}

function text4(){

    var para = document.createElement("p");
    var node = document.createTextNode("Enabling anti-DDOS.....");
    para.setAttribute("style", "text-align:left; font-size:50%; line-height:70%");
    para.appendChild(node);
    var element = document.getElementById("loadingContent");
    element.appendChild(para);
    rand = Math.floor(500 + Math.random() * 2000);
    setTimeout(text5, rand );

}

function text5(){

    var para = document.createElement("p");
    var node = document.createTextNode("Fetching plans of world domination......");
    para.setAttribute("style", "text-align:left; font-size:50%; line-height:70%");
    para.appendChild(node);
    var element = document.getElementById("loadingContent");
    element.appendChild(para);
    rand = Math.floor(500 + Math.random() * 2000);
    setTimeout(text6, rand );

}

function text6(){

    var para = document.createElement("p");
    var node = document.createTextNode("Checking access and clearance......");
    para.setAttribute("style", "text-align:left; font-size:50%; line-height:70%");
    para.appendChild(node);
    var element = document.getElementById("loadingContent");
    element.appendChild(para);
    rand = Math.floor(500 + Math.random() * 2000);
    setTimeout(text7, rand );

}

function text7(){

    var para = document.createElement("p");
    var node = document.createTextNode("Activating Minions......");
    para.setAttribute("style", "text-align:left; font-size:50%; line-height:70%");
    para.appendChild(node);
    var element = document.getElementById("loadingContent");
    element.appendChild(para);
    rand = Math.floor(500 + Math.random() * 2000);
    setTimeout(text8, rand );

}

function text8(){

    var para = document.createElement("p");
    var node = document.createTextNode("Done! Opening content...");
    para.setAttribute("style", "text-align:left; font-size:50%; line-height:70%");
    para.appendChild(node);
    var element = document.getElementById("loadingContent");
    element.appendChild(para);
    setTimeout(finishLoading, 400);
    

}
    
function finishLoading(){
    $("#loadingScreen").fadeOut();
}
