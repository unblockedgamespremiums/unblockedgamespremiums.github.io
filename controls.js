function addCss(){
    const e = document.createElement('style');
    e.innerHTML = `
    button.in-game-button {
        position: absolute;
        z-index: 9999;
        top: 30px;
        left: 0;
        width: 160px;
        height: 70px;
        border-radius: 0 290486px 290486px 0;
        color: #000;
        padding: 0 10px;
        line-height: 43px;
        min-height: 43px;
        border: none;
        will-change: transform;
        animation: bounceY 2s .5s;
        transition: transform .5s cubic-bezier(.55,0,.1,1);
        display: flex;
        align-items: center;
        justify-content: center
    }
    
    button.in-game-button svg {
        pointer-events: none;
        margin-right: .625rem;
        display: inline-block
    }
    
    button.in-game-button img {
        pointer-events: none;
        width: 150px;
		heigt:60px;
    }
    
    button.in-game-button:hover {
        background: #b2ada8;
    }
    
    button.in-game-button[attr-active=true] {
        transform: translateX(0)
    }
	
	
	
	button.in-game-button2 {
        position: absolute;
		top:0px;
		text-align:center;
        z-index: 10000;
        width: 100%;
        height: 100%;
        background: #grey;
		text-size:30px;
        color: #000;
        border-radius:10px;
    }
    
    button.in-game-button2 svg {
        pointer-events: none;
        color: #b5b5b5;
        margin-right: .625rem;
        display: inline-block
    }
    
    button.in-game-button2 img {
        pointer-events: none;
        width: 300px;
		heigt:100px;
    }
    
    button.in-game-button2:active {
        background: #1ec2e5
    }
    
    button.in-game-button2[attr-active=true] {
        transform: translateX(0)
    }
    
    @media(max-height: 350px) and (orientation:landscape) {
        button.in-game-button[attr-active=true] {
            transform:translateX(-75px)
        }
    }
    
    button.in-game-button[attr-snapped=true] svg {
        display: none
    }
    
    button.in-game-button[attr-snapped=true] img {
        transform: translate(-5px)
    }
    
    i.in-game-trash {
        z-index: 1;
        bottom: 0;
        left: 0;
        height: 50px;
        width: 50px;
        line-height: 50px;
        text-align: center;
        color: #fff
    }
    
    i.in-game-trash,i.in-game-trash svg {
        transform: scale(0);
        position: absolute
    }
    
    i.in-game-trash svg {
        z-index: 2;
        left: 20px;
        bottom: 20px;
        fill: #fff;
        will-change: transform;
        transition: transform .1s cubic-bezier(.55,0,.1,1)
    }
    
    i.in-game-trash:before {
        content: " ";
        position: absolute;
        z-index: 1;
        bottom: -100px;
        left: -100px;
        width: 200px;
        height: 200px;
        transform: scale(0);
        border-radius: 100%;
        background-color: transparent;
        will-change: transform,background-color;
        transition: transform .5s cubic-bezier(.55,0,.1,1),background-color .2s cubic-bezier(.55,0,.1,1)
    }
    
    i.in-game-trash[attr-active=true] {
        transform: scale(1)
    }
    
    i.in-game-trash[attr-active=true] svg {
        transition-duration: .8s;
        transform: scale(1)
    }
    
    i.in-game-trash[attr-active=true]:before {
        transform: scale(1);
        background-color: #ed1c24
    }
    
    i.in-game-trash[attr-inrange=true] svg {
        transition-duration: .2s;
        transform: scale(0)
    }
    
    i.in-game-trash[attr-inrange=true]:before {
        transform: scale(1.2);
        background-color: #ed1c24
    }
    .main-nav {
        z-index: 999;
        overflow-y: auto;
        will-change: transform;
        backface-visibility: hidden;
        transform: translateX(105%);
        height: 100%;
        transition: .3s ease-in-out;
        background: #f5f5f5;
        width: 39.5rem;
        position: fixed;
        top: 0;
        right: 0;
        padding:20px;
        color:black;
    }
    .main-nav.open {
        transform: translateX(0);
    }
    #post{
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        color: #3f3424;
    }
    #claimBtn{right:0;border-radius: 290486px 0 0 290486px;left:auto}
    `;  
    document.getElementsByTagName('head')[0].appendChild(e);
}
function addBtnHome() {
 var referrer = document.referrer.toLowerCase();
 if (referrer.indexOf("https://unblockedgamespremiums.github.io/") !== -1) {
   var e = document.createElement('button');
   e.className = 'in-game-button2'; // change class to 'in-game-button2'
   e.id = 'inGame';
} 
 else {
  var e = document.createElement('button');
  e.className = 'in-game-button';
  e.id = 'inGame';
  e.innerHTML = `
    <img src="https://unblockedgamespremiums.github.io/assets/favicon.png" width="50px" height="60px" alt="UnblockedGames.github.io">`;
    document.getElementsByTagName('body')[0].appendChild(e);
}
}


