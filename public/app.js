"use strict";
var form = document.querySelector('.new-item-form');
//inputs
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, details.value, amount.valueAsNumber);
});
