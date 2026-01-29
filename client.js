
// ==============contact side buttuon ======================== */

function openContact(){
  document.getElementById("contactSidebar").classList.add("active");
}
function closeContact(){
  document.getElementById("contactSidebar").classList.remove("active");
}

  /* ================= PAGE LOAD TRANSITION ================= */
window.addEventListener("load", () => {
  document.getElementById("pageTransition").classList.remove("active");
});
// /* =================Next PAGE BUTTON ================= */

function goNext() {
  const page = document.getElementById("page");
  page.classList.add("scroll-right");

  setTimeout(() => {
    window.location.href = "index.html";
  }, 800);
}

function goBack() {
  const page = document.getElementById("page");
  page.classList.add("scroll-right");

  setTimeout(() => {
    window.location.href = "portfolio.html";
  }, 800);
}


/* ================= CURSOR EFFECT ================= */
const dot = document.getElementById("cursorDot");
const outline = document.getElementById("cursorOutline");

window.addEventListener("mousemove", e => {
  dot.style.left = e.clientX + "px";
  dot.style.top = e.clientY + "px";

  outline.style.left = e.clientX - 15 + "px";
  outline.style.top = e.clientY - 15 + "px";
});

        // Initialize Swiper
        const swiper = new Swiper('.reviewSwiper', {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
        });

        // Add hover effect to pause autoplay
        const swiperContainer = document.querySelector('.reviewSwiper');
        swiperContainer.addEventListener('mouseenter', function() {
            swiper.autoplay.stop();
        });
        swiperContainer.addEventListener('mouseleave', function() {
            swiper.autoplay.start();
        });

