// function selam(){
//     console.log("merhaba");
// }
// selam();

var selamFonksiyonu = function selam() {
    console.log("merhaba");
}

selamFonksiyonu();


const selamFonksiyonu2 = () => { 
    console.log("merhaba 2"); 
    console.log("bisey"); 
}


selamFonksiyonu2();

const selamFonksiyonu3 = (mesaj) => { 
    console.log(mesaj); 
}


selamFonksiyonu3("Merhaba Dunya");


var topla = (sayi1,sayi2) =>{
    return sayi1 + sayi2
}

let toplam = topla(3,4)

console.log(toplam);
