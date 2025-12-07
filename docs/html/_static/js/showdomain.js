document.addEventListener('DOMContentLoaded', function () {
  try {
    var domain = (window.location && window.location.hostname) || '';
    var isLocal = (domain === 'localhost' || domain === '127.0.0.1' || domain === '0.0.0.0' || /\.localhost$/.test(domain));
    var resolved = domain && !isLocal ? domain : 'example.com';
    var nodes = document.querySelectorAll('.var-host');
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].textContent = resolved;
    }
  } catch (e) {
    // Fail silently; docs still render with fallback text
  }
});
