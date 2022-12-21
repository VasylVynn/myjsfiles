
(function() {
  var domainsToDecorate = [
          'app.proto.cx', //add or remove domains (without https or trailing slash)
        
      ],
      queryParams = [
          'utm_medium', //add or remove query parameters you want to transfer
          'utm_source',
          'utm_campaign',
      ]
  // do not edit anything below this line
  var links = document.querySelectorAll('a'); 

// check if links contain domain from the domainsToDecorate array and then decorates
  for (var linkIndex = 0; linkIndex < links.length; linkIndex++) {
      for (var domainIndex = 0; domainIndex < domainsToDecorate.length; domainIndex++) { 
          if (links[linkIndex].href.indexOf(domainsToDecorate[domainIndex]) > -1 && links[linkIndex].href.indexOf("#") === -1) {
              links[linkIndex].href = decorateUrl(links[linkIndex].href);
          }
      }
  }
// decorates the URL with query params
  function decorateUrl(urlToDecorate) {
      urlToDecorate = (urlToDecorate.indexOf('?') === -1) ? urlToDecorate + '?' : urlToDecorate + '&';
      var collectedQueryParams = [];
      for (var queryIndex = 0; queryIndex < queryParams.length; queryIndex++) {
          if (getQueryParam(queryParams[queryIndex])) {
              collectedQueryParams.push(queryParams[queryIndex] + '=' + getQueryParam(queryParams[queryIndex]))
          }
      }
      return urlToDecorate + collectedQueryParams.join('&');
  }

  // borrowed from https://stackoverflow.com/questions/831030/
  // a function that retrieves the value of a query parameter
  function getQueryParam(name) {
      if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(window.location.search)){
          return decodeURIComponent(name[1]);} else 
          {
      
                return Cookies.get(name);
          }
  }

})();




$(document).ready(function() {
    if (window.location.href.indexOf("franky") > -1) {
      alert("your url contains the name franky");
    }
  




 const domainsToDecorate = ['app.proto.cx'];
  const queryParams = ['utm_medium', 'utm_source', 'utm_campaign'];
  const links = document.querySelectorAll('a');
  let newHref;
  // check if links contain domain from the domainsToDecorate array and then decorates
  for (let linkIndex = 0; linkIndex < links.length; linkIndex++) {
    for (let domainIndex = 0; domainIndex < domainsToDecorate.length; domainIndex++) {
      if (links[linkIndex].href.indexOf(domainsToDecorate[domainIndex]) > -1 && links[linkIndex].href.indexOf('#') === -1) {
        newHref = decorateUrl(links[linkIndex].href);
        links[linkIndex].href = newHref;
      }
    }
  }
  
    function getQueryParam(name) {
    return Cookies.get(name);
  }

  // decorates the URL with query params
  function decorateUrl(urlToDecorate) {
    urlToDecorate = (urlToDecorate.indexOf('?') === -1) ? `${urlToDecorate }?` : `${urlToDecorate }&`;
    const collectedQueryParams = [];
    for (let queryIndex = 0; queryIndex < queryParams.length; queryIndex++) {
      if (getQueryParam(queryParams[queryIndex])) {
        collectedQueryParams.push(`${queryParams[queryIndex] }=${ getQueryParam(queryParams[queryIndex])}`);
      }
    }
    return urlToDecorate + collectedQueryParams.join('&');
  }

  });

