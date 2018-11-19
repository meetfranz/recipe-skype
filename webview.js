import path from 'path';
import { shell, remote } from 'electron';

const { BrowserWindow } = remote;

module.exports = (Franz) => {
  const getMessages = function getMessages() {
    const count = document.querySelectorAll('.counter').length;

    // set Franz badge
    Franz.setBadge(count);
  };

  Franz.loop(getMessages);

  Franz.injectCSS(path.join(__dirname, 'service.css'));

  document.addEventListener('click', (e) => {
    const elem = e.target.closest('a[rel*="noopener"], a.thumbnailHolder');
    if (elem) {
      e.stopImmediatePropagation();
      e.preventDefault();

      let win = new BrowserWindow({
        width: 800,
        height: window.innerHeight,
        minWidth: 600,
      });

      win.loadURL(elem.getAttribute('href'));

      win.on('closed', () => {
        win = null
      })
    }
  }, true);
};
