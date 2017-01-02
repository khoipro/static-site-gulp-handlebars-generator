function fetchJSONFile(path, callback) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        var data = JSON.parse(httpRequest.responseText);
        if (callback) callback(data);
      }
    }
  };
  httpRequest.open('GET', path);
  httpRequest.send();
}

// this requests the file and executes a callback with the parsed result once
//   it is available
fetchJSONFile('data/data.json', function(data){
  var str = JSON.stringify(data, null, 2);
  var obj = JSON.parse(str);

  // Navigation
  var navTemplate = $('#navigation-template').html();
  var navContent = Handlebars.compile(navTemplate);
  $('#nav').append( navContent(data) );

  // Hero Intro
  var heroTemplate = $('#hero-template').html();
  var heroContent = Handlebars.compile(heroTemplate);
  $('#hero').append( heroContent(data) );

  // Experience
  var expTemplate = $('#experience-template').html();
  var expContent = Handlebars.compile(expTemplate);
  $('#experience').append( expContent(data) );

  // Portfolio
  var portfolioTemplate = $('#portfolio-template').html();
  var portfolioContent = Handlebars.compile(portfolioTemplate);
  $('#portfolio').append( portfolioContent(data) );
});

// Navigation toggle

document.querySelector('.header__toggle').addEventListener('click', function toggleMenu () {
  this.classList.toggle('js-toggle-active');
});
