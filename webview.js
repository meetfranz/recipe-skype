import path from 'path';
import { shell } from 'electron';

module.exports = (Franz) => {
  const getMessages = function getMessages() {
  const count = document.querySelectorAll('swx-unread-message-counter>.counter').length;

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

      window.open(elem.getAttribute('href'));
    }
  }, true);
};
