let btn  = document.getElementById("btn");

btn.addEventListener('click',function(){
	
	let billAmount = document.getElementById("bill-amount").value;
	let Tippercentage = document.getElementById("tip-percentage").value;
	
	let tipAmount = document.getElementById("tip-amount").value = billAmount / Tippercentage;
	document.getElementById("total-bill").value = parseFloat(billAmount) + parseFloat(tipAmount);
	
})