(function () {
    var url = maths.html;

    // Open a new about:blank window
    var win = window.open();

    // Set the icon for the window
    win.document.head.innerHTML += '<link rel="icon" href="https://www.google.com/s2/favicons?sz=64&domain=https://google.com" type="image/png">';

    // Set the title of the window
    win.document.head.innerHTML += '<title>Google</title>';

    // Create an iframe
    var iframe = win.document.createElement('iframe');
    
    // Set styles for the iframe
    iframe.style = "position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";

    // Check and assign the URL to the iframe
    if (url.includes('https://') || url.includes("http://")) {
        iframe.src = url;
    } else {
        iframe.src = "https://" + url;
    }

    // Append the iframe to the body of the window
    win.document.body.appendChild(iframe);
})();

// Redirect to google
window.location.href = "https://google.com";
