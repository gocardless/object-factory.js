'use strict';

describe('ObjectFactory', function() {
  var Base;
  beforeEach(function() {
    Base = ObjectFactory.create();
  });

  function baseItem(attrs) {
    return Base.create(attrs);
  }

  it('has event mixin', function() {
    var calledEvent;
    var CALLED = 'called';

    Base.on('event', function(event) {
      calledEvent = event.called;
    }).trigger('event', { called: CALLED });

    expect(calledEvent).toEqual(CALLED);
  });

  it('create', function() {
    var item = baseItem({
      value: 1
    });
    expect(item.value).toEqual(1);
  });

  it('has Base method', function() {
    var AUTHORIZED_STATUS = 'authorised';
    Base.consts = Object.freeze({
      AUTHORIZED_STATUS: AUTHORIZED_STATUS,
    });
    Base.isAuthorized = function isAuthorized() {
      return this.status === this.consts.AUTHORIZED_STATUS;
    };

    var item = baseItem({
      status: AUTHORIZED_STATUS
    });

    expect(item.isAuthorized()).toBe(true);
  });

  it('does not overwrite parent', function() {
    Base.meta = { name: 'Frank' };
    var item = baseItem();
    expect(Base.meta).toBe(item.meta);
    item.meta = { name: 'Joe' };
    expect(Base.meta).not.toBe(item.meta);
  });

  it('only enumerates attrs', function() {
    expect(Object.keys(Base).length).toBe(0);
    var item = baseItem({name: 'Martin'});
    expect(Object.keys(item).length).toBe(1);
  });
});
