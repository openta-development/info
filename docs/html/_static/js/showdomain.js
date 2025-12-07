document.addEventListener('DOMContentLoaded', function () {
  try {
    var host = window.location.hostname || document.domain || 'example.com';
    var nodes = document.querySelectorAll('.var-host');
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].textContent = host;
    }
  } catch (e) {
    // Fail silently; docs still render with fallback text
  }
});

