function openCloaked() {
    const win = window.open("about:blank", "_blank");
    if (!win) return false;

    const doc = win.document;

    doc.open();
    doc.write(`<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${TITLE}</title>
<link rel="icon" type="image/png" href="${new URL(ICON, window.location.href).href}">
<style>
html,body{
    margin:0;
    width:100%;
    height:100%;
    overflow:hidden;
}
iframe{
    position:fixed;
    inset:0;
    width:100%;
    height:100%;
    border:none;
}
</style>
</head>
<body>
<iframe src="${new URL(PAGE, window.location.href).href}"></iframe>
</body>
</html>`);
    doc.close();

    // Set again after load (some browsers overwrite it)
    win.onload = () => {
        win.document.title = TITLE;

        let icon = win.document.querySelector("link[rel='icon']");
        if (!icon) {
            icon = win.document.createElement("link");
            icon.rel = "icon";
            win.document.head.appendChild(icon);
        }
        icon.href = new URL(ICON, window.location.href).href;
    };

    return true;
}
