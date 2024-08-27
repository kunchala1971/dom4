function showDisAmount()
{
	let billamountElement=document.getElementById("billamount");
	let discountpercentageElement=document.getElementById("discountpercentage");
	let discountamountElement=document.getElementById("discountamount");
	discountamountElement.value=(parseInt(billamountElement.value)*parseInt(discountpercentageElement.value))/100;
}
function showBillAmount()
{
	let billamountElement=document.getElementById("billamount");
	let discountamountElement=document.getElementById("discountamount");
	let tipamountElement=document.getElementById("tipamount");
	let netbillamountElement=document.getElementById("netbillamount");
	netbillamountElement.value=(parseInt(billamountElement.value)+parseInt(tipamountElement.value))-parseInt(discountamountElement.value);
}
function Clear()
{
	let billamountElement=document.getElementById("billamount");
	let discountpercentageElement=document.getElementById("discountpercentage");
	let discountamountElement=document.getElementById("discountamount");
	let tipamountElement=document.getElementById("tipamount");
	let netbillamountElement=document.getElementById("netbillamount");
	billamountElement.value="";
	discountpercentageElement.value="";
	discountamountElement.value="";
	tipamountElement.value="";
	netbillamountElement.value="";

}