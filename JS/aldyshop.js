const overlay = document.querySelector('#overlay')
const CategoryListElem = document.querySelector('.header-nav__category-list')
const modalCategories = document.querySelector('.header-nav-categories-wrapper')
const submenuCategoryItems = document.querySelectorAll('.header-nav-categories__item')
const headerShoppingCartElem = document.querySelector('.header__cart-shopping')
const navMobileShoppingCart = document.querySelector('#nav-mobile-shopping-cart')
const modalCartCloseBtn = document.querySelector('#modal-shopping-cart-close-btn')
const modalshoppingCart = document.querySelector('#modal-cart')
const headerLoginElem = document.querySelector('.header__login')
const navMobileLogin = document.querySelector('#nav-mobile-login')
const loginPageCloseBtn = document.querySelector('#login-page-close-btn')
const modalLoginPage = document.querySelector('#modal-login-page')
const modalLoginPageInput = document.querySelector('.modal-login-page__input-wrapper')
const modalNavMobileLogin = document.querySelector('.modal-nav-mobile-login')
const modalNavMobileCategoriesSubmenuItems = document.querySelectorAll('.modal-nav-mobile-categories-submenu-list__item')
const modalCategoriesSubmenuDropdown = document.querySelector('.modal-categories-submenu-list-dropdown')
const modalNavMobileCategoriesItems = document.querySelectorAll('.modal-nav-mobile-categories__item')
const navMobileCategories = document.querySelector('#nav-mobile-categories')
const modalNavMobileCategoriesWrapper = document.querySelector('.modal-nav-mobile-categories-wrapper')
const routingBtn = document.querySelector('#routing-btn')
const routingSubmenu = document.querySelector('#routing-submenu')

CategoryListElem.addEventListener('mouseenter', () => {
    modalCategories.classList.add('header-nav-categories-wrapper--show')
})
CategoryListElem.addEventListener('mouseleave', () => {
    setTimeout(function () {
        modalCategories.classList.remove('header-nav-categories-wrapper--show')
    }, 200)

})
submenuCategoryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        document.querySelector('.active').classList.remove('active');
        let submenuCategoryID = item.getAttribute('data-id');
        let submenuCategoryContent = document.querySelector(submenuCategoryID);
        console.log(submenuCategoryContent);

        submenuCategoryContent.classList.add('active')
    })
})
// Handle Shopping Cart Modal
function openShoppingCartModal() {
    modalshoppingCart.classList.add('modal-shopping-cart--show')
    overlay.classList.remove('hidden')
}
function closeShoppingCartModal() {
    modalshoppingCart.classList.remove('modal-shopping-cart--show')
    overlay.classList.add('hidden')
}
headerShoppingCartElem.addEventListener('click', openShoppingCartModal)
navMobileShoppingCart.addEventListener('click', openShoppingCartModal)
modalCartCloseBtn.addEventListener('click', closeShoppingCartModal)
overlay.addEventListener('click', closeShoppingCartModal)


