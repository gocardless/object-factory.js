# ObjectFactory.js

![](https://circleci.com/gh/gocardless/object-factory.js.png?circle-token=:circle-token)

A thin object inheritance layer. Built for Angular.js.

Exposes `extend method` which calls `Object.create(this)` (using redefine.js)
and sets passed in attributes as enumerable properties.

Mixes in eddy.js event methods.

Inherited methids: `extend`, `on`, `once`, `off`, `trigger`, `boundTo`, `emit`

Requirements:
- ES5 Browser
- redefine.js
- eddy (modfied source)

## Base object

```javascript
var Customer = ObjectFactory.extend({
  consts: Object.freeze({
    AUTHORIZED_STATUS: 'authorised',
  }),
  isAuthorized: function isAuthorized() {
    return this.status === this.consts.AUTHORIZED_STATUS;
  }
});
```

## Instance creation

```javascript
var customer = Customer.extend({
  name: 'Frank',
  status: 'authorised'
});

// Access object methods
customer.isAuthorized(); // true
```

## Meta instance creation...

```javascript
var customersSon = customer.extend({
  name: 'Frank Jr.'
});
customersSon.status; // 'authorised'
```

## Event mixin

Uses @WebReflectios eddy.js: https://github.com/WebReflection/eddy

```javascript
var Box = ObjectFactory.extend();
Box.on('event', function(event) {
  console.log(event.called);
}).trigger('event', { called: 'called' });
```

## Copyright and license

Copyright 2013 GoCardless, Inc under the MIT license.
