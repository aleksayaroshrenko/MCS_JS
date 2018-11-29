// по нажатию на кнопку с классом .request изменит стиль блока .popup на строку flex
let request = document.querySelector('.request');
let popup = document.querySelector('.popup');
request.addEventListener('click', function(){
popup.style.display = 'flex';
});
//2. По нажатию на элемент с классом closePopup — изменит стиль .popup обратно на ‘none’
let closePopup = document.querySelector('.closePopup');
closePopup.addEventListener('click', function(){
popup.style.display = 'none';
});
//3. По нажатию на элемент .openMenu изменит свойство left у элемента .menu на значение 0
let openMenu = document.querySelector('.openMenu');
let menu = document.querySelector('menu');
openMenu.addEvrntListener('click', function() {
menu.style.left = 0;
});
//4. По нажатию на элемент .closeMenu — изменит свойство left у .menu обратно на строку ‘-50vw’
let closeMenu = document.querySelector('.closeMenu');
closeMenu.addEventListener('click', function() {
menu.style.left = '-50vw';
});
