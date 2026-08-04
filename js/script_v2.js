console.log("Pritam Fundraiser Version 2 Loaded Successfully");
function copyUPI(){

    const upi=document.getElementById("upiId");

    upi.select();

    upi.setSelectionRange(0,99999);

    navigator.clipboard.writeText(upi.value);

    alert("UPI ID copied successfully!");

}