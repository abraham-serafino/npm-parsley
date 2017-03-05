var jquery = require('jquery');
window.$ = jquery;
require('parsley');

module.exports = function(selector, options) {
  $(selector).parsley(options);
};
