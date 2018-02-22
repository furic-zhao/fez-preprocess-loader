import loaderUtils from "loader-utils"

function stripPreprocess(content) {
  let options = loaderUtils.getOptions(this) || {};

  if (!options.available) return content;

  let startComment = options.start || '@if MOCK';
  let endComment = options.end || '@endif';

  let regexPattern = new RegExp("[\\t ]*\\/\\* ?" + startComment + " ?\\*\\/[\\s\\S]*?\\/\\* ?" + endComment + " ?\\*\\/[\\t ]*\\n?", "g");

  content = content.replace(regexPattern, '');

  if (this.cacheable) {
    this.cacheable(true);
  }

  return content;
}

export default stripPreprocess;
