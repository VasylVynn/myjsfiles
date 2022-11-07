
$.get('https://openexchangerates.org/api/latest.json', {
	app_id: '763dea102db74a99bcc06f01950f3e8c',
	base: 'USD'
}, function(data) {
	const currencies = [{
			key: 'USD',
			symbol: '$',
			name: 'Dollar',
			conversionRatio: data.rates.USD,
			imgPath: '/img/base/icons/price/dol-off.svg',
		},
		{
			key: 'EUR',
			symbol: '€',
			name: 'EURO',
			conversionRatio: data.rates.EUR,
			imgPath: '/img/base/icons/price/eu-off.svg',
		},
/*		{
			key: 'CNY',
			symbol: '¥',
			name: 'Renminbi',
			conversionRatio: data.rates.CNY,
			imgPath: '/img/base/icons/price/jp-off.svg',
		},*/
		{
			key: 'GHS',
			symbol: '₵',
			name: 'Ghanian Cedi',
			conversionRatio: data.rates.GHS,
			imgPath: '/img/base/icons/price/ghs-off.svg',
		},
		{
			key: 'GBP',
			symbol: '£',
			name: 'Pound Sterling',
			conversionRatio: data.rates.GBP,
			imgPath: '/img/base/icons/price/p-off.svg',
		},
		{
			key: 'ZAR',
			symbol: 'R',
			name: 'Rand',
			conversionRatio: data.rates.ZAR,
			imgPath: '/img/base/icons/price/p2-off.svg',
		},
		{
			key: 'NGN',
			symbol: '₦',
			name: 'Nigerian Naira',
			conversionRatio: data.rates.NGN,
			imgPath: '/img/base/icons/price/ngn-off.svg',
		},
		{
			key: 'PHP',
			symbol: '₱',
			name: 'Philippine Peso',
			conversionRatio: data.rates.PHP,
			imgPath: '/img/base/icons/price/php-off.svg',
		},
	]

	let selectedCurrency = currencies[0]

	const $monthly = $('.monthly')
	const $annual = $('.annual')
	const $availableCurrencies = $('.currency-image')
	let $selectedBilling = 'monthly'

	const slider1 = $('#slider-calc-1')[0]
	const $calculatedValueCalc1 = $('#calculated-value-calc-1')
	const $tooltipCalc1 = $('#slider-tooltip-calc-1')[0]
	const $tooltipValueCalc1 = $('#slider-tooltip-value-calc-1')
	const $discountTooltip1 = $('#slider-discount-tooltip-1')
  $discountTooltip1.css('visibility', ($annual.hasClass('active') ? 'visible' : 'hidden'))
	const $discountValueCalc1 = $('#slider-discount-tooltip-calc-1')

	$monthly.click(function() {
		$annual.removeClass('active')
		$monthly.addClass('active')
		$selectedBilling = 'monthly'
		$discountTooltip1.css('visibility', 'hidden')
		calculate1(slider1.value)
	})

	$annual.click(function() {
		$monthly.removeClass('active')
		$annual.addClass('active')
		$selectedBilling = 'annual'
		$discountTooltip1.css('visibility', 'visible')
		calculate1(slider1.value)
	})

	function numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}

	function changePosition(slider) {
		return (slider.value / (slider.max - slider.min)) * 96 + '%'
	}


	function setValueSlider1() {
		var startPos = changePosition(slider1);
		slider1.style.setProperty('--value', startPos);
		$tooltipCalc1.setAttribute('style', "left: ".concat(startPos, "; transform: translate(-").concat(startPos, ", 31px)"));
		$tooltipValueCalc1.html(numberWithCommas(slider1.value));
		calculate1(slider1.value);
	}
	setValueSlider1();

	slider1.addEventListener('input', function() {
		setValueSlider1();
	});
  
	slider1.addEventListener('change', function() {
		const gravityRange = 1000;
		const stepSize = 5000;
		const min = 1000;
		let k = parseInt(slider1.value);
		if ((k % stepSize) >= (stepSize - gravityRange) || (k % stepSize) <= (gravityRange)) {
			slider1.value = Math.round(k/stepSize) * stepSize;
		}
		else if (k <= min + gravityRange) {
			slider1.value = min;
		}
		setValueSlider1();
	});
  
	$('.currency-area').click(function(event) {
		const et = event.target
		$availableCurrencies.removeClass('selected')
		const currList = ['usd', 'eur', 'ghs', 'gbp', 'zar', 'ngn', 'php']
		for (const currKey in currList) {
			let curr = currList[currKey]
			if (et.classList.contains(curr)) {
				$('.' + curr).addClass('selected')
				selectedCurrency = currencies[currKey]
				break
			}
		}
		calculate1(slider1.value);
	})

	function calculate1(sliderValue) {
		const currencyRate = selectedCurrency['conversionRatio']
		let users = parseInt(sliderValue)
		let baseValue = (users > 5000) ? 3000 : 1000
		let userOffset = (users > 5000) ? 5000 : 1000
		let pricePerUser = (users > 5000) ? 0.1 : 0.5
		let discountRate = ($selectedBilling === 'monthly' || users <= 5000) ? 1 : (1 - (Math.ceil(users/10000) * 0.025 ))
		let discountPercent = (Math.round((1 - discountRate) * 1000) / 10)
		$discountTooltip1.css('visibility', (discountPercent > 0 ? 'visible' : 'hidden'))
		$discountValueCalc1.html(discountPercent);
		let finalPrice = Math.round((baseValue + (users - userOffset) * pricePerUser) * currencyRate * discountRate)
		$calculatedValueCalc1.html(selectedCurrency['symbol'] + numberWithCommas(finalPrice))
	}
})