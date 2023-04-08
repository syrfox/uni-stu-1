// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


// Active ScrollSmoother Plugin
ScrollSmoother.create({
    smooth: 1.5,
    effects: true,
    smoothTouch: 0.1,
});


// Preloader
$(document).ready(function() {
    $('.preloader').hide();
});


// Go Top
let scroll_top = document.getElementById("scroll_top");

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scroll_top.classList.add('showed');
    } else {
        scroll_top.classList.remove('showed');
    }
};

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// Modal Open/Close
var open_modal = document.getElementById('open_modal');
var open_modal1 = document.getElementById('open_modal1');
var hero_modal = document.querySelector('.hero__modal');
var close_modal = document.querySelector('.modal_close');

open_modal.addEventListener('click', function() {
    hero_modal.classList.add('showed');
});
open_modal1.addEventListener('click', function() {
    hero_modal.classList.add('showed');
});

close_modal.addEventListener('click', function() {
    hero_modal.classList.remove('showed');
});


// Mobile Menu 
var menu_icon = document.querySelector('.menu_icon');
var menu_close = document.querySelector('.menu_close');
var offcanvas_area = document.querySelector('.offcanvas__area');

menu_icon.addEventListener('click', () => {
    offcanvas_area.classList.add('showed');
});
menu_close.addEventListener('click', () => {
    offcanvas_area.classList.remove('showed');
});


// 29. Offcanvas Menu Active
$('.offcanvas__menu').meanmenu({
    meanScreenWidth: "1365",
    meanMenuContainer: '.offcanvas__menu-wrapper',
    meanMenuCloseSize: '30px',
});



// Counter Active
gsap.from(".journey__area .data", {
    textContent: 0, // start value
    duration: 2,
    ease: Power1.easeIn,
    snap: {
        textContent: 1
    }, // increment value
    stagger: false, // break time

    scrollTrigger: {
        trigger: ".journey__inner .video",
        start: "top center-=150",
        end: "bottom bottom",
    }
});

// Element Counter
gsap.from(".element__left .totol span", {
    textContent: 100,
    duration: 2,
    ease: Power1.easeIn,
    snap: {
        textContent: 1
    },

    scrollTrigger: {
        trigger: ".element__inner",
        start: "top bottom+=100"
    }
});

// Demo JS
$('.demo__btn button').on('click', function() {
    var target = $(this).attr('data-value');

    if (target == 'dark') {
        $(".demo__top img").addClass("rotate");
    } else {
        $(".demo__top img").removeClass("rotate");
    }

    $('.demo__btn button').removeClass('active');

    $(this).addClass('active');
    $("#demo_list_" + target).fadeIn('slow').siblings(".demo__list").hide();
    return false;
});



// Animation Added Here 

// 25. Title Animation

let splitTitleLines = gsap.utils.toArray(".title-anim");

splitTitleLines.forEach(splitTextLine => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: splitTextLine,
            start: 'top 90%',
            end: 'bottom 60%',
            scrub: false,
            markers: false,
            toggleActions: 'play none none none'
        }
    });

    const itemSplitted = new SplitText(splitTextLine, {
        type: "words, lines"
    });
    gsap.set(splitTextLine, {
        perspective: 400
    });
    itemSplitted.split({
        type: "lines"
    })
    tl.from(itemSplitted.lines, {
        duration: 1,
        delay: 0.3,
        opacity: 0,
        rotationX: -80,
        force3D: true,
        transformOrigin: "top center -50",
        stagger: 0.1
    });
});



// 27. Text Animation
let splitTextLines = gsap.utils.toArray(".text-anim p");

splitTextLines.forEach(splitTextLine => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: splitTextLine,
            start: 'top 90%',
            duration: 2,
            end: 'bottom 60%',
            scrub: false,
            markers: false,
            toggleActions: 'play none none none'
        }
    });

    const itemSplitted = new SplitText(splitTextLine, {
        type: "lines"
    });
    gsap.set(splitTextLine, {
        perspective: 400
    });
    itemSplitted.split({
        type: "lines"
    })
    tl.from(itemSplitted.lines, {
        duration: 1,
        delay: 0.5,
        opacity: 0,
        rotationX: -80,
        force3D: true,
        transformOrigin: "top center -50",
        stagger: 0.1
    });
});




// Hero Section Animation 

