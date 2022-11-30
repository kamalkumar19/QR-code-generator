const wrapper=document.getElementById("wrapper");
const qrInput=document.getElementById("input");
const button=document.getElementById("button");
const qrImg=document.getElementById("img");

button.addEventListener("click", ()=> {
   let qrValue = qrInput.value.trim();
   if(qrValue == "") return ; 

   button.innerText = "Generating QR code";

   qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=${qrValue}`;
   qrImg.addEventListener("load",()=> {
   button.innerText = "Generate QR code";
    })

} )