(function() {
  var sections = document.querySelectorAll('.featureFocus[data-features-video]');
  if (!sections.length) return;

  sections.forEach(function(section) {
    var player = section.querySelector('.featureFocusPlayer');
    if (!player) return;
    var source = player.querySelector('source');
    var items = Array.prototype.slice.call(section.querySelectorAll('.featureFocusItem'));
    if (!items.length) return;

    var userInteracted = false;
    var hasAutoPlayedInitial = false;

    function setActive(index, fromUser) {
      items.forEach(function(item, i) {
        var isActive = i === index;
        item.classList.toggle('isActive', isActive);
        item.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });

      var item = items[index];
      if (!item) return;
      var nextSrc = item.getAttribute('data-video');
      var title = item.getAttribute('data-title') || 'Feature preview';

      player.setAttribute('aria-label', title);

      if (nextSrc && source.getAttribute('src') !== nextSrc) {
        source.setAttribute('src', nextSrc);
        player.load();
        player.currentTime = 0;
        if (fromUser) {
          var playPromise = player.play();
          if (playPromise && typeof playPromise.catch === 'function') {
            playPromise.catch(function() {});
          }
        }
      }
    }

    items.forEach(function(item, index) {
      item.addEventListener('click', function() {
        userInteracted = true;
        setActive(index, true);
      });
      item.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          item.click();
        }
      });
    });

    setActive(0, false);
    if (!hasAutoPlayedInitial) {
      var playPromise = player.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(function() {});
      }
      hasAutoPlayedInitial = true;
    }
  });
})();
