if (matches = location.pathname.match(new RegExp('^/b/([^\/\?/#]+)'))) {
  App.cable.subscriptions.create({ channel: "BoardChannel", key: matches[1] }, {
    connected: function() {
    },

    disconnected: function() {
    },

    received: function(data) {
      Turbolinks.clearCache();
      Turbolinks.visit(location.pathname, { action: 'replace' });
    }
  })
}
