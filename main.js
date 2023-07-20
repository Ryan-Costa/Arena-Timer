const { BrowserWindow, app, ipcMain, Tray } = require('electron');

const ipc = ipcMain

let win = null;

function boot() {
    win = new BrowserWindow({
        width: 600,
        minWidth: 350, 
        height: 250,
        minHeight: 210, 
        transparent: true, 
        frame: false, 
        icon: __dirname+'/assets/cronometro.png',
        webPreferences: {
          nodeIntegration: true,
          contextIsolation: false,
        }
    })
    win.loadURL(`file://${__dirname}/index.html`)
    
    ipc.on('minimizeApp', () =>{
      console.log('Clicked on minimize Button')
      win.minimize();
    })

    ipc.on('closeApp', () =>{
      console.log('Clicked on close Button')
      win.close();
    })
}

app.on('ready', boot)



