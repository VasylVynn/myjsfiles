var element = document.getElementById('sinitic-webchat-wrapper');
element.addEventListener('DOMSubtreeModified', function() {
	element = document.getElementById('sinitic-webchat-wrapper');
	var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
	var observer = new MutationObserver(function() {
		// do something
		console.log("check7 value changed to " + element.innerHTML);
	});
	observer.observe(element, {
		childList: true,
	});
});


function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

let estimatedCost = 1000;
let finalPrice1 = 0;
let finalPrice2 = 0;
let finalPrice3 = 0;

$(document).ready(function () {
  const AddSelectedChannels = (group, selectedcontainer) => {
    var selected = $(`.${group}:checked`)
      .map(function () {
        return $(this).attr("name");
      })
      .get()
      .join(", ");
    $(`#${selectedcontainer}`).html(selected);
  };

  const ShowCalcPrice = () => {
    if ($(".calculator:visible").length <= 1) {
      $(".price").css({ visibility: "hidden" });
    } else {
      $(".price").css({ visibility: "visible" });
    }
  };

  const GroupHandle = (groupNumber) => {
    if (
      $(`.group-${groupNumber}`).filter(":checked").length < 1 &&
      $(".custom-check:checked").length < 1
    ) {
      return;
    } else if ($(`.group-${groupNumber}`).filter(":checked").length < 1) {
      $(`#range-${groupNumber}`).val(0).trigger("input");
      $(`#calculator-${groupNumber}`).hide();
      $(".estimated-cost-title").text(
        "$" + numberWithCommas(estimatedCost).toString()
      );
      ShowCalcPrice();
    } else {
      AddSelectedChannels(
        `group-${groupNumber}`,
        `selected-checkmarks-${groupNumber}`
      );
      $(`#calculator-${groupNumber}`).css("display", "flex");
      $(".estimated-cost-title").text(
        "$" + numberWithCommas(estimatedCost).toString()
      );
      ShowCalcPrice();
    }
  };

  $(".group-1").on("click", function () {
    GroupHandle("1");
  });

  $(".group-2").click(function () {
    GroupHandle("2");
  });

  $(".group-3").click(function () {
    GroupHandle("3");
  });

  $(".custom-check").on("click", function (e) {
    if ($(".custom-check:checked").length == 0 && !this.checked) {
      this.checked = true;
      return false;
    } else {
      return true;
    }
  });
});

const barActive = (calcNumber, calcRange) => {
  if (calcRange.value > (calcNumber === "1" ? 33333.3333 : 333333.333)) {
    $(`.bar-1.bar-calc-${calcNumber}`).css({
      "border-right": "2px solid white",
    });
  } else {
    $(`.bar-1.bar-calc-${calcNumber}`).css({
      "border-right": "2px solid black",
    });
  }
  if (calcRange.value > (calcNumber === "1" ? 66666.6666 : 666666.666)) {
    $(`.bar-2.bar-calc-${calcNumber}`).css({
      "border-right": "2px solid white",
    });
  } else {
    $(`.bar-2.bar-calc-${calcNumber}`).css({
      "border-right": "2px solid black",
    });
  }
};

if ($("div#calculator-1").length) {
  const range = document.getElementById("range-1"),
    tooltip = document.getElementById("tooltip-1"),
    price = document.getElementById("price-1"),
    setValue = () => {
      const newValue = Number(
          ((range.value - range.min) * 100) / (range.max - range.min)
        ),
        newPosition = 16 - newValue * 0.32,
        tooltipPos = (range.value / (range.max - range.min)) * 99 + "%";
      tooltip.setAttribute(
        "style",
        "left: "
          .concat(tooltipPos, "; transform: translate(-")
          .concat(tooltipPos, ", 5px)")
      );
      document.documentElement.style.setProperty(
        "--range-progress-1",
        `calc(${newValue}% + (${newPosition}px))`
      );
    };

  document.addEventListener("DOMContentLoaded", setValue);

  let customers = 0;

  const setRange = (value) => {
    if (range.value < 33333.33328) {
      $("#range-1").attr("step", 833.333332);
      customers = Math.round(1000 + (value / 833.333332) * 100);
    } else if (range.value >= 33333.33328 && range.value < 66666.6666) {
      $("#range-1").attr("step", 74.074074);
      customers = Math.round(5000 + ((value - 33333.33328) / 74.074074) * 100);
    } else {
      $("#range-1").attr("step", 66.6666666);
      customers = Math.round(50000 + ((value - 66666.6666) / 66.666666) * 100);
    }
  };

  const Calculate = () => {
    let baseValue = 0;
    let userOffset = 1000;
    let pricePerUser = 0.5;

    if (customers > 5000 && customers <= 50000) {
      baseValue = 2000;
      userOffset = 5000;
      pricePerUser = 0.1;
    } else if (customers > 1000 && customers <= 5000) {
      baseValue = 0;
      userOffset = 1000;
      pricePerUser = 0.5;
    } else if (customers > 50000 && customers <= 100000) {
      baseValue = 6500;
      userOffset = 50000;
      pricePerUser = 0.05;
    } else if (customers <= 1000) {
      baseValue = 0;
      userOffset = 0;
      pricePerUser = 0;
    }

    finalPrice1 = Math.round(
      baseValue + (customers - userOffset) * pricePerUser
    );

    tooltip.innerHTML = `<span>${numberWithCommas(customers)} Customers</span>`;
    price.innerHTML = `+ $${numberWithCommas(
      finalPrice1
    )}<span> / month</span>`;
  };

  range.oninput = () => {
    setValue();
    setRange(range.value);
    Calculate();
    barActive("1", range);
    estimatedCost = 1000 + finalPrice1 + finalPrice2 + finalPrice3;
    $(".estimated-cost-title").text(
      "$" + numberWithCommas(estimatedCost).toString()
    );
  };
}

