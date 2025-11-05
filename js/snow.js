// // cantidad de copos
// const numFlakes = 40;
// const container = document.querySelector('.snow-container');

// for (let i = 0; i < numFlakes; i++) {
//   const flake = document.createElement('div');
//   flake.classList.add('snowflake');
  
//   // posición inicial aleatoria
//   flake.style.left = Math.random() * 100 + 'vw';
//   flake.style.animationDuration = (5 + Math.random() * 10) + 's'; // velocidad distinta
//   flake.style.opacity = Math.random();
//   // flake.style.fontSize = (10 + Math.random() * 20) + 'px'; // tamaño distinto
//   // tamaño distinto usando width del div
//   flake.style.width = (10 + Math.random() * 200) + 'px';
  
// //   flake.innerHTML = '❄'; // también podrías usar una imagen PNG en vez de un emoji
// //   container.appendChild(flake);
//   const img = document.createElement('img');
//   img.src = 'images/copos.png';
//   img.style.width = '100%'; // se ajusta al tamaño del div
//   img.style.height = 'auto';
//   flake.appendChild(img);

//   container.appendChild(flake);

// }

// cantidad de copos
// cantidad de copos




// const numFlakes = 17;
// const container = document.querySelector('.snow-container');

// for (let i = 0; i < numFlakes; i++) {
//   const flake = document.createElement('div');
//   flake.classList.add('snowflake');
  
//   // tamaño distinto usando width del div
//   const size = 30 + Math.random() * 170; // ancho entre 30px y 200px
//   flake.style.width = size + 'px';
  
//   // posición inicial aleatoria
//   flake.style.left = Math.random() * 100 + 'vw';
  
//   // animación proporcional al tamaño (copos grandes caen más lento)
//   const duration = 5 + Math.random() * 10 + size / 50; 
//   flake.style.animationDuration = duration + 's';
  
//   // retraso inicial aleatorio
//   flake.style.animationDelay = Math.random() * 30 + 's'; // retraso entre 0 y 10s
  
//   // opacidad aleatoria
//   flake.style.opacity = 0.5 + Math.random() * 0.5;
  
//   // imagen del copo
//   const img = document.createElement('img');
//   img.src = 'images/copos.png';
//   img.style.width = '100%';
//   img.style.height = 'auto';
//   flake.appendChild(img);

//   if (Math.random() < 0.5) { // 50% de probabilidad de girar
//     const spinDuration = 5 + Math.random() * 10; // duración de 5 a 15 segundos
//     flake.style.animation += `, spin ${spinDuration}s linear infinite`;
//   }


//   container.appendChild(flake);
// }



// widget by Embed.im (Licenses & Credits: https://app.embed.im/licenses.txt)
var embedimSnow = document.getElementById("embedim--snow");
if(!embedimSnow){
  let embRand2=function(min,max){return Math.floor(Math.random()*(max-min+1))+min},
      embRandColor2=function(){
        var items=["radial-gradient(circle at top left,#dcf2fd,#60b4f2)","#dbf2fd","#d8f8ff","#b8ddfa"];
        return items[Math.floor(Math.random()*items.length)];
      };
  var embCSS=".embedim-snow{position:absolute;width:10px;height:10px;background:white;border-radius:50%;margin-top:-10px}";
  var embHTML="";
  for(i=1;i<200;i++){
    embHTML+='<i class="embedim-snow"></i>';
    var rndX=embRand2(0,1e6)*1e-4,
        rndO=embRand2(-1e5,1e5)*1e-4,
        rndT=(embRand2(3,8)*10).toFixed(2),
        rndS=(embRand2(0,1e4)*1e-4).toFixed(2);
    embCSS+=".embedim-snow:nth-child("+i+"){background:"+embRandColor2()+";opacity:"+(embRand2(1,1e4)*1e-4).toFixed(2)+";transform:translate("+rndX.toFixed(2)+"vw,-10px) scale("+rndS+");animation:fall-"+i+" "+embRand2(10,30)+"s -"+embRand2(0,30)+"s linear infinite}@keyframes fall-"+i+"{"+rndT+"%{transform:translate("+(rndX+rndO).toFixed(2)+"vw,"+rndT+"vh) scale("+rndS+")}to{transform:translate("+(rndX+rndO/2).toFixed(2)+"vw,105vh) scale("+rndS+")}}"
  }
  embedimSnow=document.createElement("div");
  embedimSnow.id="embedim--snow";
  embedimSnow.innerHTML="<style>#embedim--snow{position:fixed;left:0;top:0;bottom:0;width:100vw;height:100vh;overflow:hidden;z-index:9999999;pointer-events:none}"+embCSS+"</style>"+embHTML;
  document.body.appendChild(embedimSnow);
}