class Personel {
    constructor(ad, soyad) {
        this.ad = ad;
        this.soyad = soyad;
    }
    kaydet() {
        console.log("Personel Kaydedildi :" + " " + this.ad + " " + this.soyad);
    }

}

const personel = new Personel("Yunus Emre", "Yilmaz")

personel.kaydet();
personel.ad = "Yunus"
console.log(personel.ad)