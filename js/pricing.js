  const paymentSwitch = document.getElementById("payment-switch");
  const monthlyHeader = document.querySelector(".switcher h3:first-of-type");
  const yearlyHeader = document.querySelector(".switcher h3:last-of-type");
  const basic = document.getElementById('basic-price');
  const pro=document.getElementById('pro-price');
  const business=document.getElementById('business-price');
  const monthToYear = document.getElementById('monthly');
  const proYear = document.getElementById('pro-monthly');
  const businessYear=document.getElementById('business-monthly');
  
  paymentSwitch.addEventListener("change", () => {
    if (paymentSwitch.checked) {
      monthlyHeader.style.color = "#0009";
      yearlyHeader.style.color = "#000000";
    } else {
      monthlyHeader.style.color = "#000000";
      yearlyHeader.style.color = "#0009";
    }
  });

  paymentSwitch.addEventListener('change',function() {
    if(this.checked){
      basic.innerHTML = "$" + (19 * 10).toFixed(2);
      pro.innerHTML = "$" + (39 * 10).toFixed(2);
      business.innerHTML ="$" + (99 * 10).toFixed(2);
      monthToYear.innerHTML="per year"
      proYear.innerHTML="per year"
      businessYear.innerHTML="per year"
    } else {
      basic.innerHTML = "$19.00";
      pro.innerHTML = "$39.00";
      business.innerHTML= "$99.00"
      monthToYear.innerHTML="per month"
      proYear.innerHTML="per month"
      businessYear.innerHTML="per month"
    }
  });