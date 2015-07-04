/* global $ */

'use strict';

function Debug( el, opts ) {
  this.$el = el;
  this.defaults = {

  };
  this.options = $.extend( {}, this.defaults, opts );
}

Debug.prototype = {
  init : function() {
    console.log('debugging!!!');
  }
};

module.exports = Debug;
