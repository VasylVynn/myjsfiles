
 function numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}


       let estimatedCost = 1000;
       let finalPrice1 = 0;
      let finalPrice2 = 0;
      let finalPrice3 = 0;




  $(document).ready(function() {

  $('.group-1:checked').each(function(){
            $('#calculator-1').append(`<span>${this.value}</span>`);
        });

  $('.group-1').click(function() {
    if ($('.group-1').filter(':checked').length < 1) {
      $('#calculator-1').hide()
      estimatedCost = estimatedCost - finalPrice1;
          $('.estimated-cost-title').text(': $' + numberWithCommas(estimatedCost).toString());

    } else {
           $('#calculator-1').show()
                 estimatedCost += finalPrice1;
                     $('.estimated-cost-title').text(': $' + numberWithCommas(estimatedCost).toString());

    }
  })
  
    $('.group-2').click(function() {
    if ($('.group-2').filter(':checked').length < 1) {
      $('#calculator-2').hide()
            estimatedCost = estimatedCost - finalPrice2;
                $('.estimated-cost-title').text(': $' + numberWithCommas(estimatedCost).toString());


    } else {
           $('#calculator-2').show();
                            estimatedCost += finalPrice2;
                                $('.estimated-cost-title').text(': $' + numberWithCommas(estimatedCost).toString());


    }
  })
  
    $('.group-3').click(function() {
    if ($('.group-3').filter(':checked').length < 1) {
      $('#calculator-3').hide()
            estimatedCost = estimatedCost - finalPrice3;
                $('.estimated-cost-title').text(': $' + numberWithCommas(estimatedCost).toString());


    } else {
           $('#calculator-3').show();
                            estimatedCost += finalPrice3;
                                $('.estimated-cost-title').text(': $' + numberWithCommas(estimatedCost).toString());


    }
  })

  $('.custom-check').click(function() {
    if ($('input:checkbox').filter(':checked').length < 1) {
      return false;
    } else {
      return true;
    }
  })
})



    if($('div#calculator-1').length) {
   const
      range = document.getElementById('range-1'),
      tooltip = document.getElementById('tooltip-1'),
      price = document.getElementById('price-1'),
      
      setValue = () => {
        const
        newValue = Number((range.value - range.min) * 100 / (range.max - range.min)),
        newPosition = 16 - (newValue * 0.32);
        tooltip.style.left = `calc(${newValue}% + (${newPosition}px))`;
        document.documentElement.style.setProperty("--range-progress-1", `calc(${newValue}% + (${newPosition}px))`);
      };
      
    document.addEventListener("DOMContentLoaded", setValue);
    range.addEventListener('input', setValue);
    
    let customers = 0;


		
    const setRange = (value) => {
      if (range.value <= 33333.3333) {
        $("#range-1").attr('step', 666.666667);
        customers = Math.round(value / 666.666667 * 100)

      } else if ((range.value > 33333.3333) && (range.value < 66666.6666)) {
        $("#range-1").attr('step', 740.74074);
                  customers =  Math.round(5000 + (value - 33333.3333) / 740.74074 * 1000)

      } else {
        $("#range-1").attr('step', 6666.66666);
                  customers = Math.round(50000 + (value - 66666.6666) / 6666.66666 * 10000)

      }
    }

    const Calculate = () => {

      let baseValue = 0;
      let userOffset = 1000;
      let pricePerUser = 0.5;


      if ((customers > 5000) && (customers <= 50000)) {
        baseValue = 3000;
        userOffset = 5000;
        pricePerUser = 0.1;


      }else if ((customers > 1000) && (customers <= 5000)) {
        baseValue = 1000;
        userOffset = 1000;
        pricePerUser = 0.5;

      }else if ((customers > 50000) && (customers <= 100000)) {
        baseValue = 7500;
        userOffset = 50000;
        pricePerUser = 0.05;

      } else if (customers <=1000) {
        baseValue = 0;
        userOffset = 0;
        pricePerUser = 0;
      }


      finalPrice1 = Math.round(baseValue + (customers - userOffset) * pricePerUser);

      const numberFormatter = Intl.NumberFormat('en-US');


      tooltip.innerHTML = `<span>${numberWithCommas(customers)} Customers</span>`;
      price.innerHTML = `<span>$${numberWithCommas(finalPrice1)} / month</span>`;

    };

    range.oninput = () => {
      setRange(range.value);
      Calculate();
      estimatedCost = 1000 +  finalPrice1;
    $('.estimated-cost-title').text(': $' + numberWithCommas(estimatedCost).toString());


    }

}
    
        if($('div#calculator-2').length) {
   const
      range = document.getElementById('range-2'),
      tooltip = document.getElementById('tooltip-2'),
      price = document.getElementById('price-2'),
      
      setValue = () => {
        const
        newValue = Number((range.value - range.min) * 100 / (range.max - range.min)),
        newPosition = 16 - (newValue * 0.32);
        tooltip.style.left = `calc(${newValue}% + (${newPosition}px))`;
        document.documentElement.style.setProperty("--range-progress-2", `calc(${newValue}% + (${newPosition}px))`);
      };
      
    document.addEventListener("DOMContentLoaded", setValue);
    range.addEventListener('input', setValue);
    
    let customers = 0;


		
    const setRange = (value) => {
      if (range.value <= 333333.333) {
        $("#range-2").attr('step', 6666.66666);
        customers = Math.round(value / 6666.66666 * 1000)

      } else if ((range.value > 333333.3333) && (range.value < 666666.666)) {
        $("#range-2").attr('step', 7407.4074);
                  customers =  Math.round(50000 + (value - 333333.333) / 7407.4074 * 10000)

      } else {
        $("#range-2").attr('step', 66666.6666);
                  customers = Math.round(500000 + (value - 666666.666) / 66666.6666 * 100000)

      }
    }

    const Calculate = () => {

      let baseValue = 0;
      let userOffset = 10000;
      let pricePerUser = 0.05;


      if ((customers > 50000) && (customers <= 500000)) {
        baseValue = 2000;
        userOffset = 50000;
        pricePerUser = 0.01;


      }else if ((customers > 10000) && (customers <= 50000)) {
        baseValue = 0;
        userOffset = 10000;
        pricePerUser = 0.05;

      }else if ((customers > 500000) && (customers <= 1000000)) {
        baseValue = 6500;
        userOffset = 500000;
        pricePerUser = 0.005;

      } else if (customers <=10000) {
        baseValue = 0;
        userOffset = 0;
        pricePerUser = 0;
      }


      finalPrice2 = Math.round(baseValue + (customers - userOffset) * pricePerUser);

      const numberFormatter = Intl.NumberFormat('en-US');


      tooltip.innerHTML = `<span>${numberWithCommas(customers)} Messages</span>`;
      price.innerHTML = `<span>$${numberWithCommas(finalPrice2)} / month</span>`;

    };

    range.oninput = () => {
      setRange(range.value);
      Calculate();
      estimatedCost = 1000 +  finalPrice1 + finalPrice2;
    $('.estimated-cost-title').text(': $' + numberWithCommas(estimatedCost).toString());

    }

}
    
      if($('div#calculator-3').length) {
   const
      range = document.getElementById('range-3'),
      tooltip = document.getElementById('tooltip-3'),
      price = document.getElementById('price-3'),
      
      setValue = () => {
        const
        newValue = Number((range.value - range.min) * 100 / (range.max - range.min)),
        newPosition = 16 - (newValue * 0.32);
        tooltip.style.left = `calc(${newValue}% + (${newPosition}px))`;
        document.documentElement.style.setProperty("--range-progress-3", `calc(${newValue}% + (${newPosition}px))`);
      };
      
    document.addEventListener("DOMContentLoaded", setValue);
    range.addEventListener('input', setValue);
    
    let customers = 0;


		
    const setRange = (value) => {
      if (range.value <= 333333.333) {
        $("#range-3").attr('step', 6666.66666);
        customers = Math.round(value / 6666.66666 * 1000)

      } else if ((range.value > 333333.3333) && (range.value < 666666.666)) {
        $("#range-3").attr('step', 7407.4074);
                  customers =  Math.round(50000 + (value - 333333.333) / 7407.4074 * 10000)

      } else {
        $("#range-3").attr('step', 66666.6666);
                  customers = Math.round(500000 + (value - 666666.666) / 66666.6666 * 100000)

      }
    }

    const Calculate = () => {

      let baseValue = 0;
      let userOffset = 10000;
      let pricePerUser = 0.04;


      if ((customers > 50000) && (customers <= 500000)) {
        baseValue = 1600;
        userOffset = 50000;
        pricePerUser = 0.008;


      }else if ((customers > 10000) && (customers <= 50000)) {
        baseValue = 0;
        userOffset = 10000;
        pricePerUser = 0.04;

      }else if ((customers > 500000) && (customers <= 1000000)) {
        baseValue = 5200;
        userOffset = 500000;
        pricePerUser = 0.004;

      } else if (customers <=10000) {
        baseValue = 0;
        userOffset = 0;
        pricePerUser = 0;
      }


      finalPrice3 = Math.round(baseValue + (customers - userOffset) * pricePerUser);

      const numberFormatter = Intl.NumberFormat('en-US');


      tooltip.innerHTML = `<span>${numberWithCommas(customers)} Messages</span>`;
      price.innerHTML = `<span>$${numberWithCommas(finalPrice3)} / month</span>`;

    };

    range.oninput = () => {
      setRange(range.value);
      Calculate();
      estimatedCost = 1000 +  finalPrice1 + finalPrice2 + finalPrice3;
    $('.estimated-cost-title').text(': $' + numberWithCommas(estimatedCost).toString());

    }

}
