    var search = document.querySelector(".button-calendar");

    var popup = document.querySelector(".invitation-modal");

    var form = popup.querySelector(".invitation-form");

    var entry = form.querySelector(".js-enter");

    var departure = form.querySelector(".js-departure");

    var adult = form.querySelector(".js-adult");

    var child = form.querySelector(".js-child");

    search.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.toggle("invitation-modal-close");
      popup.classList.remove("invitation-modal-error");
  });

    window.onload = popup.classList.toggle("invitation-modal-close");


    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("invitation-modal")) {
          popup.classList.add("invitation-modal-close");
          popup.classList.remove("invitation-modal-error");
        }
    }
  });

    form.addEventListener("submit", function (evt) {
    if (!entry.value || !departure.value || !adult.value || !child.value) {
      evt.preventDefault();
      popup.classList.remove("invitation-modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("invitation-modal-error");
    }
  });