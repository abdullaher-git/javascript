var dizi = [6, 4, 6, 7, 6, 5, 8, 6, 5, 7]; //verilen dizi
var secilen = []; // dizi farklarının karesi

// aritemetik ortalamayı alır
function aritmetik() {
  var toplam = 0;
  for (var i in dizi) {
    toplam += parseInt(dizi[i]);
  }
  return toplam / dizi.length;
}

//dizi elemanları şile aritmetik ortalama arasındaki farkı bulur karesini alır seçilen adlı diziye kaydeder
function farkiBul() {
  var art = aritmetik();
  for (var i = 0; i < dizi.length; i++) {
    secilen.push(Math.pow(dizi[i] - art, 2));
  }
}

farkiBul();

//seçilen üyelerin toplamını bulup dizi sayısının bir eksiğine böler
function toplamiBul() {
  var toplam = 0;
  if (secilen.length > 0) {
    for (var i in secilen) {
      toplam += secilen[i]
    }
  }
  return toplam / (dizi.length - 1);
}
//sonucun karekökü ekrana yazdırlır
//console.log(Math.sqrt(toplamiBul()));
var sh = Math.sqrt(toplamiBul()); //standart sapma
var d = Math.pow((1 - 0, 05), 0.5) //standart hata

console.log(sh / d)
