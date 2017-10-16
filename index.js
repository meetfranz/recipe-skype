module.exports = Franz => class Skype extends Franz {
  events = {
    'new-window': '_linkFix',
  }

  _linkFix(event) {
    console.log('link redirect', event);
    event.preventDefault();
  }
};
