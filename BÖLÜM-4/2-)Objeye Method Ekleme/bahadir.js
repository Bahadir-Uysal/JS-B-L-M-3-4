
// const dersler=[
//     {isim:"matematik",puan:90},
//     {isim:"matematik",puan:90},
//     {isim:"matematik",puan:90},
// ]



let ogrenci= {
    ad:"Bahadir",
    yas:29,
    email:"uysalbahadir1529@gmail.com",
    sinif:12,
    dersler:[
        {isim:"matematik",puan:90},
        {isim:"fizik",puan:90},
        {isim:"kimya",puan:90},
    ],
    login:function(){
        console.log("öğrenci giriş yapti");
    },                   //iki nokta ve function ifadesi kaldırılarak da aynı sonuç elde edilebilir.""login()"" şeklinde
    logout:function(){
        console.log("öğrenci çikiş yapti");
    },
    printLessons(){
        // console.log(this.dersler);
        // // console.log(this);
        this.dersler.forEach(a =>{
            console.log(a.isim,a.puan);
        })
    }


};

ogrenci.printLessons();
// console.log(this);

// ogrenci.login();
// ogrenci.logout();