let box=document.querySelector(".box");
// let moviebox=document.querySelector(".movie-box");
let img=document.querySelector(".img-data");
async function allData(){
    let data=await fetch("https://dummyjson.com/products");
    let jsonData=data.json();
    return jsonData;
}
async function apiData() {
    let apidata=await allData();
    let myData=apidata.products;
    let str=``;
   myData.map((movieInfo)=>{
    str=str+`<div class="movie-box w-60 h-80 bg-green-300 my-2">
                <img src=${movieInfo.images[0]} class="img-data h-full w-full " srcset="">
            </div>`
    
   })
    box.innerHTML=str;
    
    
}
apiData();