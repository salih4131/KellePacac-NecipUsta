//Kelle paca yapmak icin kac tane hayvan bacagı oldugunu hesaplayan program yapımı.

hayvanlar = ["inek", "inek", "tavuk", "domuz", "inek", "koyun"]
const toplam = 0;
const bacak = 0;

for (index = 0; index < hayvanlar.lenght; index++) {
    if (hayvanlar[index] == "inek") {
        bacak == 4;
    } else if (hayvanlar[index] == "koyun") {
        bacak == 4;
    } else if (hayvanlar[index] == "domuz") { //musluman kasap oldugu icin domuz dikkate alınmadı
        continue;
    } else if (hayvanlar[index] == "tavuk") { //Tavuk dan kelle paca yapılmadıgı icin dikkate alınmadı
        continue;
    }
    toplam = toplam + bacak;
}
console.log("toplam bacak", toplam)