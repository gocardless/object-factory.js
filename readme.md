# ObjectFactory.js

![](https://circleci.com/gh/gocardless/object-factory.js.png?circle-token=:circle-token)

A thin model layer. Used with Angular.js @gocardless.

Requirements:
- ES5 Browser
- redefine.js
- eddy (modfied source)

## Base model
Create base object with non-enumerable properties that has a
`extend` method that takes model attributes.

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
Create object inheriting from Customer. Sets passed in attributes as
enumerable properties.

```javascript
var customer = Customer.extend({
  name: 'Frank',
  status: 'authorised'
});

// Access model methods
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
Uses @WebReflectios eddy.js
https://github.com/WebReflection/eddy

```javascript
var Box = ObjectFactory.extend();
Box.on('event', function(event) {
  console.log(event.called);
}).trigger('event', { called: 'called' });
```

## Copyright and license

Copyright 2013 GoCardless, Inc under the MIT license.
