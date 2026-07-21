/**
 * content-loader.js
 *
 * Auto-loads text content from content-config.json into the page.
 * Elements with data-content="path.to.value" get their text replaced.
 * Client only needs to edit content-config.json — no HTML changes.
 *
 * Usage:
 *   <h1 data-content="homepage.hero.headline">Default text (shown until JSON loads)</h1>
 *
 * Special attributes:
 *   data-content-html    — replace innerHTML instead of textContent
 *   data-content-headline — hero headline (auto-split by highlight)
 *   data-content-highlight — highlight portion of headline
 */

(function () {
  'use strict';

  function resolve(obj, path) {
    var parts = path.split('.');
    var cur = obj;
    for (var i = 0; i < parts.length; i++) {
      if (cur == null || typeof cur !== 'object') return undefined;
      cur = cur[parts[i]];
    }
    return cur;
  }

  function applyContent(config) {
    // 1) Simple text replacement
    var els = document.querySelectorAll('[data-content]');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      var path = el.getAttribute('data-content');
      if (!path) continue;
      var val = resolve(config, path);
      if (val != null) {
        var isHtml = el.hasAttribute('data-content-html');
        if (isHtml) {
          el.innerHTML = val;
        } else {
          el.textContent = val;
        }
      }
    }

    // 2) Hero headline with gradient highlight
    // Splits the full headline by the highlight text, wraps highlight in <span class="gradient-text">
    var headlineEl = document.querySelector('[data-content-headline]');
    var highlightEl = document.querySelector('[data-content-highlight]');
    if (headlineEl && highlightEl) {
      var headline = resolve(config, headlineEl.getAttribute('data-content-headline'));
      var highlight = resolve(config, highlightEl.getAttribute('data-content-highlight'));
      if (headline && highlight) {
        var parts = headline.split(highlight);
        headlineEl.innerHTML = parts.join('<span class="gradient-text">' + highlight + '</span>');
        // Remove the separate highlight placeholder element
        if (highlightEl.parentNode) {
          highlightEl.parentNode.removeChild(highlightEl);
        }
      }
    }
  }

  // Fetch JSON from GitHub via jsDelivr CDN (CORS enabled)
  try {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://cdn.jsdelivr.net/gh/client-coder/glm-weebly-theme@master/weebly-theme/content-config.json', true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          try {
            var config = JSON.parse(xhr.responseText);
            applyContent(config);
          } catch (e) {
            console.warn('content-loader: JSON parse error', e);
          }
        } else {
          console.warn('content-loader: could not fetch content-config.json (status ' + xhr.status + ')');
        }
      }
    };
    xhr.send();
  } catch (e) {
    console.warn('content-loader: request failed', e);
  }
})();
