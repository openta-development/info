document.addEventListener('DOMContentLoaded', function () {
  function get(key, def) {
    try { return window.localStorage.getItem(key) || def; } catch (e) { return def; }
  }
  function set(key, val) {
    try { window.localStorage.setItem(key, val); } catch (e) {}
  }
  function applyVars() {
    var host = get('openta.remoteHost', 'remote-host');
    var user = get('openta.remoteUser', 'remote-user');
    var hostNodes = document.querySelectorAll('.var-host, .var-remote-host');
    for (var i = 0; i < hostNodes.length; i++) hostNodes[i].textContent = host;
    var userNodes = document.querySelectorAll('.var-remote-user');
    for (var j = 0; j < userNodes.length; j++) userNodes[j].textContent = user;
  }
  try {
    // Initialize inputs in sidebar if present
    var hostInput = document.getElementById('openta-remote-host');
    var userInput = document.getElementById('openta-remote-user');
    if (hostInput) {
      hostInput.value = get('openta.remoteHost', 'remote-host');
      hostInput.addEventListener('input', function (e) {
        set('openta.remoteHost', e.target.value || 'remote-host');
        applyVars();
      });
    }
    if (userInput) {
      userInput.value = get('openta.remoteUser', 'remote-user');
      userInput.addEventListener('input', function (e) {
        set('openta.remoteUser', e.target.value || 'remote-user');
        applyVars();
      });
    }
    // Apply values to placeholders
    applyVars();
  } catch (e) {
    // Fail silently; docs still render with fallback text
  }
});
