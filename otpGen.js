const res=()=>{
    let length=6;
    let ran=Math.random()*800000;
    let resin=Math.floor(ran)+100000;
    document.getElementById("content").innerHTML=`${resin}`;
};
document.getElementById("clicki").addEventListener("click",res);
window.addEventListener('load',res);