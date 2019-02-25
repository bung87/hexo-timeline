
'use strict';
const mdline = require("mdline");
const parser = require("@mdline/mdline-parser");
const formatter = require("@mdline/mdline-formatter-html");
const handler = function (args, content) {

  return mdline.processText(content, {
    parser,
    formatter
  })

};

hexo.extend.tag.register('timeline', handler, {
  async: true,
  ends: true
});