var timeline_preview = gsap.timeline()

timeline_preview.from(".hero_subcontent", {
    x: 25,
    opacity: 0,
    ease: "power2.out",
    duration: 1.5,
    delay: 1,
});

timeline_preview.from("img.main-img", {
    y: 50,
    opacity: 0,
    ease: "power2.out",
    duration: 1.5,
}, "-=1");

timeline_preview.from("img.page-speed", {
    x: 30,
    opacity: 0,
    ease: "power2.out",
    duration: 1,
}, "-=1");

timeline_preview.from("img.typo", {
    x: -30,
    opacity: 0,
    ease: "power2.out",
    duration: 1,
}, "-=1");

timeline_preview.from(".hero__left img", {
    x: -30,
    opacity: 0,
    ease: "power2.out",
    duration: 1,
}, "-=0.5");

timeline_preview.from(".envato", {
    scale: 0.8,
    opacity: 0,
    ease: "power2.out",
    duration: 1,
}, "-=0.8");

timeline_preview.from(".hero__mid .video", {
    scale: 0.8,
    opacity: 0,
    ease: "myBounce-squash",
    duration: 1,
}, "-=0.8");

timeline_preview.from(".arrow", {
    rotate: "360deg",
    opacity: 0,
    ease: "power2.out",
    duration: 1,
}, "-=.5");




// Portfolio Page Animation
// gsap.set(".portfolio__btm", { y: 30, opacity: 0 });
let t1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".portfolio__btm",
        start: "top center",
    }
})
t1.from(".p3", {
    y: 100,
    opacity: 0,
    duration: 1
})
t1.from(".p2", {
    x: 100,
    opacity: 0,
    duration: 1
}, "-=0.5")

t1.from(".p4", {
    x: -100,
    opacity: 0,
    duration: 1
}, "-=1")
t1.from(".p1", {
    x: 100,
    opacity: 0,
    duration: 1
}, "-=0.6")

t1.from(".p5", {
    x: -100,
    opacity: 0,
    duration: 1
}, "-=1")


// Charchater Come Animation 
let char_come = document.querySelectorAll(".animation__char_come")

char_come.forEach((char_come) => {
    let split_char = new SplitText(char_come, {
        type: "chars, words"
    })
    gsap.from(split_char.chars, {
        duration: 1,
        x: 70,
        autoAlpha: 0,
        stagger: 0.05
    });
})


// Charchater Come long Animation 
let char_come_long = document.querySelectorAll(".animation__char_come_long")

char_come_long.forEach((char_come) => {
    let split_char = new SplitText(char_come, {
        type: "chars, words"
    })
    gsap.from(split_char.chars, {
        duration: 1,
        x: 70,
        autoAlpha: 0,
        stagger: 0.15
    });
})


// Service Page hero Animation   
let word_come = document.querySelectorAll(".animation__word_come")
word_come.forEach((word_come) => {
    let split_word_come = new SplitText(word_come, {
        type: "chars words",
        position: "absolute"
    })
    gsap.from(split_word_come.words, {
        duration: 1,
        x: 50,
        autoAlpha: 0,
        stagger: 0.05
    });
})



// Get Device width
let device_width = window.innerWidth;

/////////////////////////////////////////////////////
// 44.  fade_bottom
gsap.set(".feature__item", {
    y: 30,
    opacity: 0
});

if (device_width < 1023) {
    const fadeArray = gsap.utils.toArray(".feature__item")
    fadeArray.forEach((item, i) => {
        let fadeTl = gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: "top center+=200",
            }
        })
        fadeTl.to(item, {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 1.5,
        })
    })
} else {
    gsap.to(".feature__item", {
        scrollTrigger: {
            trigger: ".feature__item",
            start: "top center+=300",
            markers: false
        },
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1,
        stagger: {
            each: 0.2
        }
    })
}


/////////////////////////////////////////////////////
// 44.  fade_bottom
gsap.set(".fade_bottom", {
    y: 30,
    opacity: 0
});

if (device_width < 1023) {
    const fadeArray = gsap.utils.toArray(".fade_bottom")
    fadeArray.forEach((item, i) => {
        let fadeTl = gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: "top center+=200",
            }
        })
        fadeTl.to(item, {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 1.5,
        })
    })
} else {
    gsap.to(".fade_bottom", {
        scrollTrigger: {
            trigger: ".fade_bottom",
            start: "top center+=300",
            markers: false
        },
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1,
        stagger: {
            each: 0.2
        }
    })
}

