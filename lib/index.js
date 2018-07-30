'use strict';

exports.__esModule = true;

var _loaderUtils = require('loader-utils');

var _loaderUtils2 = _interopRequireDefault(_loaderUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stripPreprocess(content) {
  var options = _loaderUtils2.default.getOptions(this) || {};

  if (!options.available) return content;

  var startComment = options.start || '@if MOCK';
  var endComment = options.end || '@endif';

  var regexPattern = new RegExp("[\\t ]*\\/\\* ?" + startComment + " ?\\*\\/[\\s\\S]*?\\/\\* ?" + endComment + " ?\\*\\/[\\t ]*\\n?", "g");

  content = content.replace(regexPattern, '');

  if (this.cacheable) {
    this.cacheable(true);
  }

  return content;
}

exports.default = stripPreprocess;
module.exports = exports['default'];