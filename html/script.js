(() => {
  const Ui = {};

  Ui.Open = function (data) {
    var eventData = event.data;
    var vec4 = eventData.vect4;
    var vec3 = eventData.vect3;
    var vec = eventData.coord;
    $("#coordsv4").html(`<p>${vec4}</p>`);
    $("#coordsv3").html(`<p>${vec3}</p>`);
    $("#coords").html(`<p>${vec}</p>`);
    $("#main-container").fadeIn(150);
  };

  Ui.Close = function () {
    $.post(`https://${GetParentResourceName()}/close`, JSON.stringify({}));
    $("#main-container").fadeOut(150);
  };

  window.onload = function (e) {
    window.addEventListener("message", function (event) {
      switch (event.data.action) {
        case "open":
          Ui.Open(event.data);
        break;
        case "close":
          Ui.Close();
        break;
      }
    });
  };

  document.onkeyup = function (data) {
    if (data.key == "Escape") {
      Ui.Close();
    }
  };

  $(document).on("dblclick", ".header", function (e) {
    event.preventDefault();
    Ui.Close();
  });

  $(document).on("click", "#copy", function (e) {
    event.preventDefault();
    var temp = $("<input>");
    $("body").append(temp);
    temp.val($("#coords").text()).select();
    document.execCommand("copy");
    temp.remove();
    Ui.Close();
  });

  $(document).on("click", "#copyv3", function (e) {
    event.preventDefault();
    var temp = $("<input>");
    $("body").append(temp);
    temp.val($("#coordsv3").text()).select();
    document.execCommand("copy");
    temp.remove();
    Ui.Close();
  });

  $(document).on("click", "#copyv4", function (e) {
    event.preventDefault();
    var temp = $("<input>");
    $("body").append(temp);
    temp.val($("#coordsv4").text()).select();
    document.execCommand("copy");
    temp.remove();
    Ui.Close();
  });

})();
