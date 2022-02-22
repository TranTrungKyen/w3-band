// Begin: Modal buy tickets

const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContent = document.querySelector('.js-modal-content')
// Hiển thị modal mua vé (thêm class open vào sau modal)
function showBuyTickets() {
    modal.classList.add('open')
}
// Hàm ẩn modal mua vé (gỡ bỏ class open của modal)
function hideBuyTickets() {
    modal.classList.remove('open')
}
// Lặp qua từng thẻ button và lắng nghe hành vi click vào nút buy ticket
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}
// Lắng nghe hàng vi click vào nút close của modal
modalClose.addEventListener('click', hideBuyTickets)
// Click vào khoảng ngoài modal cũng ẩn được modal
modal.addEventListener('click', hideBuyTickets)
// Ngừng hành vi nổi bọt
modalContent.addEventListener('click', function (even) {
    even.stopPropagation()
})

// End: Modal buy tickets

// Begin: Responsive mobile menu

var header = document.getElementById('header');
var mobileMenu = document.querySelector('.mobile-menu-btn');

var headerHeight = header.clientHeight;

mobileMenu.onclick = function () {
    var isOpen = header.clientHeight === headerHeight;
    if (isOpen) {
        header.style.height = 'auto';
    }
    else {
        header.style.height = null;
    }
}
// End: Responsive mobile menu

// Begin: Tự động đóng menu mobile
var menuItems = document.querySelectorAll("#nav li a[href*='#']");
console.log(menuItems);
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function (e) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            e.preventDefault();
        }
        else {
            header.style.height = null;
        }
    }
}
// End: Tự động đóng menu mobile