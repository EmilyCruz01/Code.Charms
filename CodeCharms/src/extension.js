const vscode = require("vscode");

function activate(context) {
  let disposable = vscode.commands.registerCommand(
    "code-charms.showPanel",
    () => {
      const panel = vscode.window.createWebviewPanel(
        "codeCharms",
        "Code Charms",
        vscode.ViewColumn.Beside,
        {
          enableScripts: true,
          retainContextWhenHidden: true,
          localResourceRoots: [
            vscode.Uri.joinPath(context.extensionUri, "media"),
          ],
        }
      );

      // Obtener recursos
      const koalaUri = panel.webview.asWebviewUri(
        vscode.Uri.joinPath(context.extensionUri, "media", "koala.png")
      );
      const medusaUri = panel.webview.asWebviewUri(
        vscode.Uri.joinPath(context.extensionUri, "media", "medusa.png")
      );
      const bubbleUri = panel.webview.asWebviewUri(
        vscode.Uri.joinPath(context.extensionUri, "media", "burbujas.png")
      );
      const cloudUri = panel.webview.asWebviewUri(
        vscode.Uri.joinPath(context.extensionUri, "media", "nube.png")
      );
      const fondoAzulUri = panel.webview.asWebviewUri(
        vscode.Uri.joinPath(context.extensionUri, "media", "fondoAzul.png")
      );
      const fondoKoalaUri = panel.webview.asWebviewUri(
        vscode.Uri.joinPath(context.extensionUri, "media", "fondoKoala.jpg")
      );
      const pajaroUri = panel.webview.asWebviewUri(
        vscode.Uri.joinPath(context.extensionUri, "media", "pajaro.png")
      );
      const fondoPajaroUri = panel.webview.asWebviewUri(
        vscode.Uri.joinPath(context.extensionUri, "media", "cieloPajaro.jpg")
      );
      const nubesUri = panel.webview.asWebviewUri(
        vscode.Uri.joinPath(context.extensionUri, "media", "nubes.png")
      );
      const serpienteUri = panel.webview.asWebviewUri(
        vscode.Uri.joinPath(context.extensionUri, "media", "serpiente.png")
      );
      const fondoSerpienteUri = panel.webview.asWebviewUri(
        vscode.Uri.joinPath(context.extensionUri, "media", "fondoSerpiente.jpg")
      );
      const gotaUri = panel.webview.asWebviewUri(
        vscode.Uri.joinPath(context.extensionUri, "media", "gota.jpg")
      );

      panel.webview.html = getWebviewContent(
        koalaUri,
        medusaUri,
        bubbleUri,
        cloudUri,
        fondoAzulUri,
        fondoKoalaUri,
        pajaroUri,
        fondoPajaroUri,
        nubesUri,
        serpienteUri,
        fondoSerpienteUri,
        gotaUri
      );
    }
  );

  context.subscriptions.push(disposable);
}

