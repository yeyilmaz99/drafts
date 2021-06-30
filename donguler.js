var kullanicilar = [
    {email:"yeyilmaz314@gmail.com",sifre:"12356"},
    {email:"ksvrshn314@gmail.com",sifre:"12356"}
]

var tweetler = [
    {email:"yeyilmaz314@gmail.com",tweet:"naber lan1"},
    {email:"yeyilmaz314@gmail.com",tweet:"naber lan2"},
    {email:"kvsrshn314@gmail.com",tweet:"naber lan3"}
]

var email = prompt("email?")
var sifre = prompt("sifre?")

function kullaniciVarmi(email,sifre){
    for(i=0;i<kullanicilar.length;i++){
        if(kullanicilar[i].email==email && kullanicilar[i].sifre==sifre){
            return true;
        }

    }
    return false;
}
function giris(){
    if(kullaniciVarmi(email,sifre)){
        console.log(tweetler)
        alert("Giris Yapiliyor")
    } else{
        console.log("kullanıcı adı veya şifre hatalı")
        alert("Kullanici adi sifre yanlis!")
    }
}

giris(email,sifre)