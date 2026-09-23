/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

TrelloPowerUp.initialize({
  'card-buttons': function (t, options) {
    return [{
      icon: 'https://cdn-icons-png.flaticon.com/512/25/25284.png', // optional icon
      text: 'Open My Link',
      callback: function (t) {
        return t.openUrl('https://your-link.com'); // change to your desired link
      }
    }];
  }
});
