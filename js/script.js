function copyUPI(){

navigator.clipboard.writeText("7259177001@pthdfc");

alert("UPI ID Copied");

}

function copyAccount(){

navigator.clipboard.writeText("01031140021475");

alert("Account Number Copied");

}

function copyIFSC(){

navigator.clipboard.writeText("HDFC0000103");

alert("IFSC Copied");

}
function shareWhatsApp(){

const url=window.location.href;

const message="Please support Pritam Bhat's cancer treatment. Every contribution helps. "+url;

window.open(

"https://wa.me/?text="+encodeURIComponent(message),

"_blank"

);

}