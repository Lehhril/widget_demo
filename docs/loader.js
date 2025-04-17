// public/loader.js
(async function () {
    const scriptTag = document.currentScript;
    const widgetId = scriptTag.getAttribute('data-widget-id');
  
    const configRes = await fetch(`https://your-username.github.io/configs/${widgetId}.json`);
    const config = await configRes.json();
  
    const widgetType = config.type;
    const elementId = config.elementId;
  
    const script = document.createElement('script');
    script.src = `https://your-username.github.io/widgets/${widgetType}.umd.js`;
    script.onload = () => {
      window[`render${widgetType.charAt(0).toUpperCase() + widgetType.slice(1)}`](config);
    };
    document.body.appendChild(script);
  })();
  