// function loadFirebase(){
//     var  r = document.createElement("script");
// 	r.setAttribute("src", "https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"), r.setAttribute("type", "text/javascript"), r.setAttribute("crossOrigin", "anonymous"),  r.onload = function (){
//         var  database = document.createElement("script");
//         database.setAttribute("src", "https://www.gstatic.com/firebasejs/8.10.0/firebase-database.js"), database.setAttribute("type", "text/javascript"), database.setAttribute("crossOrigin", "anonymous"),  database.onload = function (){
//             var  authsc = document.createElement("script");
//             authsc.setAttribute("src", "https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js"), authsc.setAttribute("type", "text/javascript"), authsc.setAttribute("crossOrigin", "anonymous"),  authsc.onload = function (){    
//                 var firestoresc =  document.createElement("script");
//                 firestoresc.setAttribute("src", "https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js"), firestoresc.setAttribute("type", "text/javascript"), firestoresc.setAttribute("crossOrigin", "anonymous"),  firestoresc.onload = function (){    
//                     var  loginsc = document.createElement("script");
//                     loginsc.setAttribute("src", "/mainsite/login.js"), loginsc.setAttribute("type", "text/javascript"), document.head.appendChild(loginsc);
//                 },document.head.appendChild(firestoresc);
                
//             }, document.head.appendChild(authsc);
//         },document.head.appendChild(database);
//     },document.head.appendChild(r);
// }
// window.addEventListener('load', function() {
//   addCss();
//   addBtnHome();
//   var btn = document.getElementById("inGame");
//   btn.addEventListener("click", returnHome);
// });

var hold = false;
var click = 0;
function returnHome(){
    if(window.hold == true){
        return;
    }
    var newWindow = window.open("https://unblockedgamespremiums.github.io", "");
    newWindow.document.title = "UnblockedGames io";
}
function opendiscord(){
    window.open("https://unblockedgamespremiums.github.io");
}
window.alert = function() {};

// or simply
alert = function() {};

function loadHeader() {
    fetch('../header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            // Add the toggleMenu function to the global scope
            window.toggleMenu = function() {
                const header = document.querySelector('.header');
                header.classList.toggle('nav-active');
            };
            // check active header
            const currentPath = window.location.pathname;
            const navLinks = document.querySelectorAll('nav a');
            // console.log(navLinks);
            navLinks.forEach(link => {
                if (link.getAttribute('href') === currentPath) {
                    link.classList.add('active');
                }
            });
            
        })
        .catch(error => console.error('Error loading header:', error));
}
function loadFooter() {
    fetch('../footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
}

document.addEventListener('DOMContentLoaded', function () {
// Call the function to load the header
    loadHeader();
    loadFooter();
    initializePwaFeatures();
});


// Initialize PWA Features
function initializePwaFeatures() {
    addManifestLink();
    registerServiceWorker();
    setupPwaInstallation();
}

// Dynamically add the manifest link
function addManifestLink() {
    const manifestLink = document.createElement('link');
    manifestLink.rel = 'manifest';
    manifestLink.href = '/manifest.json'; // Ensure manifest.json exists in the root
    document.head.appendChild(manifestLink);
    console.log('Manifest added:', manifestLink.href);
}

// Register the service worker
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
                trackEvent('PWA_service_worker', 'Service Worker', 'Registered', 1);
            })
            .catch(error => {
                console.error('Service Worker registration failed:', error);
                trackEvent('PWA_service_worker', 'Service Worker', 'Failed', 0);
            });
    } else {
        console.warn('Service Worker not supported in this browser.');
        trackEvent('PWA_service_worker', 'Service Worker', 'Not Supported', 0);
    }
}

