(function () {
  var items = document.getElementsByClassName("menu-item");
  var components = document.getElementsByClassName("tab");
  [].forEach.call(items, function(item) {
      item.addEventListener('click', function () {
          window.scrollTo(0,0);
          for (var i = 0; i < components.length; i++) {
              if (this == items[i]) {
                  components[i].classList.add("show");
                  this.classList.add("active-tab");
              } else {
                items[i].classList.remove("active-tab");
                components[i].classList.remove("show");
              }
          }
      });
  });
})();
