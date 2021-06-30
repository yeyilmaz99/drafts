// // document.getElementById("bio").innerHTML="Yunus Emre Yilmaz : 2021"

// var intro1 = document.getElementById("intro1");

// var mesaj = document.getElementById("mesaj");

// mesaj.innerHTML = intro1.innerHTML;

// var tumListeler = document.getElementsByTagName("ul");
// var sehirler = tumListeler[0]

// tumElemanlar = sehirler.getElementsByTagName("li");

// for (i = 0; i < tumElemanlar.length; i++) {
//     alert(tumElemanlar[i].innerHTML)
// }

// var classElemanları = document.getElementsByClassName("intro1");

// alert(classElemanları[0].innerHTML);
// alert(classElemanları.length);

// var queryElemanları = document.querySelectorAll("p.intro1");
// alert(queryElemanları.length);

// var isimElemanları = document.getElementsByName("musteriAdi")
// alert(isimElemanları[0].value)

// var salih = document.getElementById("yunus").addEventListener("mouseover",rengiDegistir);

// function rengiDegistir() {
//     document.getElementById("div1").style.color = "red";
//     var isimElemanları = document.getElementsByName("musteriAdi");
//     isimElemanları[0].value = "hacked"
// }

// var node = document.getElementById("agac");
// alert(node.childNodes[0].nodeValue)

// var baslik = document.createElement("h2");
// var node = document.createTextNode("Merhaba JavaScript")
// baslik.appendChild(node)

// var div1 = document.getElementById("div1")
// var p2 = document.getElementById("p2")

// div1.insertBefore(baslik,p2)

// alert("p2 siliniyor")
// div1.removeChild(p2);

// alert("degistiriliyor")
// var p1 = document.getElementById("p1")
// div1.replaceChild(baslik,p1);

// var salih = document.getElementById("yunus").addEventListener("mouseover",elemetleriSil);

// function elemetleriSil() {
//     div1.removeChild(p2);
// var p1 = document.getElementById("p1")
//     div1.removeChild(p1);
// }