// Handle Login Page Modal
function openLoginPage() {
    modalLoginPage.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
function closeLoginPage() {
    modalLoginPage.classList.add('hidden')
    overlay.classList.add('hidden')
}
headerLoginElem.addEventListener('click', openLoginPage)
overlay.addEventListener('click', closeLoginPage)
loginPageCloseBtn.addEventListener('click', closeLoginPage)
navMobileLogin.addEventListener('click', function () {
    modalNavMobileLogin.classList.toggle('modal-nav-mobile-login--active')
})

// Create an outline when clicking on an input
modalLoginPageInput.addEventListener('click', function () {
    this.style.border = "2px solid #03a9f4";
})

// Handle Modal nav Mobile Categories
navMobileCategories.addEventListener('click', () => {
    modalNavMobileCategoriesWrapper.classList.add('modal-nav-mobile-categories-wrapper--show')
    overlay.classList.remove('hidden')
})
overlay.addEventListener('click', () => {
    modalNavMobileCategoriesWrapper.classList.remove('modal-nav-mobile-categories-wrapper--show')
    overlay.classList.add('hidden')
})

modalNavMobileCategoriesItems.forEach(item => {
    item.addEventListener('click', () => {

        modalNavMobileCategoriesItems.forEach(i => i.classList.remove('white-color'));
        item.classList.add('white-color')
        document.querySelector('.active').classList.remove('active');
        let submenuCategoryID = item.getAttribute('data-id');
        let submenuCategoryContent = document.querySelector(submenuCategoryID);
        console.log(submenuCategoryContent);

        submenuCategoryContent.classList.add('active')
    })
})
// راه حل اول
// modalNavMobileCategoriesSubmenuItems.forEach(item => {
//     item.addEventListener('click', () => {

//     const dropdown=item.querySelector('.modal-categories-submenu-list-dropdown')

//     document.querySelectorAll('.modal-categories-submenu-list-dropdown').forEach(el=>{
//         if(el !==dropdown){
//             el.classList.remove('modal-categories-submenu-list-dropdown--active')
//         }
//     })
//     dropdown.classList.toggle('modal-categories-submenu-list-dropdown--active')
//     })
// })
// راه حل دوم
modalNavMobileCategoriesSubmenuItems.forEach(item => {
    item.addEventListener('click', () => {
        item.querySelector('.modal-nav-mobile-categories-submenu-list__icon').classList.toggle('modal-nav-mobile-categories-submenu-list__icon--active')
        const dropdown = item.querySelector('.modal-categories-submenu-list-dropdown')
        if (dropdown.style.maxHeight) {
            dropdown.style.maxHeight = null;
        } else {
            dropdown.style.maxHeight = dropdown.scrollHeight + "px"
        }
    })
})

//   <!-- Initialize main Slider -->
new Swiper(".main-slider-container", {
    cssMode: true,
    loop: true,
    speed: 800,
    navigation: {
        nextEl: ".main-slider-button-next",
        prevEl: ".main-slider-button-prev",
    },
    pagination: {
        el: ".main-slider-pagination",
    },
    mousewheel: true,
    keyboard: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },
});
// Initialize Product Slider
new Swiper(".product-slider-container", {
    slidesPerView: 10,
    spaceBetween: 24,
    loop: true,
    navigation: {
        nextEl: ".product-slider-button-next",
        prevEl: ".product-slider-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        430: {
            slidesPerView: 2
        },
        576: {
            slidesPerView: 4
        },
        768: {
            slidesPerView: 5
        },
        992: {
            slidesPerView: 10
        }
    }
});
// Initialize Mobile Slider
new Swiper(".mobile-slider-container", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".mobile-slider-button-next",
        prevEl: ".mobile-slider-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        430: {
            slidesPerView: 2
        },
        576: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        992: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 4
        }
    }
});
// Initialize Brand Slider
new Swiper(".brand-slider-container", {
    slidesPerView: 10,
    spaceBetween: 24,
    loop: true,
    navigation: {
        nextEl: ".brand-slider-button-next",
        prevEl: ".brand-slider-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        430: {
            slidesPerView: 2
        },
        576: {
            slidesPerView: 4
        },
        768: {
            slidesPerView: 5
        },
        992: {
            slidesPerView: 10
        }
    }
});
// Initialize Home Appliances Slider
new Swiper(".home-appliances-slider-container", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".home-appliances-slider-button-next",
        prevEl: ".home-appliances-slider-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        430: {
            slidesPerView: 2
        },
        576: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        992: {
            slidesPerView: 4
        }
    }
});

// click event Routing Btn
routingBtn.addEventListener('click', () => {
    routingSubmenu.classList.toggle('footer-body-item-submenu--show')
})
// اجرای فیکس کردن هدر در بالای صفحه
// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header');

    // Get the initial offset position of the header
    let headerOffsetTop = header.offsetTop;
    let headerHeight = header.offsetHeight;

    // Create a placeholder element to prevent content jump
    const placeholder = document.createElement('div');
    placeholder.className = 'header-placeholder';
    header.parentNode.insertBefore(placeholder, header.nextSibling);

    // Function to handle scroll event
    function handleScroll() {
        // Check if we've scrolled past the header
        if (window.pageYOffset > headerOffsetTop) {
            if (!header.classList.contains('sticky')) {
                header.classList.add('sticky');
                // Set placeholder height to match header height
                placeholder.style.height = headerHeight + 'px';
                placeholder.style.display = 'block';
            }
        } else {
            if (header.classList.contains('sticky')) {
                header.classList.remove('sticky');
                placeholder.style.display = 'none';
            }
        }
    }

    // Recalculate header position on window resize
    let resizeTimer;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            headerOffsetTop = header.offsetTop;
            headerHeight = header.offsetHeight;

            if (header.classList.contains('sticky')) {
                placeholder.style.height = headerHeight + 'px';
            }
        }, 100);
    });

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial check in case page is already scrolled
    handleScroll();
});