const accordion = document.getElementsByClassName('contentBx');

        for (i = 0; i<accordion.length; i++) {
            accordion[i].addEventListener('click', function() {
                this.classList.toggle('active')
            })
        }


        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 4,
            centeredSlides: true,
            spaceBetween: 50,
            grabCursor: true,
            scrollbar: {
                el: ".swiper-scrollbar",
              },
          });

        