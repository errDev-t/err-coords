(() => {
  const Ui = {};

  Ui.Open = function (data) {
    $("#main-container").fadeIn(150);
  };
  function closeCoordsMenu() {
    $.post(`https://${GetParentResourceName()}/close`, JSON.stringify({}));
    $("#main-container").fadeOut(150);
  }

  window.onload = function (e) {
    window.addEventListener("message", function (event) {
      switch (event.data.action) {
        case "open":
          Ui.Open(event.data);
          var vec4 = event.data.vect4;
          var vec3 = event.data.vect3;
          var vec = event.data.coord;
          $("#coordsv4").html(`<p>${vec4}</p>`);
          $("#coordsv3").html(`<p>${vec3}</p>`);
          $("#coords").html(`<p>${vec}</p>`);
          break;
        case "close":
          closeCoordsMenu();
          break;
      }
    });
  };

  document.onkeyup = function (data) {
    if (data.key == "Escape") {
      closeCoordsMenu();
    }
  };
  $(document).on("dblclick", ".header", function (e) {
    event.preventDefault();
    closeCoordsMenu();
  });

  $(document).on("click", "#copy", function (e) {
    event.preventDefault();
    var temp = $("<input>");
    $("body").append(temp);
    temp.val($("#coords").text()).select();
    document.execCommand("copy");
    temp.remove();
    closeCoordsMenu();
  });

  $(document).on("click", "#copyv3", function (e) {
    event.preventDefault();
    var temp = $("<input>");
    $("body").append(temp);
    temp.val($("#coordsv3").text()).select();
    document.execCommand("copy");
    temp.remove();
    closeCoordsMenu();
  });

  $(document).on("click", "#copyv4", function (e) {
    event.preventDefault();
    var temp = $("<input>");
    $("body").append(temp);
    temp.val($("#coordsv4").text()).select();
    document.execCommand("copy");
    temp.remove();
    closeCoordsMenu();
  });
})();
