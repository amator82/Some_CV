import Swiper, { Navigation } from 'swiper'

function initSliders() {
    if (document.querySelector('.works__slider')) {
        new Swiper('.works__slider', {
            modules: [Navigation],
            observer: true,
            observeParents: true,
            slidesPerView: 3,
            spaceBetween: 56,
            speed: 800,
            navigation: {
                prevEl: '.works__arrow_prev',
                nextEl: '.works__arrow_next'
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.2,
                    spaceBetween: 10,
                    // autoHeight: true
                },
                650: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 56
                }
            },
            on: {}
        })
    }
}

//! Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
    let sliderScrollItems = document.querySelectorAll('.swiper_scroll')
    if (sliderScrollItems.length > 0) {
        for (let index = 0; index < sliderScrollItems.length; index++) {
            const sliderScrollItem = sliderScrollItems[index]
            const sliderScrollBar =
                sliderScrollItem.querySelector('.swiper-scrollbar')
            const sliderScroll = new Swiper(sliderScrollItem, {
                observer: true,
                observeParents: true,
                direction: 'vertical',
                slidesPerView: 'auto',
                freeMode: {
                    enabled: true
                },
                scrollbar: {
                    el: sliderScrollBar,
                    draggable: true,
                    snapOnRelease: false
                },
                mousewheel: {
                    releaseOnEdges: true
                }
            })
            sliderScroll.scrollbar.updateSize()
        }
    }
}

window.addEventListener('load', function (e) {
    initSliders()
    //initSlidersScroll();
})
