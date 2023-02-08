var speed = 0;
var prevSpeed = 0;
var currentScale = 1;

function increaseSpeed(){
     if (speed < 180){         //hız değişkeni 180'den küçükse,hız değişkenini 10 artırır ve addClass fonksiyonunu çağırır.
        speed = speed + 10;
    addClass();
    currentScale = currentScale + 1;
    changeActive();
    changeText();
}
}

function decreaseSpeed(){
     if (speed > 0){            //hız değişkeni 0'dan büyükse,hız değişkenini 10 azaltır ve addClass fonksiyonunu çağırır.
        speed = speed - 10;
    addClass();
    changeActive();
    currentScale = currentScale - 1;
    changeText();
    
}
}

function addClass(){ //hız değişkenine dayalı olarak yeni bir sınıf oluşturur ve eski sınıfı kaldırarak bu sınıfı uygular.
    let newClass = "speed-" + speed;
    let prevClass = "speed-" + prevSpeed;
    let el = document.getElementsByClassName("arrow-wrapper")[0];
    if (el.classList.contains(prevClass)){
        el.classList.remove(prevClass);
        el.classList.add(newClass);

    }
    prevSpeed = speed;

}
function changeActive(){
    let tempClass = "speedometer-scale-" + currentScale;
    let el = document.getElementsByClassName(tempClass)[0];
    el.classList.toggle("active");
}

function changeText(){
    let el = document.getElementsByClassName("km")[0];
    el.innerText = speed;

}