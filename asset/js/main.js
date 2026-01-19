$(document).ready(function () {
  $("#preloader").fadeOut("slow", function () {
    $(this).remove();
  });
  $(".navbar-nav .nav-link").click(function () {
    $(".navbar-nav .nav-link").removeClass("active");
    $(this).addClass("active");
  });

  $(".gallery-filter button").click(function () {
    $(".gallery-filter button").removeClass("active");
    $(this).addClass("active");

    var filterValue = $(this).attr("data-filter");
    $(".filter-item").addClass("is-animated");

    setTimeout(function () {
      if (filterValue == "all") {
        $(".filter-item").show().removeClass("is-animated");
      } else {
        $(".filter-item").hide();
        $("." + filterValue).show();
        setTimeout(function () {
          $("." + filterValue).removeClass("is-animated");
        }, 50);
      }
    }, 400);
  });

  var londonMapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.4734000806!2d-0.2416814763836405!3d51.52855824176122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2smm!4v1715000000000!5m2!1sen!2smm";

  var mapIframe = `<iframe 
            src="${londonMapUrl}" 
            style="border:0; width:100%; height:100%;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>`;

  $("#map-box").append(mapIframe);
});

$(window).scroll(function () {
  var scrollDistance = $(this).scrollTop();

  if (scrollDistance > 50) {
    $(".navbar").addClass("navbar-scrolled shadow-sm");
    $("#backToTop").fadeIn(); 
  } else {
    $(".navbar").removeClass("navbar-scrolled shadow-sm");
    $("#backToTop").fadeOut(); 
  }

  $("section").each(function (i) {
    if ($(this).position().top <= scrollDistance + 100) {
      $(".navbar-nav .nav-link").removeClass("active");
      $(".navbar-nav .nav-link").eq(i).addClass("active");
    }
  });
});

$("#backToTop").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 100);
  return false;
});
