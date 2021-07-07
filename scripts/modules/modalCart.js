import disableScroll from './disableScroll.js';
import enableScroll from './enableScroll.js';

const modalCart = () => {
    const subheaderCart = document.querySelector('.subheader__cart');
    const cartOverlay = document.querySelector('.cart-overlay');

    const cartModalOpen = () => {
        disableScroll();
        cartOverlay.classList.add('cart-overlay-open');
    };
    const cartModalClose = () => {
        enableScroll();
        cartOverlay.classList.remove('cart-overlay-open')
    };

    subheaderCart.addEventListener('click', cartModalOpen);

    cartOverlay.addEventListener('click', event => {
        const target = event.target;

        if (target.matches('.cart__btn-close') || target.classList.contains('cart-overlay')) {
            cartModalClose();
        }
    });
};

export default modalCart;