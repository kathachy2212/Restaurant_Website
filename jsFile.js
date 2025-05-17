$(document).ready(function() {
    $('#datetime').datepicker({
        format: "yyyy-mm-dd",
        autoclose: true,
        todayHighlight: true
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const videoUrls = [
        "https://www.youtube.com/embed/xPPLbEFbCAo?autoplay=1",
        "https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1",
        "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
    ];

    const btnPlay = document.querySelector(".btn-play");
    const videoModalEl = document.getElementById("videoModal");
    const videoModal = new bootstrap.Modal(videoModalEl);
    const iframe = document.getElementById("video");

    btnPlay.addEventListener("click", function () {
        const randomUrl = videoUrls[Math.floor(Math.random() * videoUrls.length)];
        iframe.src = randomUrl;
    });

    videoModalEl.addEventListener("hidden.bs.modal", function () {
        iframe.src = ""; // stop video when modal closes
    });
});


const backToTopBtn = document.getElementById('backToTop');

  window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  };

  backToTopBtn.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


