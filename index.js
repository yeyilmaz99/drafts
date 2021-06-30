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

function giris(){
    if((email == kullanicilar[0].email && sifre == kullanicilar[0].sifre)|| 
    (email == kullanicilar[1].email && sifre == kullanicilar[1].sifre)) {
        console.log(tweetler)
    } else{
        console.log("kullanıcı adı veya şifre hatalı")
    }
}

giris(email,sifre)