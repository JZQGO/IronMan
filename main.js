'use strict'
{
  let themeswitch = document.querySelector('.themeswitch');
  let body = document.querySelector('body');
  themeswitch.onclick = function () {
    themeswitch.classList.toggle('active');
    body.classList.toggle('dark');
  }
  let menutoggle = document.querySelector('.menutoggle');
  let navigation = document.querySelector('.navigation');
  menutoggle.onclick = function () {
    menutoggle.classList.toggle('active');
    navigation.classList.toggle('active');
  } 
}