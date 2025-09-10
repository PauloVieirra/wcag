import { useEffect } from 'react';

export function VLibrasScript() {
  useEffect(() => {
    // Create VLibras elements
    const vLibrasDiv = document.createElement('div');
    vLibrasDiv.setAttribute('vw', '');
    vLibrasDiv.className = 'enabled';
    
    const accessButton = document.createElement('div');
    accessButton.setAttribute('vw-access-button', '');
    accessButton.className = 'active';
    
    const pluginWrapper = document.createElement('div');
    pluginWrapper.setAttribute('vw-plugin-wrapper', '');
    
    const topWrapper = document.createElement('div');
    topWrapper.className = 'vw-plugin-top-wrapper';
    
    pluginWrapper.appendChild(topWrapper);
    vLibrasDiv.appendChild(accessButton);
    vLibrasDiv.appendChild(pluginWrapper);
    
    // Append to the vlibras container in the accessibility bar
    const container = document.getElementById('vlibras-container');
    if (container) {
      container.appendChild(vLibrasDiv);
    }
    
    // Load VLibras script
    const script = document.createElement('script');
    script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
    script.onload = () => {
      const initScript = document.createElement('script');
      initScript.textContent = "new window.VLibras.Widget('https://vlibras.gov.br/app');";
      document.head.appendChild(initScript);
    };
    document.head.appendChild(script);
    
    // Cleanup function
    return () => {
      if (container && vLibrasDiv.parentNode) {
        container.removeChild(vLibrasDiv);
      }
      // Remove scripts would be more complex and might affect other instances
    };
  }, []);
  
  return null; // This component doesn't render anything itself
}