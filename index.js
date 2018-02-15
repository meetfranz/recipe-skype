module.exports = Franz => class Skype extends Franz {
  events = {
    'new-window': '_linkFix',
  }

  overrideUserAgent() {
    return 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.167 Safari/537.36'
  }

  _linkFix(event) {
    console.log('link redirect', event);
    event.preventDefault();
  }
};
