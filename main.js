const { BrowserWindow, app, ipcMain, Tray } = require('electron');
// const url = require('url');
// const path = require('path')
const ipc = ipcMain

let win = null;

function boot() {
    const appIcon = new Tray(__dirname+'/assets/cronometro.png')
    win = new BrowserWindow({
        width: 400, 
        height: 250, 
        transparent: true, 
        frame: false, 
        icon: __dirname+'/assets/cronometro.png',
        webPreferences: {
          nodeIntegration: true,
          contextIsolation: false,
        }
    })
    win.loadURL(`file://${__dirname}/index.html`)
    // win.openDevTools();
    
    // MINIMIZE APP 
    ipc.on('minimizeApp', () =>{
      console.log('Clicked on minimize Button')
      win.minimize();
    })

    // CLOSE APP
    ipc.on('closeApp', () =>{
      console.log('Clicked on close Button')
      win.close();
    })
}

app.on('ready', boot)