if ($("div#calculator-2").length) {
  const range = document.getElementById("range-2"),
    tooltip = document.getElementById("tooltip-2"),
    price = document.getElementById("price-2"),
    setValue = () => {
      const newValue = Number(
          ((range.value - range.min) * 100) / (range.max - range.min)
        ),
        newPosition = 16 - newValue * 0.32,
        tooltipPos = (range.value / (range.max - range.min)) * 99 + "%";
      tooltip.setAttribute(
        "style",
        "left: "
          .concat(tooltipPos, "; transform: translate(-")
          .concat(tooltipPos, ", 5px)")
      );
      document.documentElement.style.setProperty(
        "--range-progress-2",
        `calc(${newValue}% + (${newPosition}px))`
      );
    };

  document.addEventListener("DOMContentLoaded", setValue);

  let customers = 0;

  const setRange = (value) => {
    if (range.value < 333333.333) {
      $("#range-2").attr("step", 6666.66666);
      customers = Math.round((value / 6666.66666) * 1000);
    } else if (range.value >= 333333.333 && range.value < 666666.666) {
      $("#range-2").attr("step", 740.74074);
      customers = Math.round(50000 + ((value - 333333.333) / 740.74074) * 1000);
    } else {
      $("#range-2").attr("step", 6666.66666);
      customers = Math.round(
        500000 + ((value - 666666.666) / 6666.66666) * 10000
      );
    }
  };

  const Calculate = () => {
    let baseValue = 0;
    let userOffset = 10000;
    let pricePerUser = 0.05;

    if (customers > 50000 && customers <= 500000) {
      baseValue = 2000;
      userOffset = 50000;
      pricePerUser = 0.01;
    } else if (customers > 10000 && customers <= 50000) {
      baseValue = 0;
      userOffset = 10000;
      pricePerUser = 0.05;
    } else if (customers > 500000 && customers <= 1000000) {
      baseValue = 6500;
      userOffset = 500000;
      pricePerUser = 0.005;
    } else if (customers <= 10000) {
      baseValue = 0;
      userOffset = 0;
      pricePerUser = 0;
    }

    finalPrice2 = Math.round(
      baseValue + (customers - userOffset) * pricePerUser
    );

    tooltip.innerHTML = `<span>${numberWithCommas(customers)} Messages</span>`;
    price.innerHTML = `+ $${numberWithCommas(
      finalPrice2
    )}<span> / month</span>`;
  };

  range.oninput = () => {
    setValue();
    setRange(range.value);
    Calculate();
    barActive("2", range);
    estimatedCost = 1000 + finalPrice1 + finalPrice2 + finalPrice3;
    $(".estimated-cost-title").text(
      "$" + numberWithCommas(estimatedCost).toString()
    );
  };
}

if ($("div#calculator-3").length) {
  const range = document.getElementById("range-3"),
    tooltip = document.getElementById("tooltip-3"),
    price = document.getElementById("price-3"),
    setValue = () => {
      const newValue = Number(
          ((range.value - range.min) * 100) / (range.max - range.min)
        ),
        newPosition = 16 - newValue * 0.32,
        tooltipPos = (range.value / (range.max - range.min)) * 99 + "%";
      tooltip.setAttribute(
        "style",
        "left: "
          .concat(tooltipPos, "; transform: translate(-")
          .concat(tooltipPos, ", 5px)")
      );
      document.documentElement.style.setProperty(
        "--range-progress-3",
        `calc(${newValue}% + (${newPosition}px))`
      );
    };

  document.addEventListener("DOMContentLoaded", setValue);

  let customers = 0;

  const setRange = (value) => {
    if (range.value < 333333.333) {
      $("#range-3").attr("step", 6666.66666);
      customers = Math.round((value / 6666.66666) * 1000);
    } else if (range.value >= 333333.333 && range.value < 666666.666) {
      $("#range-3").attr("step", 740.74074);
      customers = Math.round(50000 + ((value - 333333.333) / 740.74074) * 1000);
    } else {
      $("#range-3").attr("step", 6666.66666);
      customers = Math.round(
        500000 + ((value - 666666.666) / 6666.66666) * 10000
      );
    }
  };

  const Calculate = () => {
    let baseValue = 0;
    let userOffset = 10000;
    let pricePerUser = 0.04;

    if (customers > 50000 && customers <= 500000) {
      baseValue = 1600;
      userOffset = 50000;
      pricePerUser = 0.008;
    } else if (customers > 10000 && customers <= 50000) {
      baseValue = 0;
      userOffset = 10000;
      pricePerUser = 0.04;
    } else if (customers > 500000 && customers <= 1000000) {
      baseValue = 5200;
      userOffset = 500000;
      pricePerUser = 0.004;
    } else if (customers <= 10000) {
      baseValue = 0;
      userOffset = 0;
      pricePerUser = 0;
    }

    finalPrice3 = Math.round(
      baseValue + (customers - userOffset) * pricePerUser
    );

    tooltip.innerHTML = `<span>${numberWithCommas(customers)} Messages</span>`;
    price.innerHTML = `+ $${numberWithCommas(
      finalPrice3
    )}<span> / month</span>`;
  };

  range.oninput = () => {
    setValue();
    setRange(range.value);
    Calculate();
    barActive("3", range);
    estimatedCost = 1000 + finalPrice1 + finalPrice2 + finalPrice3;
    $(".estimated-cost-title").text(
      "$" + numberWithCommas(estimatedCost).toString()
    );
  };
}
