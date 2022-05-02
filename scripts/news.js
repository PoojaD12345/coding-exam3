// Ude Import export (MANDATORY)

import { navbar } from "../components/navbar.js";

let n=document.getElementById("navbar");
n.innerHTML=navbar();
// let m=document.getElementById("sidebar");
// m.innerHTML=sidebar();

let x=JSON.parse(localStorage.getItem("news"))


let box=document.createElement("div")
box.setAttribute("id","box")
let image=document.createElement("img")
image.src=x.urlToImage;
image.setAttribute("id","img");
let name=document.createElement("h4");
name.innerText=x.title;
let des=document.createElement("p");
des.innerText=x.description;

box.append(image,name,des);
 document.querySelector("#detailed_news").append(box);
