// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar,sidebar } from "../components/navbar.js";

let n=document.getElementById("navbar");
n.innerHTML=navbar();
let m=document.getElementById("sidebar");
m.innerHTML=sidebar();


import { getdata,append } from "./fetch.js";



let main=async(el)=>{
    if(el.key==="Enter"){
        const input=document.querySelector("#search_input").value;

        let url=`https://masai-mock-api.herokuapp.com/news?q=${input}`
        let container=document.querySelector("#results");
        // console.log(data);
        const data= await getdata(url);
            console.log(data)
            append(data.articles,container);
        }
    }

document.getElementById("search_input").addEventListener("keydown",main);



