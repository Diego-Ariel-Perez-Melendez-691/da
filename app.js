let cantidad=document.querySelector("#cantidad");
let vc=document.querySelector("#vcan")

cantidad.oninput=()=>{vc.innerHTML=cantidad.value;calcular();}

const calcular=()=>{
    var precioC=document.querySelector("#precioC")
    var producto=document.querySelector("#producto").value;
    var precio=document.querySelector("#precio")
    var precioCr=document.querySelector("#credito")
    var uno=document.querySelector("#m40");
    var dos=document.querySelector("#m50");
    var tres=document.querySelector("#m75");
    var vc=document.querySelector("#vcan")
    
    var u=document.querySelector("#uno");
    var d=document.querySelector("#dos");
    var t=document.querySelector("#tres");
    var refrescos=40;
    var papas=50;
    var alitas=40;
    var Total=0;
    var aumento=0;
    var cost=0;
    var costo=0;
    

    var can=parseInt(cantidad.value)
    switch(producto){

        case "PizzaIndividual":costo=100;break;
        case "PizzaGrande":costo=120;break;
        case "PizzaFamiliar":costo=150;break;
        case "PizzaJumbo":costo=180;break;
    }
    
    if (uno.checked){
      
      aumento+=40;

    }
     if(dos.checked){
      
      aumento+=50;

    }
     if(tres.checked){
     
      aumento+=75;
    }


     if(d.checked){
      
      cost=20;

    }
     if(t.checked){
     
      cost=35;
    }
    
    var contado=(costo+cost)*can;
    var cr=contado+aumento;
    var Total=cr;
    

    precioC.innerHTML=`<h3>Precio Contado: $${contado.toFixed(2)} MXN</h3>`
    precioCr.innerHTML=`<h3>Precio Total: $${Total.toFixed(2)} MXN</h3>`
}