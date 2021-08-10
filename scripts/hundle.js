const { ipcRenderer } = require('electron');
const ipc = ipcRenderer

minimizeButton.addEventListener('click', () => {
  ipc.send('minimizeApp')
});


closeButton.addEventListener('click', () => {
  ipc.send('closeApp')
});

