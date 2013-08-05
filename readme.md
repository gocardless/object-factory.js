# ObjectFactory.js

Built as a model layer. Used with Angular.js @gocardless.

Requirements:
- redefine.js
- eddy (modfied source)

## Base model
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

// Access model methods
customer.isAuthorized(); // true

// Serialize attributes
customer.toJSON(); // { name: 'Frank', status: 'authorised' }
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
