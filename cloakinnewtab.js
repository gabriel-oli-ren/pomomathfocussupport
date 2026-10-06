(function () {
    var url = "maths.html";

    // Open a new about:blank window
    var win = window.open("about:blank", "_blank");

    // Set the title and favicon
    win.document.head.innerHTML += 
        '<link rel="icon" href="https://www.google.com/s2/favicons?sz=64&domain=google.com" type="image/png">';
    win.document.head.innerHTML += '<title>Google</title>';

    // Create iframe
    var iframe = win.document.createElement("iframe");

    // Fullscreen iframe
    iframe.style.position = "fixed";
    iframe.style.width = "100vw";
    iframe.style.height = "100vh";
    iframe.style.top = "0";
    iframe.style.left = "0";
    iframe.style.right = "0";
    iframe.style.bottom = "0";
    iframe.style.zIndex = "2147483647";
    iframe.style.backgroundColor = "white";
    iframe.style.border = "none";

    // Load maths.html from the same directory
    iframe.src = new URL(url, window.location.href).href;

    // Add iframe
    win.document.body.appendChild(iframe);
})();

// Redirect original tab
window.location.href = "https://google.com";
