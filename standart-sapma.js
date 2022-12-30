var arr = [6, 4, 6, 7, 6, 5, 8, 6, 5, 7]; //verilen dizi

Array.prototype.Sum=function(){
  return this.reduce((a, b) => a + b, 0);
}
Array.prototype.Avg=function(){
   return this.Sum()/this.length;
}
Array.prototype.Std=function(){
    var ort=this.Avg();   
   return Math.sqrt(this.map(a=>Math.pow(a - ort, 2)).Avg());
}
Array.prototype.StdPercent=function(err){    
   return this.Avg()/this.Std();
}
Array.prototype.StdErr=function(err){    
   return this.Std()/Math.pow((1- err), 0.5);
}
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
