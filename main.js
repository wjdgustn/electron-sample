const { app, BrowserWindow } = require('electron');


function createWindow() {
    let win = new BrowserWindow({
        width: 500,
        height: 500,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile('./page/index.html');
    win.setMenuBarVisibility(false);
}

app.whenReady().then(createWindow);