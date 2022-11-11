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