
// const a = (callBacka) =>{
//     let yas = 40;
//     callBacka(yas);
// };
// a(function(value) {
//     console.log(value);
// })

// let ogrencilerim = ["can","hakan","elif","tuba"];
// ogrencilerim.forEach(function()
// {
//     console.log("Selam");
// })

// ogrencilerim.forEach(function(kisi,index)
// {
//     console.log(kisi,index);
// })

// const ogrenci = (kisi,index) =>
// {
//     console.log(`${kisi} - ${index}`);
// }
// ogrencilerim.forEach(ogrenci);



const ulum = document.querySelector(".main");


let ogrencilerim = ["can","hakan","elif","tuba"];
let html = ``;

ogrencilerim.forEach(ogrenci =>
    {
        html+=`<li>${ogrenci}</li>`
    })
    console.log(html);
    ulum.innerHTML=html;