/////////////////////////////////////////////////////
// 44.  fade_bottom
gsap.set(".fade_bottom1", {
    y: 30,
    opacity: 0
});

if (device_width < 1023) {
    const fadeArray = gsap.utils.toArray(".fade_bottom1")
    fadeArray.forEach((item, i) => {
        let fadeTl = gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: "top center+=200",
            }
        })
        fadeTl.to(item, {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 1.5,
        })
    })
} else {
    gsap.to(".fade_bottom1", {
        scrollTrigger: {
            trigger: ".fade_bottom1",
            start: "top center+=300",
            markers: false
        },
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1,
        stagger: {
            each: 0.2
        }
    })
}



// Plugin Section 
gsap.set(".plugin__sec", {
    x: -50,
    opacity: 0
});
if (device_width < 1023) {
    const plugin__seca = gsap.utils.toArray(".plugin__sec")
    plugin__seca.forEach((item, i) => {
        let fadeTl = gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: "top center+=200",
            }
        })
        fadeTl.to(item, {
            x: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 1.5,
        })
    })
} else {
    gsap.to(".plugin__sec", {
        scrollTrigger: {
            trigger: ".plugin__sec",
            start: "top center+=300",
            markers: false
        },
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1,
        stagger: {
            each: 0.5
        }
    })
}
/////////////////////////////////////////////////////

gsap.set(".demo__item ", {
    y: 50,
    opacity: 0
});

const fadeArray = gsap.utils.toArray(".demo__item ")
fadeArray.forEach((item, i) => {
    let fadeTl = gsap.timeline({
        scrollTrigger: {
            trigger: item,
            start: "top center+=200",
        }
    })
    fadeTl.to(item, {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 2,
        stagger: {
            each: 0.3
        }
    })
})

// Fade Left 
gsap.set(".fade__item_left", {
    x: -50,
    opacity: 0
});

const fadeLeftArray = gsap.utils.toArray(".fade__item_left")
fadeLeftArray.forEach((item, i) => {
    let fadeTl = gsap.timeline({
        scrollTrigger: {
            trigger: item,
            start: "top center+=200",
        }
    })
    fadeTl.to(item, {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 2,
        delay: 0.5,
        stagger: {
            each: 0.3
        }
    })
})

// Fade Right 
gsap.set(".fade__item_right", {
    x: 50,
    opacity: 0
});

const fadeRightArray = gsap.utils.toArray(".fade__item_right")
fadeRightArray.forEach((item, i) => {
    let fadeTl = gsap.timeline({
        scrollTrigger: {
            trigger: item,
            start: "top center+=200",
        }
    })
    fadeTl.to(item, {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 2,
        delay: 0.5,
        stagger: {
            each: 0.3
        }
    })
})

gsap.set(".demo__btn", {
    scale: 2,
    opacity: 0
});
gsap.to(".demo__btn", {
    scale: 1,
    opacity: 1,
    duration: 1,
    ease: "bounce",
    scrollTrigger: {
        trigger: '.demo__btn',
        start: "top center+=100"
    }
})

gsap.set(".innerpage__right img", {
    scale: 1.3,
    opacity: 0
});
gsap.to(".innerpage__right img", {
    scale: 1,
    opacity: 1,
    duration: 1,
    ease: "bounce",
    stagger: {
        each: 0.1
    },
    scrollTrigger: {
        trigger: '.innerpage__right',
        start: "top center"
    }
})



// Slider One
var swiper = new Swiper(".element__slider", {
    loop: true,
    freemode: true,
    spaceBetween: 20,
    allowTouchMove: false,
    speed: 5000,
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
    breakpoints: {
        767: {
            slidesPerView: 3,
        },
        800: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
        1300: {
            slidesPerView: 5,
        },
        1900: {
            slidesPerView: 7,
        },
    },
});


// Slider Two
var swiper = new Swiper(".element__slider_2", {
    loop: true,
    freemode: true,
    spaceBetween: 20,
    allowTouchMove: false,
    speed: 4500,
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
    breakpoints: {
        767: {
            slidesPerView: 3,
        },
        800: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
        1300: {
            slidesPerView: 5,
        },
        1900: {
            slidesPerView: 7,
        },
    },
});