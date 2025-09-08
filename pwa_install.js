// pwa_install.js
let deferredPrompt;

// Session persistence for install dialog
// Check if we've already shown the dialog in this session
const SESSION_STORAGE_KEY = 'lumo_pwa_install_dialog_shown';
let installationShown = (sessionStorage.getItem(SESSION_STORAGE_KEY) === 'true') || false;

function isPwaInstalled() {
  return window.matchMedia('(display-mode: standalone)').matches ||
         window.matchMedia('(display-mode: fullscreen)').matches ||
         (navigator.standalone === true);
}

// Global flag to track if hub is ready
let isHubScreenReady = false;

// Listen for beforeinstallprompt
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault(); // stop Chrome's auto-mini-infobar
  deferredPrompt = e;

  console.log('PWA installation prompt is ready');
  if (window.flutterPwaInstallReady) {
    window.flutterPwaInstallReady(true);
  }

  // Only show dialog if hub screen is ready
  if (isHubScreenReady) {
    showPwaInstallDialog();
  }
});

function hubScreenReady() {
  console.log('Hub screen ready, checking install prompt');
  isHubScreenReady = true;
  
  // Check both our variable and session storage before showing dialog
  const sessionDialogShown = sessionStorage.getItem(SESSION_STORAGE_KEY) === 'true';
  
  if (deferredPrompt && !installationShown && !sessionDialogShown && !isPwaInstalled()) {
    showPwaInstallDialog();
  }
}

// Apply responsive styling based on screen width
function getResponsiveStyles() {
  const isMobile = window.innerWidth < 480;
  
  return {
    dialogPadding: isMobile ? '24px 20px' : '24px 20px',
    dialogMaxWidth: isMobile ? '340px' : '400px',  // Increased width for better appearance
    iconSize: isMobile ? '72px' : '88px',
    titleSize: isMobile ? '22px' : '24px',
    buttonPadding: isMobile ? '10px 20px' : '12px 24px'
  };
}