// Set up PWA installation prompt
function setupPwaInstallation() {
    let deferredPrompt;
    const isPwaInstalled = localStorage.getItem('pwaInstalled');

    if (!isPwaInstalled && !isMobileDevice()) {
        const installDialog = document.createElement('div');
        installDialog.innerHTML =`
            <div id="install-dialog" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(25,25,25,0.8); color: #333; text-align: center; z-index: 1000; display: flex; align-items: center; justify-content: center;backdrop-filter: blur(3px);">
                <div style="padding: 25px; background: #f5f5f5; border-radius: 20px; width: 90%; max-width: 450px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); text-align: center; transition: transform 0.5s ease-in-out;">
                    <h2 style="font-size: 22px; margin-bottom: 15px; color: #2c3e50;">Install UnblockedGames Web App for Better Experience!</h2>
                    <button id="install-button" style="padding: 12px 28px; font-size: 18px; cursor: pointer; background: #de8809; color: white; border: none; border-radius: 30px;">Add to Home Screen</button>
                    <button id="close-button" style="padding: 12px 28px; font-size: 18px; cursor: pointer; background-color: transparent; color: #888; border: none; border-radius: 30px;border:1px solid;">Not Now</button>
                </div>
            </div>
        `;

        document.body.appendChild(installDialog);

        window.addEventListener('beforeinstallprompt', (e) => {
            // console.log("ssaa");
            e.preventDefault();
            deferredPrompt = e;
            document.getElementById('install-dialog').style.display = 'flex';

            console.log('beforeinstallprompt event triggered');
            trackEvent('PWA_prompt', 'PWA', 'Prompt Displayed', 1);
        });

        document.getElementById('install-button').addEventListener('click', () => {
            // console.log("ssaalkkk");
            if (deferredPrompt) {
                deferredPrompt.prompt();
                deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('PWA installation accepted');
                        trackEvent('PWA_installation', 'PWA', 'Accepted', 1);
                        localStorage.setItem('pwaInstalled', 'true');
                    } else {
                        console.log('PWA installation dismissed');
                        trackEvent('PWA_installation', 'PWA', 'Dismissed', 0);
                    }
                    deferredPrompt = null;
                    popup.hide();
                }).catch(error => {
                    console.error('Error during PWA installation:', error);
                });
            }
        });

        document.getElementById('close-button').addEventListener('click', () => {
            document.getElementById('install-dialog').style.display = 'none';
            console.log('PWA popup closed.');
            trackEvent('PWA_prompt', 'PWA', 'Closed', 0);
        });

        window.addEventListener('appinstalled', () => {
            console.log('PWA installed successfully.');
            trackEvent('PWA_installation', 'PWA', 'Successful', 1);
            localStorage.setItem('pwaInstalled', 'true');
            document.getElementById('install-dialog').style.display = 'none';
        });
    } else {
        console.log('PWA is already installed or device is mobile.');
    }
}

// Detect mobile devices
function isMobileDevice() {
    return window.matchMedia("(max-width: 767px)").matches || /Mobi|Android/i.test(navigator.userAgent);
}

// Track events in Google Analytics
function trackEvent(action, category, label, value) {
    if (typeof gtag === 'function') {
        gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value
        });
        console.log(`Event tracked: ${action}, ${category}, ${label}, ${value}`);
    } else {
        console.warn('gtag not initialized. Event not tracked:', action);
    }
}