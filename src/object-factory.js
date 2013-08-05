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
   * @type {Object}
   */
  var enumerableDescriptors = redefine.as({
    enumerable: true,
    configurable: true,
    writable: true
  });

  /**
   * @type {Object}
   */
  var ObjectFactoryMethods = {
    /**
     * Returns object factory that inherits from ObjectFactory
     * The create method is overwritten on the returned factory
     * @param  {Object} object
     * @return {Object}
     */
    create: function create(attrs) {
      return redefine.from(this, attrs || {}, enumerableDescriptors);
    }
  };

  /**
   * Object without __proto__ that includes event methods
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
    enumerableDescriptors
  );

  global.ObjectFactory = ObjectFactory;

})(this);
