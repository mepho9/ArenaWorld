const myMusic = document.querySelector("audio")

document.querySelector("body").addEventListener("click", () => {
    // myMusic.play()
})
function costoMensual(){
    document.getElementById("costo1").innerHTML = "$0";
    document.getElementById("costo2").innerHTML = "$9.99";
    var element = document.getElementById("btn-status1");
    element.classList.add("active");
    //demas botones
    var element1 = document.getElementById("btn-status2");
    element1.classList.remove("active");
    var element2 = document.getElementById("btn-status3");
    element2.classList.remove("active");
    var element3 = document.getElementById("btn-status4");
    element3.classList.remove("active");
  }
  
  function costoTrimestral(){
    document.getElementById("costo1").innerHTML = "$0";
    document.getElementById("costo2").innerHTML = "$27.5";
    var element = document.getElementById("btn-status2");
    element.classList.add("active");
    //demas botones
    var element1 = document.getElementById("btn-status1");
    element1.classList.remove("active");
    var element2 = document.getElementById("btn-status3");
    element2.classList.remove("active");
    var element3 = document.getElementById("btn-status4");
    element3.classList.remove("active");
  }
  
  function costoSemestral(){
    document.getElementById("costo1").innerHTML = "$0";
    document.getElementById("costo2").innerHTML = "$49.99";
    var element = document.getElementById("btn-status3");
    element.classList.add("active");
    //demas botones
    var element1 = document.getElementById("btn-status1");
    element1.classList.remove("active");
    var element2 = document.getElementById("btn-status2");
    element2.classList.remove("active");
    var element3 = document.getElementById("btn-status4");
    element3.classList.remove("active");
  }
  
  function costoAnual(){
    document.getElementById("costo1").innerHTML = "$0";
    document.getElementById("costo2").innerHTML = "$89.99";
    var element = document.getElementById("btn-status4");
    element.classList.add("active");
    //demas botones
    var element1 = document.getElementById("btn-status1");
    element1.classList.remove("active");
    var element2 = document.getElementById("btn-status2");
    element2.classList.remove("active");
    var element3 = document.getElementById("btn-status3");
    element3.classList.remove("active");
  }