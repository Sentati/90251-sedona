    var search = document.querySelector(".button-calendar");

    var popup = document.querySelector(".invitation-modal");

    var form = popup.querySelector(".invitation-form");

    var entry = form.querySelector(".js-enter");

    var departure = form.querySelector(".js-departure");

    var adult = form.querySelector(".js-adult");

    var child = form.querySelector(".js-child");

    var isStorageSupport = true;
    var storage = "";
  
    try {
    storage = localStorage.getItem("adult");
    } catch (err) {
    isStorageSupport = false;
    }

    search.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.toggle("invitation-modal-close");
      popup.classList.remove("invitation-modal-error");
      entry.focus();
  });

    if (storage) {
      adult.value = storage;
      child.value = storage;
    }

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
      } else {
      if (isStorageSupport) {
        localStorage.setItem("adult", adult.value);
        localStorage.setItem("child", child.value);
      }
    }
  });

