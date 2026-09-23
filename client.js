/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

TrelloPowerUp.initialize({
  // Front-of-card badge
  'card-badges': function (t, options) {
    return t.get('card', 'shared', 'dynamicLink')
      .then(function(link) {
        if (link) {
          return [{
            text: 'Open Link',
            icon: 'https://cdn-icons-png.flaticon.com/512/25/25284.png',
            callback: function() {
              window.open(link, '_blank');
            }
          }];
        } else {
          return [{
            text: 'Set Link',
            icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828817.png',
            callback: function() {
              return t.popup({
                title: 'Set Card Link',
                url: './settings.html',
                height: 150
              });
            }
          }];
        }
      });
  },

  // Inside-card button for editing link
  'card-buttons': function (t, options) {
    return [{
      icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828817.png',
      text: 'Edit Link',
      callback: function() {
        return t.popup({
          title: 'Edit Card Link',
          url: './settings.html',
          height: 150
        });
      }
    }];
  }
});