// Show custom install modal
function showPwaInstallDialog() {
  // Check both variable and session storage to ensure we don't show multiple times
  if (!deferredPrompt || installationShown || isPwaInstalled()) return;
  
  // Mark as shown in both variable and session storage
  installationShown = true;
  sessionStorage.setItem(SESSION_STORAGE_KEY, 'true');
  
  const styles = getResponsiveStyles();

  const modal = document.createElement('div');
  modal.className = 'pwa-install-modal';
  modal.style.cssText = `
    position: fixed; top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(5, 25, 55, 0.65);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    display: flex; justify-content: center; align-items: center;
    z-index: 999999;
    padding: 16px 24px;
    transition: all 0.3s ease-in-out;
    box-sizing: border-box;
  `;
  
  // Add animation
  setTimeout(() => {
    modal.style.opacity = 0;
    modal.style.opacity = 1;
  }, 0);

  const dialog = document.createElement('div');
  dialog.className = 'pwa-install-dialog';
  dialog.style.cssText = `
    background: rgba(255, 255, 255, 0.85);
    padding: ${styles.dialogPadding};
    border-radius: 16px;
    text-align: center;
    max-width: ${styles.dialogMaxWidth};
    width: 100%;
    box-sizing: border-box;
     margin: 0 auto;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25), 
                0 1px 3px rgba(255, 255, 255, 0.3) inset;
    border: 1px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: transform 0.3s ease-in-out;
    transform: scale(0.95);
  `;
  
  // Add animation
  setTimeout(() => {
    dialog.style.transform = 'scale(1)';
  }, 10);

  const icon = document.createElement('img');
  icon.src = 'icons/Icon-192.png';
  icon.style.cssText = `
    width: ${styles.iconSize}; 
    height: ${styles.iconSize}; 
    margin-bottom: 20px;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  `;

  const title = document.createElement('h2');
  title.textContent = 'Install Lumo Hub';
  title.style.cssText = `
    margin: 0 0 12px 0;
    font-size: ${styles.titleSize};
    font-weight: 600;
    color: #0A2463;
  `;

  const message = document.createElement('p');
  message.textContent = 'Install Lumo Hub for quick and easy access during your trips.';
  message.style.cssText = `
    margin: 0 0 24px 0;
    font-size: 16px;
    line-height: 1.5;
     font-family: 'Graphik', sans-serif;
    color: #555;
  `;

  const buttonContainer = document.createElement('div');
  buttonContainer.style.cssText = `
    display: flex; 
    gap: 16px; 
    justify-content: center;
    flex-wrap: wrap;
  `;

  const installBtn = document.createElement('button');
  installBtn.textContent = 'Install App';
  installBtn.style.cssText = `
    padding: ${styles.buttonPadding};
    background: #0175C2;
    color: white;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    font-weight: 600;
    font-family: 'Graphik', sans-serif;
    font-size: 16px;
    transition: all 0.2s ease;
    min-width: 140px;
    box-shadow: 0 4px 12px rgba(1, 117, 194, 0.3);
    flex-grow: 1;
  `;
  
  installBtn.onmouseover = () => {
    installBtn.style.backgroundColor = '#0288D1';
    installBtn.style.transform = 'translateY(-2px)';
  };
  
  installBtn.onmouseout = () => {
    installBtn.style.backgroundColor = '#0175C2';
    installBtn.style.transform = 'translateY(0)';
  };

  const cancelBtn = document.createElement('button');
  cancelBtn.textContent = 'Not Now';
  cancelBtn.style.cssText = `
    padding: ${styles.buttonPadding};
    background: rgba(241, 241, 241, 0.8);
    color: #444;
    border: none;
    font-family: 'Graphik', sans-serif;
    border-radius: 12px;
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;
    transition: all 0.2s ease;
    min-width: 120px;
    flex-grow: 1;
  `;
  
  cancelBtn.onmouseover = () => {
    cancelBtn.style.backgroundColor = '#e0e0e0';
  };
  
  cancelBtn.onmouseout = () => {
    cancelBtn.style.backgroundColor = 'rgba(241, 241, 241, 0.8)';
  };

  // Install button click with animation
  installBtn.addEventListener('click', () => {
    dialog.style.transform = 'scale(1.05)';
    
    setTimeout(() => {
      dialog.style.transform = 'scale(0.95)';
      modal.style.opacity = '0';
      
      setTimeout(() => {
        modal.remove();
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted installation');
            if (window.flutterPwaInstalled) window.flutterPwaInstalled(true);
          } else {
            console.log('User dismissed installation');
            // Even if they dismiss the browser prompt, don't show our dialog again
            installationShown = true;
            sessionStorage.setItem(SESSION_STORAGE_KEY, 'true');
          }
          deferredPrompt = null;
        });
      }, 200);
    }, 100);
  });

  // Cancel button click with animation
  cancelBtn.addEventListener('click', () => {
    dialog.style.transform = 'scale(0.95)';
    modal.style.opacity = '0';
    
    setTimeout(() => {
      modal.remove();
      // Keep installation shown flag true and persist to session storage
      // This prevents the dialog from showing again during this session
      installationShown = true;
      sessionStorage.setItem(SESSION_STORAGE_KEY, 'true');
    }, 300);
  });

  buttonContainer.appendChild(installBtn);
  buttonContainer.appendChild(cancelBtn);
  dialog.appendChild(icon);
  dialog.appendChild(title);
  dialog.appendChild(message);
  dialog.appendChild(buttonContainer);
  modal.appendChild(dialog);
  document.body.appendChild(modal);
}

// Can be called from Flutter to manually trigger install prompt
function showInstallPrompt() {
  // If the user has already dismissed our custom dialog, respect that choice
  // by checking the session storage
  if (sessionStorage.getItem(SESSION_STORAGE_KEY) === 'true') {
    console.log('PWA installation dialog already shown in this session');
    return;
  }
  
  if (deferredPrompt && !isPwaInstalled()) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted installation');
        if (window.flutterPwaInstalled) window.flutterPwaInstalled(true);
      } else {
        console.log('User dismissed installation');
        // Mark as shown in session storage
        installationShown = true;
        sessionStorage.setItem(SESSION_STORAGE_KEY, 'true');
      }
      deferredPrompt = null;
    });
  } else {
    console.log('PWA not installable or already installed');
  }
}

// Function to reset install dialog state (for testing or future use)
function resetPwaInstallDialog() {
  installationShown = false;
  sessionStorage.removeItem(SESSION_STORAGE_KEY);
  console.log('PWA install dialog state has been reset');
}

// Handle window resize for responsive dialog
window.addEventListener('resize', () => {
  const dialogElement = document.querySelector('.pwa-install-dialog');
  if (dialogElement) {
    const styles = getResponsiveStyles();
    dialogElement.style.padding = styles.dialogPadding;
    dialogElement.style.maxWidth = styles.dialogMaxWidth;
  }
});

// Detect when installed
window.addEventListener('appinstalled', () => {
  console.log('PWA was installed');
  installationShown = true;
  if (window.flutterPwaInstalled) {
    window.flutterPwaInstalled(true);
  }
});