function getWebviewContent(
  koalaUri,
  medusaUri,
  bubbleUri,
  cloudUri,
  fondoAzulUri,
  fondoKoalaUri,
  pajaroUri,
  fondoPajaroUri,
  nubesUri,
  serpienteUri,
  fondoSerpienteUri
) {
  return `<!DOCTYPE html>  
<html>  
<head>  
    <style>  
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&display=swap');  
        
        body {  
            margin: 0;  
            padding: 0;  
            overflow: hidden;  
            background: transparent !important;  
        }  

        .container {  
            position: fixed;  
            bottom: 20px;  
            right: 20px;  
            width: 300px;  
            height: 300px;  
            border-radius: 15px;  
            overflow: hidden;  
            background: rgba(30,30,30,0.15);  
            backdrop-filter: blur(4px);  
            border: 1px solid rgba(255,255,255,0.15);  
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);  
            animation: slideIn 0.5s cubic-bezier(0.23, 1, 0.32, 1);  
        }  

        .selector {  
            position: absolute;  
            top: 10px;  
            right: 10px;  
            display: flex;  
            gap: 5px;  
            z-index: 9999;  
        }  

        button {  
            background: linear-gradient(145deg, rgba(60,60,60,0.95), rgba(40,40,40,0.95));  
            color: white;  
            border: none;  
            padding: 8px 18px;  
            border-radius: 20px;  
            cursor: pointer;  
            font-family: system-ui;  
            font-weight: 600;  
            font-size: 0.95em;  
            transition: all 0.2s;  
        }  

        button:hover {  
            transform: scale(1.05);  
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);  
        }  

        .animation-container {  
            position: relative;  
            width: 100%;  
            height: 100%;  
            overflow: hidden;  
        }  

        .oceano {  
            position: absolute;  
            width: 100%;  
            height: 100%;  
            background: url('${fondoAzulUri}') center/cover;  
            opacity: 0.8;  
            z-index: 0;  
            filter: hue-rotate(10deg) blur(1px);  
        }  

        .fondo-koala {  
            position: absolute;  
            width: 100%;  
            height: 100%;  
            background: url('${fondoKoalaUri}') center/cover;  
            opacity: 0.9;  
            z-index: 0;  
            filter: brightness(0.8) contrast(1.1);  
        }  

        .fondo-pajaro {  
            position: absolute;  
            width: 100%;  
            height: 100%;  
            background: url('${fondoPajaroUri}') center/cover;  
            opacity: 0.9;  
            z-index: 0;  
            filter: brightness(0.8) contrast(1.1);  
        }  

        .fondo-serpiente {  
            position: absolute;  
            width: 100%;  
            height: 100%;  
            background: url('${fondoSerpienteUri}') center/cover;  
            opacity: 0.7;  
            z-index: 0;  
            filter: brightness(0.6) contrast(1.1);  
        }  

        .jellyfish {  
            position: absolute;  
            animation: float 9s infinite ease-in-out;  
            opacity: 0.85;  
            z-index: 2;  
            filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));  
        }  

        .bubble-img {  
            position: absolute;  
            animation: bubble 7s infinite linear;  
            opacity: 0.6;  
            z-index: 3;  
        }  

        .zzz {  
            position: absolute;  
            color: white;  
            font-family: 'Comic Neue', cursive;  
            font-size: 24px;  
            font-weight: bold;  
            animation: zzz 3s infinite cubic-bezier(0.4, 0, 0.6, 1);  
            opacity: 0;  
            pointer-events: none;  
            filter: drop-shadow(0 0 8px rgba(255,255,255,0.5));  
            z-index: 999;  
            text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);  
        }  

        .cloud {  
            position: absolute;  
            animation: cloudMove 30s infinite linear;  
            opacity: 0.6;  
            width: 80px;  
            z-index: 0;  
        }  

        .koala-container {  
            position: absolute;  
            bottom: 30px;  
            left: 20%;  
            z-index: 2;  
            transform: scale(1.2);  
        }  

        .bird {  
            position: absolute;  
            width: 60px;  
            animation: fly 6s infinite linear;  
            z-index: 2;  
        }  

        .clouds {  
            position: absolute;
            opacity: 0.6;
            width: 80px;
            z-index: 0;
            animation: cloudMove 30s infinite linear;
        }  

         .serpiente {  
            position: absolute;  
            bottom: 0;  
            left: -100%;  
            animation: serpienteMove 40s linear infinite;  
            z-index: 2;  
        }  

        .serpiente-img {  
            width: 100px;  
            height: auto;  
        }  

        .rain-drop {
        position: absolute;
        top: -10px; /* Comienza fuera de la pantalla */
        width: 2px;
        height: 15px;
        background: rgba(255, 255, 255, 0.7);
        opacity: 0.8;
        animation: rain 3s linear infinite;
        }

        @keyframes rain {
            0% {
                top: -10px;
                opacity: 0.8;
            }
            100% {
                top: 100%;
                opacity: 0.2;
            }
        }

         @keyframes serpienteMove {  
            0% {  
                left: -200px;  
                transform: scaleX(1); 
            }  
            50% {  
                left: 100%;  
                transform: scaleX(1); 
            }  
            51% {  
                transform: scaleX(-1); 
            }  
            100% {  
                left: -200px;  
                transform: scaleX(-1); 
            }  
        }  

        @keyframes slideIn {  
            0% { transform: translateY(100%); opacity: 0; }  
            100% { transform: translateY(0); opacity: 1; }  
        }  

        @keyframes float {  
            0%, 100% { transform: translateY(0) rotate(-5deg); }  
            50% { transform: translateY(-25px) rotate(5deg); }  
        }  

        @keyframes bubble {  
            0% { opacity: 0; transform: translateY(0); }  
            30% { opacity: 0.9; }  
            100% { opacity: 0; transform: translateY(-200px); }  
        }  

        @keyframes zzz {  
            0% { opacity: 0; transform: translate(-15px, 0) scale(0.8); }  
            50% { opacity: 0.8; transform: translate(0, -40px) scale(1.2); }  
            100% { opacity: 0; transform: translate(15px, -80px) scale(0.8); }  
        }  

        @keyframes fly {  
            0% { left: -10%; top: 40%; transform: rotate(0deg); }  
            50% { top: 20%; transform: rotate(15deg); }  
            100% { left: 110%; top: 50%; transform: rotate(-15deg); }  
        }

        @keyframes cloudMove {  
            0% { right: -100px; }  
            100% { right: 100%; }  
        }  
    </style>  
</head>  
<body>  
    <div class="container">  
        <div class="selector">  
            <button id="koalaBtn">🐨 Koala</button>  
            <button id="medusaBtn">🎐 Medusa</button>  
            <button id="birdBtn">🐦 Pájaro</button> 
            <button id="serpienteBtn">🐍 Serpiente</button>   
        </div>  
        <div id="animContainer" class="animation-container"></div>  
    </div>  
    <script>  
        (function() {  
            const images = {  
                koala: "${koalaUri}",  
                medusa: "${medusaUri}",  
                bubble: "${bubbleUri}",  
                cloud: "${cloudUri}",  
                fondoAzul: "${fondoAzulUri}",
                fondoKoala: "${fondoKoalaUri}",  
                pajaro: "${pajaroUri}",  
                fondoPajaro: "${fondoPajaroUri}",  
                nubes: "${nubesUri}",
                serpiente: "${serpienteUri}",  
                fondoSerpiente: "${fondoSerpienteUri}"  
            };  

            let animationIntervals = [];  
            let bubbleCount = 0;  
            const maxBubbles = 6;  

            function clearAnimations() {  
                animationIntervals.forEach(clearInterval);  
                animationIntervals = [];  
                document.getElementById('animContainer').innerHTML = '';  
                bubbleCount = 0;  
            }  

            function createZZZ() {  
                const zzz = document.createElement('div');  
                zzz.className = 'zzz';  
                zzz.textContent = 'Zzz';  
                zzz.style.left = Math.random() * 80 + 10 + '%';  
                zzz.style.bottom = '30%';  
                zzz.style.transform = 'translateX(-50%)';  
                setTimeout(() => zzz.remove(), 4000);  
                return zzz;  
            }  

            function createKoalaScene() {  
                const container = document.getElementById('animContainer');
                
                // Fondo del koala
                const fondo = document.createElement('div');
                fondo.className = 'fondo-koala';
                container.appendChild(fondo);

                const koalaContainer = document.createElement('div');  
                koalaContainer.className = 'koala-container';  
                
                const img = document.createElement('img');  
                img.src = images.koala;  
                img.style.width = '260px';  
                koalaContainer.appendChild(img);  
                container.appendChild(koalaContainer);  

                function createCloud() {
                    const cloud = document.createElement('img');  
                    cloud.className = 'cloud';  
                    cloud.src = images.cloud;  
                    cloud.style.top = Math.random() * 60 + 10 + '%';  
                    cloud.style.width = 80 + Math.random() * 60 + 'px';
                    
                    cloud.addEventListener('animationend', () => {
                        cloud.remove();
                    });

                    return cloud;
                }

                animationIntervals.push(  
                    setInterval(() => container.appendChild(createZZZ()), 2500),  
                    setInterval(() => {  
                        const existingClouds = container.getElementsByClassName('cloud').length;
                        if(existingClouds < 3) {
                            container.appendChild(createCloud());  
                        }
                    }, 20000)
                );  
            }  

            function createMedusaScene() {  
                const container = document.getElementById('animContainer');  
                
                // Fondo oceánico  
                const fondo = document.createElement('div');  
                fondo.className = 'oceano';  
                container.appendChild(fondo);  

                // Medusas  
                for(let i = 0; i < 5; i++) {  
                    const jelly = document.createElement('img');  
                    jelly.className = 'jellyfish';  
                    jelly.src = images.medusa;  
                    jelly.style.width = (80 + Math.random() * 60) + 'px';  
                    jelly.style.left = (Math.random() * 90) + '%';  
                    jelly.style.animationDuration = (5 + Math.random() * 6) + 's';  
                    container.appendChild(jelly);  
                }  
            }  

            // Función para crear la escena de los pájaros
            function createBirdScene() {  
                const container = document.getElementById('animContainer');  
                const birdCount = 1;  

                // Fondo del pájaro  
                const fondo = document.createElement('div');  
                fondo.className = 'fondo-pajaro';  
                container.appendChild(fondo);  

                // Crear los pájaros
                for (let i = 0; i < birdCount; i++) {  
                    const bird = document.createElement('img');  
                    bird.className = 'bird';  
                    bird.src = images.pajaro;  
                    bird.style.top = Math.random() * 40 + 30 + '%'; 
                    bird.style.left = Math.random() * 100 + '%'; 
                    bird.style.animationDelay = Math.random() * 2 + 's'; 
                    container.appendChild(bird);

                    // Crear las nubes
                    function createCloud() {
                        const cloud = document.createElement('img');
                        cloud.className = 'clouds'; // Usamos 'clouds' para que tenga la animación de derecha a izquierda
                        cloud.src = images.cloud;
                        cloud.style.top = Math.random() * 60 + 10 + '%'; // Posición aleatoria en el eje Y
                        cloud.style.width = 80 + Math.random() * 60 + 'px'; // Tamaño aleatorio
                        container.appendChild(cloud);

                        cloud.addEventListener('animationend', () => {
                            cloud.remove();
                        });

                        return cloud;
                    }

                    // Limitar el número de nubes a 5
                    animationIntervals.push(setInterval(() => {
                        const existingClouds = container.getElementsByClassName('clouds').length;
                        if (existingClouds < 5) { // Limita el número de nubes en la escena
                            createCloud();
                        }
                    }, 4000));

                    // Mover el pájaro de izquierda a derecha
                    function moveBird() {  
                        bird.style.left = -bird.offsetWidth + 'px';  
                        bird.style.top = Math.random() * 20 + 20 + '%'; 
                        bird.style.transition = 'left 4s linear';  

                        setTimeout(() => {  
                            bird.style.left = '100%';  
                        }, 50);  
                    }

                    moveBird();  
                    animationIntervals.push(setInterval(moveBird, 6000));  
                }  
            }  

            // Función para crear la escena de la serpiente
            function createSerpienteScene() {  
                const container = document.getElementById('animContainer');  

                // Fondo de la serpiente  
                const fondo = document.createElement('div');  
                fondo.className = 'fondo-serpiente';  
                container.appendChild(fondo);  

                const serpiente = document.createElement('img');  
                serpiente.className = 'serpiente';  
                serpiente.src = images.serpiente;  
                serpiente.alt = "Serpiente";  
                serpiente.classList.add("serpiente-img");  
                container.appendChild(serpiente);  

                // Crear lluvia
                const rainContainer = document.createElement('div');
                rainContainer.id = 'rainContainer'; 
                container.appendChild(rainContainer);

                // Función para crear gotas de lluvia
                function createRain() {
                    const rainDrop = document.createElement('div');
                    rainDrop.className = 'rain-drop';
                    rainDrop.style.left = Math.random() * 100 + '%';
                    rainDrop.style.animationDuration = (1 + Math.random() * 2) + 's';
                    rainDrop.style.animationDelay = Math.random() * 3 + 's';
                    rainContainer.appendChild(rainDrop);

                    // Eliminar la gota después de que la animación termine
                    rainDrop.addEventListener('animationend', () => {
                        rainDrop.remove();
                    });
                }

                // Generar gotas de lluvia a intervalos para mantener siempre 300 gotas
                setInterval(() => {
                    const currentRainDrops = rainContainer.getElementsByClassName('rain-drop').length;

                    if (currentRainDrops < 100) { 
                        createRain();
                    }
                }, 300);  
            }



            document.getElementById('serpienteBtn').addEventListener('click', () => {  
                clearAnimations();  
                createSerpienteScene();  
            });  

            document.getElementById('koalaBtn').addEventListener('click', () => {  
                clearAnimations();  
                createKoalaScene();  
            });  

            document.getElementById('medusaBtn').addEventListener('click', () => {  
                clearAnimations();  
                createMedusaScene();  
            });  

            document.getElementById('birdBtn').addEventListener('click', () => {  
                clearAnimations();  
                createBirdScene();  
            });  

            createKoalaScene();  
        })();  
    </script>  
</body>  
</html>

`;
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
