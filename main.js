const { app, BrowserWindow } = require('electron')

app.whenReady().then(() => {

  const myWindow = new BrowserWindow({
    width: 400, 
    height: 250, 
    transparent: true, 
    frame: false, 
    webPreferences: { 
        nodeIntegration: true 
    } 
  });

  myWindow.loadFile('index.html');
})