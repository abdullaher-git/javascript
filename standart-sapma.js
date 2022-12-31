
//Toplam
Array.prototype.Sum=function(){
  return this.reduce((a, b) => a + b, 0);
}
//Ortalama
Array.prototype.Avg=function(){
   return this.Sum()/this.length;
}
//Standart Sapmap
Array.prototype.Std=function(){
    var ort=this.Avg();   
   return Math.sqrt(this.map(a=>Math.pow(a - ort, 2)).Avg());
}
Array.prototype.StdPercent=function(err){    
   return this.Avg()-this.Std()/this.Std()*100;
}
Array.prototype.StdErr=function(err){    
   return this.Std()/Math.pow((1- err), 0.5);
}

var arr = [6, 4, 6, 7, 6, 5, 8, 6, 5, 7]; //verilen dizi
//Standart Sapma Örnek
var std=arr.Std();
//Ortalama Örnek
var avg=arr.Avg();
//Toplam Örnek
var sum=arr.Sum();
