let getdata=async(url)=>{
    try{
        const res=await fetch(url);
        const data=await res.json();
        // console.log(res)
        return data;
    }
    catch(err){
        console.log(err);
    }
}

// let container=document.querySelector("#results");
let append =(data,container)=>{
    data.forEach(({urlToImage,title,description})=>{

        let box=document.createElement("div")
        box.setAttribute("id","box")
        // box.addEventListener("click",function(){
        //     show_data(data);
        // });
        let image=document.createElement("img")
        image.src=urlToImage;
        image.setAttribute("id","img");
        let name=document.createElement("h4");
        name.innerText=title;
        let des=document.createElement("p");
        des.innerText=description;

        data={
            urlToImage,
            title,description
        }
        box.onclick=()=>{
            show_data(data)
        }

        box.append(image,name,des);
         container.append(box);
    })
} 

 let show_data=(x)=>
 {
   window.location.href="news.html";
   localStorage.setItem("news",JSON.stringify(x));
 }   



export {getdata,append};