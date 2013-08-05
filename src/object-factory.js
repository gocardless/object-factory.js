(function(global) {
  'use strict';

  var redefine = global._.redefine || global.redefine;

  /**
   *  var Customer = ObjectFactory.create({
   *    AUTHORIZED_STATUS: 'authorised',
   *    meta: {
   *      alive: true
   *    },
   *    isAuthorized: function isAuthorized() {
   *      return this.status === this.AUTHORIZED_STATUS;
   *    }
   *  });
   *
   *  var customer = Customer.create({
   *    name: 'Frank',
   *    status: 'authorised'
   *  });
   *
   *  function assert(assertion, message) {
   *    function error(message) { throw 'AssertionError: ' + message; }
   *    !assertion && error(message);
   *  }
   *
   */

  /**
   * @type {Function}
   */
  var nonEnumerableDescriptors = redefine.as({
    enumerable: false,
    configurable: true,
    writable: true
  });

  /**
   * @type {Object}
   */
  var enumerableDescriptors = redefine.as({
    enumerable: true,
    configurable: true,
    writable: true
  });

  /**
   * More to come...
   * @type {Object}
   */
  var ObjectFactoryMethods = {
  };

  /**
   * Object without __proto__ that includes non-enumerable event methods
   *
   * eddy.js provides the following methods:
   * - boundTo
   * - emit
   * - off
   * - on
   * - once
   * - trigger
   *
   * @type {Object}
   */
  var ObjectFactory = redefine.from(null,
    redefine.mixin(ObjectFactoryMethods, global.eddy),
    nonEnumerableDescriptors
  );

  /**
   * Returns object factory that inherits from ObjectFactory
   * The extend method is overwritten on the returned factory
   * @param  {Object} object
   * @return {Object}
   */
  ObjectFactory.extend = function extend(factory) {
    return redefine.from(ObjectFactory, redefine.mixin({
      extend: function extend(attrs) {
        return redefine.from(this, attrs || {}, enumerableDescriptors);
      }
    }, factory || {}), nonEnumerableDescriptors);
  };

  global.ObjectFactory = ObjectFactory;

})(this);
