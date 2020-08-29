(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("EmblaCarousel", [], factory);
	else if(typeof exports === 'object')
		exports["EmblaCarousel"] = factory();
	else
		root["EmblaCarousel"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function Vector1D(value) {
  var vector = value;

  function get() {
    return vector;
  }

  function set(n) {
    vector = readNumber(n);
    return self;
  }

  function add(n) {
    vector += readNumber(n);
    return self;
  }

  function subtract(n) {
    vector -= readNumber(n);
    return self;
  }

  function multiply(n) {
    vector *= n;
    return self;
  }

  function divide(n) {
    vector /= n;
    return self;
  }

  function normalize() {
    if (vector !== 0) divide(vector);
    return self;
  }

  function readNumber(n) {
    return typeof n === 'number' ? n : n.get();
  }

  var self = {
    add: add,
    divide: divide,
    get: get,
    multiply: multiply,
    normalize: normalize,
    set: set,
    subtract: subtract
  };
  return Object.freeze(self);
}

exports.Vector1D = Vector1D;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function rectWidth(node) {
  return node.getBoundingClientRect().width;
}

exports.rectWidth = rectWidth;

function map(value, iStart, iStop, oStart, oStop) {
  return oStart + (oStop - oStart) * ((value - iStart) / (iStop - iStart));
}

exports.map = map;

function arrayFromCollection(nodeList) {
  return Array.prototype.slice.call(nodeList);
}

exports.arrayFromCollection = arrayFromCollection;

function debounce(callback, time) {
  var timeout = {
    id: 0
  };
  return function () {
    window.clearTimeout(timeout.id);
    timeout.id = window.setTimeout(callback, time) || 0;
  };
}

exports.debounce = debounce;

function roundToDecimals(decimalPoints) {
  var pow = Math.pow(10, decimalPoints);
  return function (n) {
    return Math.round(n * pow) / pow;
  };
}

exports.roundToDecimals = roundToDecimals;

function groupArray(array, size) {
  var groups = [];

  for (var i = 0; i < array.length; i += size) {
    groups.push(array.slice(i, i + size));
  }

  return groups;
}

exports.groupArray = groupArray;

function arrayKeys(array) {
  return Object.keys(array).map(Number);
}

exports.arrayKeys = arrayKeys;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function Limit(params) {
  var min = params.min,
      max = params.max;
  var loopLimits = {
    min: max,
    max: min
  };
  var constrainLimits = {
    min: min,
    max: max
  };

  function reachedMin(n) {
    return n < min;
  }

  function reachedMax(n) {
    return n > max;
  }

  function reachedAny(n) {
    return reachedMin(n) || reachedMax(n);
  }

  function reachedWhich(n) {
    if (reachedMin(n)) return 'min';
    if (reachedMax(n)) return 'max';
    return '';
  }

  function loop(n) {
    var which = reachedWhich(n);
    return which ? loopLimits[which] : n;
  }

  function constrain(n) {
    var which = reachedWhich(n);
    return which ? constrainLimits[which] : n;
  }

  var self = {
    constrain: constrain,
    loop: loop,
    max: max,
    min: min,
    reachedAny: reachedAny,
    reachedMax: reachedMax,
    reachedMin: reachedMin
  };
  return Object.freeze(self);
}

exports.Limit = Limit;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function Counter(params) {
  var start = params.start,
      limit = params.limit,
      loop = params.loop;
  var min = limit.min,
      max = limit.max;
  var type = loop ? 'loop' : 'constrain';
  var counter = withinLimit(start);

  function get() {
    return counter;
  }

  function set(n) {
    counter = withinLimit(n);
    return self;
  }

  function withinLimit(n) {
    return limit[type](n);
  }

  function add(n) {
    if (n !== 0) {
      var sign = n / Math.abs(n);
      set(get() + sign);
      return add(n + sign * -1);
    }

    return self;
  }

  function clone() {
    return Counter({
      start: get(),
      limit: limit,
      loop: loop
    });
  }

  var self = {
    add: add,
    clone: clone,
    get: get,
    max: max,
    min: min,
    set: set
  };
  return Object.freeze(self);
}

exports.Counter = Counter;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var vector1d_1 = __webpack_require__(0);

function Direction(value) {
  var direction = vector1d_1.Vector1D(normalize(value));
  var get = direction.get;

  function normalize(n) {
    return n === 0 ? 0 : n / Math.abs(n);
  }

  function set(v) {
    var d = normalize(v.get());
    if (d !== 0) direction.set(d);
    return self;
  }

  var self = {
    get: get,
    set: set
  };
  return Object.freeze(self);
}

exports.Direction = Direction;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function EventStore() {
  var listeners = [];

  function add(node, type, handler) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    node.addEventListener(type, handler, options);
    listeners.push(function () {
      return node.removeEventListener(type, handler, options);
    });
    return self;
  }

  function removeAll() {
    listeners.filter(function (remove) {
      return remove();
    });
    listeners.length = 0;
    return self;
  }

  var self = {
    add: add,
    removeAll: removeAll
  };
  return Object.freeze(self);
}

exports.EventStore = EventStore;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var engine_1 = __webpack_require__(8);

var eventDispatcher_1 = __webpack_require__(25);

var eventStore_1 = __webpack_require__(5);

var options_1 = __webpack_require__(26);

var utils_1 = __webpack_require__(1);

function EmblaCarousel(sliderRoot) {
  var userOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var events = eventDispatcher_1.EventDispatcher();
  var eventStore = eventStore_1.EventStore();
  var debouncedResize = utils_1.debounce(resize, 500);
  var changeOptions = reActivate;
  var on = events.on,
      off = events.off;
  var engine;

  var options = _extends({}, options_1.defaultOptions, userOptions);

  var root;
  var container;
  var slides;
  var activated = false;
  var windowWidth = 0;
  activate(options);

  function storeElements() {
    if (!sliderRoot) {
      throw new Error('Missing root element 😢');
    }

    var selector = options.containerSelector;
    var sliderContainer = sliderRoot.querySelector(selector);

    if (!sliderContainer) {
      throw new Error('Missing container element 😢');
    }

    root = sliderRoot;
    container = sliderContainer;
    slides = utils_1.arrayFromCollection(container.children);
    activated = true;
  }

  function activate() {
    var partialOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isFirstInit = !activated;
    windowWidth = window.innerWidth;
    storeElements();
    if (slides.length === 0) return;
    options = _extends(options, partialOptions);
    engine = engine_1.Engine(root, container, slides, options, events);
    eventStore.add(window, 'resize', debouncedResize);
    slides.forEach(slideFocusEvent);
    engine.translate.to(engine.scrollBody.location);

    if (options.loop && slides.length === 1) {
      return activate({
        loop: false
      });
    }

    if (options.draggable) activateDragFeature();
    if (options.loop) engine.slideLooper.loop(slides);

    if (isFirstInit) {
      events.on('select', toggleSelectedClass);
      events.on('init', toggleSelectedClass);
      setTimeout(function () {
        return events.dispatch('init');
      }, 0);
    }
  }

  function activateDragFeature() {
    var cl = root.classList;
    var _options = options,
        draggingClass = _options.draggingClass,
        draggableClass = _options.draggableClass;
    engine.dragHandler.addActivationEvents();
    events.on('dragStart', function () {
      return cl.add(draggingClass);
    });
    events.on('dragEnd', function () {
      return cl.remove(draggingClass);
    });
    cl.add(draggableClass);
  }

  function toggleSelectedClass() {
    var _engine = engine,
        index = _engine.index,
        indexPrevious = _engine.indexPrevious,
        indexGroups = _engine.indexGroups;
    var selected = options.selectedClass;
    var previousGroup = indexGroups[indexPrevious.get()];
    var currentGroup = indexGroups[index.get()];
    previousGroup.forEach(function (i) {
      return slides[i].classList.remove(selected);
    });
    currentGroup.forEach(function (i) {
      return slides[i].classList.add(selected);
    });
  }

  function slideFocusEvent(slide, index) {
    var focus = function focus() {
      var groupIndex = Math.floor(index / options.slidesToScroll);
      var selectedGroup = index ? groupIndex : index;
      sliderRoot.scrollLeft = 0;
      scrollTo(selectedGroup);
    };

    eventStore.add(slide, 'focus', focus, true);
  }

  function reActivate() {
    var partialOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (!activated) return;
    var startIndex = engine.index.get();

    var newOptions = _extends({
      startIndex: startIndex
    }, partialOptions);

    deActivate();
    activate(newOptions);
  }

  function deActivate() {
    engine.dragHandler.removeAllEvents();
    engine.animation.stop();
    eventStore.removeAll();
    root.classList.remove(options.draggableClass);
    container.style.transform = '';
    slides.forEach(function (s) {
      return s.style.left = '';
    });
  }

  function destroy() {
    deActivate();
    activated = false;
    engine = {};
    events.dispatch('destroy');
  }

  function resize() {
    if (windowWidth === window.innerWidth) return;
    windowWidth = window.innerWidth;
    reActivate();
    events.dispatch('resize');
  }

  function scrollSnapList() {
    return engine.indexGroups.map(function (g) {
      return {
        slideIndexes: g,
        slideNodes: g.map(function (i) {
          return slides[i];
        })
      };
    });
  }

  function scrollBy(progress, snap) {
    var distance = engine.scrollProgress.add(progress);
    engine.scrollBody.useDefaultMass().useDefaultSpeed();
    engine.scrollTo.distance(distance, snap);
  }

  function scrollToProgress(progress, snap) {
    var desired = engine.scrollProgress.set(progress);
    var distance = engine.scrollTarget.shortcut(desired, 0);
    engine.scrollBody.useDefaultMass().useDefaultSpeed();
    engine.scrollTo.distance(distance, snap);
  }

  function scrollProgress() {
    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var locationType = target ? 'target' : 'location';
    var location = engine[locationType].get();
    return engine.scrollProgress.get(location);
  }

  function scrollTo(index) {
    engine.scrollBody.useDefaultMass().useDefaultSpeed();
    engine.scrollTo.index(index, 0);
  }

  function scrollNext() {
    var next = engine.index.clone().add(1);
    engine.scrollBody.useDefaultMass().useDefaultSpeed();
    engine.scrollTo.index(next.get(), -1);
  }

  function scrollPrev() {
    var prev = engine.index.clone().add(-1);
    engine.scrollBody.useDefaultMass().useDefaultSpeed();
    engine.scrollTo.index(prev.get(), 1);
  }

  function canScrollPrev() {
    var _engine2 = engine,
        index = _engine2.index;
    return options.loop || index.get() !== index.min;
  }

  function canScrollNext() {
    var _engine3 = engine,
        index = _engine3.index;
    return options.loop || index.get() !== index.max;
  }

  function selectedScrollSnap() {
    return engine.index.get();
  }

  function previousScrollSnap() {
    return engine.indexPrevious.get();
  }

  function clickAllowed() {
    return engine.dragHandler.clickAllowed();
  }

  function containerNode() {
    return container;
  }

  function slideNodes() {
    return slides;
  }

  var self = {
    canScrollNext: canScrollNext,
    canScrollPrev: canScrollPrev,
    changeOptions: changeOptions,
    clickAllowed: clickAllowed,
    containerNode: containerNode,
    destroy: destroy,
    off: off,
    on: on,
    previousScrollSnap: previousScrollSnap,
    scrollBy: scrollBy,
    scrollNext: scrollNext,
    scrollPrev: scrollPrev,
    scrollProgress: scrollProgress,
    scrollSnapList: scrollSnapList,
    scrollTo: scrollTo,
    scrollToProgress: scrollToProgress,
    selectedScrollSnap: selectedScrollSnap,
    slideNodes: slideNodes
  };
  return Object.freeze(self);
}

exports.EmblaCarousel = EmblaCarousel;
exports["default"] = EmblaCarousel; // @ts-ignore

module.exports = EmblaCarousel;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var alignment_1 = __webpack_require__(9);

var animation_1 = __webpack_require__(10);

var counter_1 = __webpack_require__(3);

var dragHandler_1 = __webpack_require__(11);

var dragTracker_1 = __webpack_require__(12);

var limit_1 = __webpack_require__(2);

var pxToPercent_1 = __webpack_require__(13);

var scrollBody_1 = __webpack_require__(14);

var scrollBounds_1 = __webpack_require__(15);

var scrollContain_1 = __webpack_require__(16);

var scrollLimit_1 = __webpack_require__(17);

var scrollLooper_1 = __webpack_require__(18);

var scrollProgress_1 = __webpack_require__(19);

var scrollSnap_1 = __webpack_require__(20);

var scrollTarget_1 = __webpack_require__(21);

var scrollTo_1 = __webpack_require__(22);

var slideLooper_1 = __webpack_require__(23);

var translate_1 = __webpack_require__(24);

var utils_1 = __webpack_require__(1);

var vector1d_1 = __webpack_require__(0);

function Engine(root, container, slides, options, events) {
  // Options
  var align = options.align,
      startIndex = options.startIndex,
      loop = options.loop,
      speed = options.speed,
      dragFree = options.dragFree,
      slidesToScroll = options.slidesToScroll,
      containScroll = options.containScroll; // Measurements

  var containerSize = utils_1.rectWidth(container);
  var pxToPercent = pxToPercent_1.PxToPercent(containerSize);
  var viewSize = pxToPercent.totalPercent;
  var slideIndexes = utils_1.arrayKeys(slides);
  var slideSizes = slides.map(utils_1.rectWidth).map(pxToPercent.measure);
  var groupedSizes = utils_1.groupArray(slideSizes, slidesToScroll);
  var snapSizes = groupedSizes.map(function (g) {
    return g.reduce(function (a, s) {
      return a + s;
    });
  });
  var snapIndexes = utils_1.arrayKeys(snapSizes);
  var contentSize = slideSizes.reduce(function (a, s) {
    return a + s;
  });
  var alignment = alignment_1.Alignment({
    align: align,
    viewSize: viewSize
  });
  var scrollSnap = scrollSnap_1.ScrollSnap({
    snapSizes: snapSizes,
    alignment: alignment,
    loop: loop
  });
  var scrollContain = scrollContain_1.ScrollContain({
    alignment: alignment,
    contentSize: contentSize,
    slideIndexes: slideIndexes,
    slidesToScroll: slidesToScroll,
    viewSize: viewSize
  });
  var contain = !loop && containScroll;
  var defaultSnaps = snapIndexes.map(scrollSnap.measure);
  var containedSnaps = scrollContain.snaps(defaultSnaps);
  var scrollSnaps = contain ? containedSnaps : defaultSnaps; // Index

  var defaultIndexes = utils_1.groupArray(slideIndexes, slidesToScroll);
  var containedIndexes = scrollContain.indexes(defaultSnaps);
  var indexMin = 0;
  var indexMax = scrollSnaps.length - 1;
  var indexGroups = contain ? containedIndexes : defaultIndexes;
  var indexSpan = limit_1.Limit({
    min: indexMin,
    max: indexMax
  });
  var index = counter_1.Counter({
    limit: indexSpan,
    start: startIndex,
    loop: loop
  });
  var indexPrevious = index.clone(); // ScrollLimit

  var scrollLimit = scrollLimit_1.ScrollLimit({
    loop: loop,
    contentSize: contentSize
  });
  var limit = scrollLimit.measure(scrollSnaps); // Draw

  var update = function update() {
    engine.scrollBody.seek(target).update();

    if (!dragHandler.pointerDown()) {
      if (!loop) engine.scrollBounds.constrain(target);
      if (engine.scrollBody.settle(target)) engine.animation.stop();
    }

    if (loop) {
      var direction = engine.scrollBody.direction.get();
      engine.scrollLooper.loop(loopVectors, direction);
      engine.slideLooper.loop(slides);
    }

    var settled = engine.scrollBody.settle(target);
    events.dispatch(settled ? 'settle' : 'scroll');
    engine.translate.to(engine.scrollBody.location);
    engine.animation.proceed();
  }; // Shared


  var animation = animation_1.Animation(update);
  var startLocation = scrollSnaps[index.get()];
  var location = vector1d_1.Vector1D(startLocation);
  var target = vector1d_1.Vector1D(startLocation);
  var loopVectors = [location, target];
  var scrollBody = scrollBody_1.ScrollBody({
    location: location,
    speed: speed,
    mass: 1
  });
  var scrollTarget = scrollTarget_1.ScrollTarget({
    contentSize: contentSize,
    index: index,
    limit: limit,
    loop: loop,
    scrollSnaps: scrollSnaps,
    target: target
  });
  var scrollTo = scrollTo_1.ScrollTo({
    animation: animation,
    events: events,
    index: index,
    indexPrevious: indexPrevious,
    scrollTarget: scrollTarget,
    target: target
  }); // DragHandler

  var dragHandler = dragHandler_1.DragHandler({
    animation: animation,
    dragFree: dragFree,
    dragTracker: dragTracker_1.DragTracker(pxToPercent),
    element: root,
    events: events,
    index: index,
    limit: limit,
    location: location,
    loop: loop,
    scrollBody: scrollBody,
    scrollTo: scrollTo,
    snapSizes: snapSizes,
    target: target
  }); // Slider

  var engine = {
    animation: animation,
    dragHandler: dragHandler,
    index: index,
    indexGroups: indexGroups,
    indexPrevious: indexPrevious,
    location: location,
    scrollBody: scrollBody,
    scrollBounds: scrollBounds_1.ScrollBounds({
      animation: animation,
      limit: limit,
      location: location,
      scrollBody: scrollBody
    }),
    scrollLooper: scrollLooper_1.ScrollLooper({
      contentSize: contentSize,
      limit: limit,
      location: location,
      pxToPercent: pxToPercent
    }),
    scrollProgress: scrollProgress_1.ScrollProgress({
      limit: limit,
      loop: loop,
      target: target
    }),
    scrollTarget: scrollTarget,
    scrollTo: scrollTo,
    slideLooper: slideLooper_1.SlideLooper({
      contentSize: contentSize,
      location: location,
      scrollSnaps: scrollSnaps,
      slideSizes: slideSizes,
      viewSize: viewSize
    }),
    target: target,
    translate: translate_1.Translate(container)
  };
  return Object.freeze(engine);
}

exports.Engine = Engine;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function Alignment(params) {
  var viewSize = params.viewSize,
      align = params.align;
  var alignment = {
    start: start,
    center: center,
    end: end
  };

  function start() {
    return 0;
  }

  function center(n) {
    return (viewSize - n) / 2;
  }

  function end(n) {
    return viewSize - n;
  }

  function percent() {
    return viewSize * Number(align);
  }

  function measure(n) {
    if (typeof align === 'number') return percent();
    return alignment[align](n);
  }

  var self = {
    measure: measure
  };
  return Object.freeze(self);
}

exports.Alignment = Alignment;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function Animation(callback) {
  var run = requestAnimationFrame.bind(window);
  var end = cancelAnimationFrame.bind(window);
  var animationFrame = 0;

  function ifAnimating(active, cb) {
    return function () {
      if (active === !!animationFrame) cb();
    };
  }

  function start() {
    animationFrame = run(callback);
  }

  function stop() {
    end(animationFrame);
    animationFrame = 0;
  }

  var self = {
    proceed: ifAnimating(true, start),
    start: ifAnimating(false, start),
    stop: ifAnimating(true, stop)
  };
  return Object.freeze(self);
}

exports.Animation = Animation;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var direction_1 = __webpack_require__(4);

var eventStore_1 = __webpack_require__(5);

var vector1d_1 = __webpack_require__(0);

function DragHandler(params) {
  var target = params.target,
      scrollBody = params.scrollBody,
      dragFree = params.dragFree,
      animation = params.animation;
  var element = params.element,
      dragTracker = params.dragTracker,
      location = params.location,
      events = params.events,
      limit = params.limit;
  var focusNodes = ['INPUT', 'SELECT', 'TEXTAREA'];
  var startX = vector1d_1.Vector1D(0);
  var startY = vector1d_1.Vector1D(0);
  var dragStartLocation = vector1d_1.Vector1D(0);
  var activationEvents = eventStore_1.EventStore();
  var interactionEvents = eventStore_1.EventStore();
  var snapForceBoost = {
    mouse: 2.5,
    touch: 3.5
  };
  var freeForceBoost = {
    mouse: 4,
    touch: 7
  };
  var snapSpeed = {
    mouse: 12,
    touch: 14
  };
  var freeSpeed = {
    mouse: 6,
    touch: 5
  };
  var dragThreshold = 4;
  var pointerIsDown = false;
  var preventScroll = false;
  var preventClick = false;
  var isMouse = false;

  function addActivationEvents() {
    var node = element;
    activationEvents.add(node, 'touchmove', function () {
      return undefined;
    }).add(node, 'touchend', function () {
      return undefined;
    }).add(node, 'touchstart', down).add(node, 'mousedown', down).add(node, 'touchcancel', up).add(node, 'contextmenu', up).add(node, 'click', click);
  }

  function addInteractionEvents() {
    var node = !isMouse ? element : document;
    interactionEvents.add(node, 'touchmove', move).add(node, 'touchend', up).add(node, 'mousemove', move).add(node, 'mouseup', up);
  }

  function removeAllEvents() {
    activationEvents.removeAll();
    interactionEvents.removeAll();
  }

  function isFocusNode(node) {
    var name = node.nodeName || '';
    return focusNodes.indexOf(name) > -1;
  }

  function movementSpeed() {
    var speed = dragFree ? freeSpeed : snapSpeed;
    var type = isMouse ? 'mouse' : 'touch';
    return speed[type];
  }

  function dragForceBoost() {
    var boost = dragFree ? freeForceBoost : snapForceBoost;
    var type = isMouse ? 'mouse' : 'touch';
    return boost[type];
  }

  function seekTargetBy(force) {
    var scrollTo = params.scrollTo,
        snapSizes = params.snapSizes,
        index = params.index;
    var forceAbs = Math.abs(force);
    var halfSnap = snapSizes[index.get()] / 2;
    var reachedLimit = limit.reachedAny(target.get() + force);
    var seekNext = forceAbs > dragThreshold && forceAbs < halfSnap;

    if (!dragFree && !reachedLimit && seekNext) {
      var indexDiff = direction_1.Direction(force).get() * -1;
      var next = index.clone().add(indexDiff);
      scrollTo.index(next.get(), 0);
    } else {
      scrollTo.distance(force, !dragFree);
    }
  }

  function down(evt) {
    isMouse = evt.type === 'mousedown';
    var diffToTarget = target.get() - location.get();
    var isMoving = Math.abs(diffToTarget) >= 2;
    var clearPreventClick = isMouse || !isMoving;
    var isNotFocusNode = !isFocusNode(evt.target);
    var preventDefault = isMoving || isMouse && isNotFocusNode;
    if (isMouse && evt.button !== 0) return;
    pointerIsDown = true;
    dragTracker.pointerDown(evt);
    dragStartLocation.set(target);
    target.set(location);
    scrollBody.useDefaultMass().useSpeed(80);
    addInteractionEvents();
    animation.start();
    startX.set(dragTracker.readPoint(evt, 'x'));
    startY.set(dragTracker.readPoint(evt, 'y'));
    events.dispatch('dragStart');
    if (clearPreventClick) preventClick = false;
    if (preventDefault) evt.preventDefault();
  }

  function move(evt) {
    if (!preventScroll && !isMouse) {
      var X = dragTracker.readPoint(evt, 'x').get();
      var Y = dragTracker.readPoint(evt, 'y').get();
      var diffX = Math.abs(X - startX.get());
      var diffY = Math.abs(Y - startY.get());
      preventScroll = diffX > diffY;
      if (!preventScroll && !preventClick) return up();
    }

    var diff = dragTracker.pointerMove(evt);
    var reachedLimit = limit.reachedAny(location.get());
    var resist = !params.loop && reachedLimit ? 2 : 1;
    if (!preventClick && diff) preventClick = true;
    target.add(diff / resist);
    evt.preventDefault();
  }

  function up() {
    var force = dragTracker.pointerUp() * dragForceBoost();
    var diffToTarget = target.get() - dragStartLocation.get();
    var isMoving = Math.abs(diffToTarget) >= 0.5;
    if (isMoving && !isMouse) preventClick = true;
    isMouse = false;
    preventScroll = false;
    pointerIsDown = false;
    interactionEvents.removeAll();
    scrollBody.useSpeed(movementSpeed());
    seekTargetBy(force);
    events.dispatch('dragEnd');
  }

  function click(evt) {
    if (preventClick) evt.preventDefault();
  }

  function clickAllowed() {
    return !preventClick;
  }

  function pointerDown() {
    return pointerIsDown;
  }

  var self = {
    addActivationEvents: addActivationEvents,
    clickAllowed: clickAllowed,
    pointerDown: pointerDown,
    removeAllEvents: removeAllEvents
  };
  return Object.freeze(self);
}

exports.DragHandler = DragHandler;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var vector1d_1 = __webpack_require__(0);

function DragTracker(pxToPercent) {
  var coords = {
    x: 'clientX',
    y: 'clientY'
  };
  var startDrag = vector1d_1.Vector1D(0);
  var diffDrag = vector1d_1.Vector1D(0);
  var lastDrag = vector1d_1.Vector1D(0);
  var pointValue = vector1d_1.Vector1D(0);
  var trackInterval = 10;
  var trackPoints = [];
  var trackTime = new Date().getTime();
  var isMouse = false;

  function readPoint(evt, axis) {
    isMouse = !evt.touches;
    var c = coords[axis];
    var value = isMouse ? evt[c] : evt.touches[0][c];
    return pointValue.set(value);
  }

  function pointerDown(evt) {
    var point = readPoint(evt, 'x');
    startDrag.set(point);
    lastDrag.set(point);
    return pxToPercent.measure(startDrag.get());
  }

  function pointerMove(evt) {
    var point = readPoint(evt, 'x');
    var time2 = new Date().getTime();
    var time1 = trackTime;

    if (time2 - time1 >= trackInterval) {
      trackPoints.push(point.get());
      trackTime = time2;
    }

    diffDrag.set(point).subtract(lastDrag);
    lastDrag.set(point);
    return pxToPercent.measure(diffDrag.get());
  }

  function pointerUp() {
    var currentPoint = lastDrag.get();
    var trackLength = isMouse ? 5 : 4;
    var point = trackPoints.slice(-trackLength).map(function (trackPoint) {
      return currentPoint - trackPoint;
    }).sort(function (p1, p2) {
      return Math.abs(p1) < Math.abs(p2) ? 1 : -1;
    })[0];
    lastDrag.set(point || 0);
    trackPoints = [];
    return pxToPercent.measure(lastDrag.get());
  }

  var self = {
    pointerDown: pointerDown,
    pointerMove: pointerMove,
    pointerUp: pointerUp,
    readPoint: readPoint
  };
  return Object.freeze(self);
}

exports.DragTracker = DragTracker;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function PxToPercent(viewInPx) {
  var totalPercent = 100;

  function measure(n) {
    return n / viewInPx * totalPercent;
  }

  var self = {
    measure: measure,
    totalPercent: totalPercent
  };
  return Object.freeze(self);
}

exports.PxToPercent = PxToPercent;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var direction_1 = __webpack_require__(4);

var utils_1 = __webpack_require__(1);

var vector1d_1 = __webpack_require__(0);

function ScrollBody(params) {
  var location = params.location,
      speed = params.speed,
      mass = params.mass;
  var roundToTwoDecimals = utils_1.roundToDecimals(2);
  var velocity = vector1d_1.Vector1D(0);
  var acceleration = vector1d_1.Vector1D(0);
  var attraction = vector1d_1.Vector1D(0);
  var direction = direction_1.Direction(0);
  var state = {
    speed: speed,
    mass: mass
  };

  function update() {
    velocity.add(acceleration);
    location.add(velocity);
    acceleration.multiply(0);
  }

  function applyForce(v) {
    v.divide(state.mass);
    acceleration.add(v);
  }

  function seek(v) {
    attraction.set(v).subtract(location);
    var magnitude = attraction.get();
    var m = utils_1.map(magnitude, 0, 100, 0, state.speed);
    direction.set(attraction);
    attraction.normalize().multiply(m).subtract(velocity);
    applyForce(attraction);
    return self;
  }

  function settle(v) {
    var diff = v.get() - location.get();
    var diffRounded = roundToTwoDecimals(diff);
    var hasSettled = !diffRounded;
    if (hasSettled) location.set(v);
    return hasSettled;
  }

  function useSpeed(n) {
    state.speed = n;
    return self;
  }

  function useDefaultSpeed() {
    useSpeed(speed);
    return self;
  }

  function useMass(n) {
    state.mass = n;
    return self;
  }

  function useDefaultMass() {
    useMass(mass);
    return self;
  }

  var self = {
    direction: direction,
    location: location,
    seek: seek,
    settle: settle,
    update: update,
    useDefaultMass: useDefaultMass,
    useDefaultSpeed: useDefaultSpeed,
    useMass: useMass,
    useSpeed: useSpeed
  };
  return Object.freeze(self);
}

exports.ScrollBody = ScrollBody;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function ScrollBounds(params) {
  var limit = params.limit,
      location = params.location,
      scrollBody = params.scrollBody,
      animation = params.animation;
  var min = limit.min,
      max = limit.max,
      reachedMin = limit.reachedMin,
      reachedMax = limit.reachedMax;
  var tolerance = 50;
  var timeout = 0;

  function shouldConstrain(v) {
    if (timeout) return false;
    if (reachedMin(location.get())) return v.get() !== min;
    if (reachedMax(location.get())) return v.get() !== max;
    return false;
  }

  function constrain(v) {
    if (!shouldConstrain(v)) return;
    timeout = window.setTimeout(function () {
      var constraint = limit.constrain(v.get());
      v.set(constraint);
      scrollBody.useSpeed(10).useMass(3);
      animation.start();
      timeout = 0;
    }, tolerance);
  }

  var self = {
    constrain: constrain
  };
  return Object.freeze(self);
}

exports.ScrollBounds = ScrollBounds;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var limit_1 = __webpack_require__(2);

var utils_1 = __webpack_require__(1);

function ScrollContain(params) {
  var alignment = params.alignment,
      contentSize = params.contentSize,
      viewSize = params.viewSize;
  var slideIndexes = params.slideIndexes,
      slidesToScroll = params.slidesToScroll;
  var indexGroups = utils_1.groupArray(slideIndexes, slidesToScroll);
  var contentExceedsView = contentSize > viewSize;
  var bounds = limit_1.Limit({
    min: -contentSize + viewSize,
    max: 0
  });

  function groupDuplicates(start, end) {
    var duplicates = indexGroups.slice(start, end);
    return duplicates.reduce(function (a, g) {
      return a.concat(g);
    }, []);
  }

  function findDuplicates(scrollSnaps) {
    var startSnap = scrollSnaps[0];
    var endSnap = scrollSnaps[scrollSnaps.length - 1];
    var min = scrollSnaps.lastIndexOf(startSnap) + 1;
    var max = scrollSnaps.indexOf(endSnap);
    return limit_1.Limit({
      min: min,
      max: max
    });
  }

  function indexes(scrollSnaps) {
    if (!contentExceedsView) return [slideIndexes];
    var containedSnaps = scrollSnaps.map(bounds.constrain);

    var _findDuplicates = findDuplicates(containedSnaps),
        min = _findDuplicates.min,
        max = _findDuplicates.max;

    var start = groupDuplicates(0, min);
    var middle = indexGroups.slice(min, max);
    var end = groupDuplicates(max, scrollSnaps.length);
    return [start].concat(middle.concat([end]));
  }

  function snaps(scrollSnaps) {
    if (!contentExceedsView) return [alignment.measure(contentSize)];
    var containedSnaps = scrollSnaps.map(bounds.constrain);

    var _findDuplicates2 = findDuplicates(containedSnaps),
        min = _findDuplicates2.min,
        max = _findDuplicates2.max;

    return containedSnaps.slice(min - 1, max + 1);
  }

  var self = {
    indexes: indexes,
    snaps: snaps
  };
  return Object.freeze(self);
}

exports.ScrollContain = ScrollContain;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var limit_1 = __webpack_require__(2);

function ScrollLimit(params) {
  var contentSize = params.contentSize,
      loop = params.loop;

  function measure(scrollSnaps) {
    var startSnap = scrollSnaps[0];
    var endSnap = scrollSnaps[scrollSnaps.length - 1];
    var min = loop ? startSnap - contentSize : endSnap;
    var max = startSnap;
    return limit_1.Limit({
      min: min,
      max: max
    });
  }

  var self = {
    measure: measure
  };
  return Object.freeze(self);
}

exports.ScrollLimit = ScrollLimit;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var limit_1 = __webpack_require__(2);

function ScrollLooper(params) {
  var contentSize = params.contentSize,
      location = params.location,
      limit = params.limit,
      pxToPercent = params.pxToPercent;
  var min = limit.min + pxToPercent.measure(0.1);
  var max = limit.max + pxToPercent.measure(0.1);

  var _limit_1$Limit = limit_1.Limit({
    min: min,
    max: max
  }),
      reachedMin = _limit_1$Limit.reachedMin,
      reachedMax = _limit_1$Limit.reachedMax;

  function shouldLoop(direction) {
    if (direction === 1) return reachedMax(location.get());
    if (direction === -1) return reachedMin(location.get());
    return false;
  }

  function loop(vectors, direction) {
    if (!shouldLoop(direction)) return;
    var loopDistance = contentSize * (direction * -1);
    vectors.forEach(function (v) {
      return v.add(loopDistance);
    });
  }

  var self = {
    loop: loop
  };
  return Object.freeze(self);
}

exports.ScrollLooper = ScrollLooper;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function ScrollProgress(params) {
  var limit = params.limit,
      loop = params.loop,
      target = params.target;
  var min = limit.min,
      max = limit.max,
      reachedMin = limit.reachedMin,
      reachedMax = limit.reachedMax;
  var scrollLength = min - max;

  function withinBounds(n) {
    var desiredTarget = target.get() + n;
    if (reachedMax(desiredTarget)) return max - target.get();
    if (reachedMin(desiredTarget)) return min - target.get();
    return n;
  }

  function get(n) {
    var currentLocation = n - max;
    return currentLocation / scrollLength;
  }

  function set(n) {
    var progressToTarget = n - get(target.get());
    return withinBounds(add(progressToTarget));
  }

  function add(n) {
    var distance = scrollLength * n;
    return loop ? distance : withinBounds(distance);
  }

  var self = {
    get: get,
    set: set,
    add: add
  };
  return Object.freeze(self);
}

exports.ScrollProgress = ScrollProgress;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var counter_1 = __webpack_require__(3);

var limit_1 = __webpack_require__(2);

function ScrollSnap(params) {
  var snapSizes = params.snapSizes,
      alignment = params.alignment,
      loop = params.loop;
  var alignments = snapSizes.map(alignment.measure);
  var distancesBetween = distancesBetweenScrollSnaps();

  function distancesBetweenScrollSnaps() {
    var limit = limit_1.Limit({
      min: 0,
      max: snapSizes.length - 1
    });
    var counter = counter_1.Counter({
      limit: limit,
      start: 0,
      loop: loop
    });
    return snapSizes.map(function (size, index) {
      var next = counter.set(index + 1).get();
      return size + alignments[index] - alignments[next];
    });
  }

  function measure(index) {
    var sizes = distancesBetween.slice(0, index);
    return sizes.reduce(function (a, s) {
      return a - s;
    }, alignments[0]);
  }

  var self = {
    measure: measure
  };
  return Object.freeze(self);
}

exports.ScrollSnap = ScrollSnap;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function ScrollTarget(params) {
  var loop = params.loop,
      limit = params.limit,
      scrollSnaps = params.scrollSnaps,
      contentSize = params.contentSize;
  var reachedMin = limit.reachedMin,
      reachedMax = limit.reachedMax,
      reachedAny = limit.reachedAny;

  function minDistance(d1, d2) {
    return Math.abs(d1) < Math.abs(d2) ? d1 : d2;
  }

  function findTargetSnap(target) {
    while (reachedMin(target)) {
      target += contentSize;
    }

    while (reachedMax(target)) {
      target -= contentSize;
    }

    var ascDiffsToSnaps = scrollSnaps.map(function (scrollSnap) {
      return scrollSnap - target;
    }).map(function (diffToSnap) {
      return shortcut(diffToSnap, 0);
    }).map(function (diff, i) {
      return {
        diff: diff,
        index: i
      };
    }).sort(function (d1, d2) {
      return Math.abs(d1.diff) - Math.abs(d2.diff);
    });
    var index = ascDiffsToSnaps[0].index;
    return {
      index: index,
      distance: target
    };
  }

  function shortcut(target, direction) {
    var t1 = target;
    var t2 = target + contentSize;
    var t3 = target - contentSize;
    if (!loop) return t1;
    if (!direction) return minDistance(minDistance(t1, t2), t3);
    var shortest = minDistance(t1, direction === 1 ? t2 : t3);
    return Math.abs(shortest) * direction;
  }

  function findTargetIndex(target, index) {
    var reachedBound = !loop && reachedAny(target);
    if (!reachedBound) return index;
    var _params$index = params.index,
        min = _params$index.min,
        max = _params$index.max;
    return reachedMax(target) ? min : max;
  }

  function byIndex(index, direction) {
    var diffToSnap = scrollSnaps[index] - params.target.get();
    var distance = shortcut(diffToSnap, direction);
    return {
      index: index,
      distance: distance
    };
  }

  function byDistance(distance, snap) {
    var target = params.target.get() + distance;
    var targetSnap = findTargetSnap(target);
    var targetIndex = findTargetIndex(target, targetSnap.index);
    var index = snap && !distance ? params.index.get() : targetIndex;
    var reachedBound = !loop && reachedAny(target);
    if (!snap || reachedBound) return {
      index: index,
      distance: distance
    };
    var diffToSnap = scrollSnaps[index] - targetSnap.distance;
    var snapDistance = distance + shortcut(diffToSnap, 0);
    return {
      index: index,
      distance: snapDistance
    };
  }

  var self = {
    byDistance: byDistance,
    byIndex: byIndex,
    shortcut: shortcut
  };
  return Object.freeze(self);
}

exports.ScrollTarget = ScrollTarget;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function ScrollTo(params) {
  var indexCurrent = params.index,
      scrollTarget = params.scrollTarget,
      animation = params.animation;
  var indexPrevious = params.indexPrevious,
      events = params.events,
      targetDistance = params.target;

  function scrollTo(target) {
    var distanceDiff = target.distance;
    var indexDiff = target.index !== indexCurrent.get();

    if (distanceDiff) {
      animation.start();
      targetDistance.add(distanceDiff);
    }

    if (indexDiff) {
      indexPrevious.set(indexCurrent.get());
      indexCurrent.set(target.index);
      events.dispatch('select');
    }
  }

  function distance(n, snap) {
    var target = scrollTarget.byDistance(n, snap);
    scrollTo(target);
  }

  function index(n, direction) {
    var targetIndex = indexCurrent.clone().set(n);
    var target = scrollTarget.byIndex(targetIndex.get(), direction);
    scrollTo(target);
  }

  var self = {
    distance: distance,
    index: index
  };
  return Object.freeze(self);
}

exports.ScrollTo = ScrollTo;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var utils_1 = __webpack_require__(1);

var vector1d_1 = __webpack_require__(0);

function SlideLooper(params) {
  var contentSize = params.contentSize,
      viewSize = params.viewSize,
      slideSizes = params.slideSizes,
      scrollSnaps = params.scrollSnaps;
  var ascItems = utils_1.arrayKeys(slideSizes);
  var descItems = ascItems.slice().reverse();
  var loopPoints = startPoints().concat(endPoints());

  function subtractItemSizesOf(indexes, from) {
    return indexes.reduce(function (a, i) {
      var size = slideSizes[i];
      return a - size;
    }, from);
  }

  function loopItemsIn(sizeOfGap, indexes) {
    return indexes.reduce(function (a, i) {
      var gapLeft = subtractItemSizesOf(a, sizeOfGap);
      return gapLeft > 0 ? a.concat([i]) : a;
    }, []);
  }

  function loopStart(sizeOfGap, indexes, from) {
    return indexes.reduce(function (a, i) {
      var gapFilled = a + slideSizes[i];
      return gapFilled < sizeOfGap ? gapFilled : a;
    }, from);
  }

  function loopPoint(indexes, from, direction) {
    var slideCount = ascItems.length - 1;
    return subtractItemSizesOf(indexes.map(function (i) {
      return (i + direction) % slideCount;
    }), from);
  }

  function loopPointsFor(indexes, from, direction) {
    var ascIndexes = indexes.slice().sort(function (a, b) {
      return a - b;
    });
    return ascIndexes.map(function (i, j) {
      var index = i;
      var initial = contentSize * (!direction ? 0 : -1);
      var offset = contentSize * (!direction ? 1 : 0);
      var slidesInSpan = ascIndexes.slice(0, j);
      var point = loopPoint(slidesInSpan, from, direction);
      var location = vector1d_1.Vector1D(-1);
      var target = vector1d_1.Vector1D(0);

      var findTarget = function findTarget(loc) {
        var t = loc > point ? initial : offset;
        return target.set(0).set(t);
      };

      return {
        point: point,
        findTarget: findTarget,
        location: location,
        index: index
      };
    });
  }

  function startPoints() {
    var gap = scrollSnaps[0] - 1;
    var indexes = loopItemsIn(gap, descItems);
    var start = loopStart(gap, indexes, 0);
    return loopPointsFor(indexes, start, 1);
  }

  function endPoints() {
    var gap = viewSize - scrollSnaps[0] - 1;
    var indexes = loopItemsIn(gap, ascItems);
    var start = loopStart(contentSize, ascItems, -viewSize);
    return loopPointsFor(indexes, -start, 0);
  }

  function loop(slides) {
    var parentLocation = params.location;
    loopPoints.forEach(function (loopTarget) {
      var findTarget = loopTarget.findTarget,
          location = loopTarget.location,
          index = loopTarget.index;
      var target = findTarget(parentLocation.get());

      if (target.get() !== location.get()) {
        slides[index].style.left = "".concat(target.get(), "%");
        location.set(target);
      }
    });
  }

  var self = {
    loop: loop,
    loopPoints: loopPoints
  };
  return Object.freeze(self);
}

exports.SlideLooper = SlideLooper;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var utils_1 = __webpack_require__(1);

function Translate(node) {
  var roundToTwoDecimals = utils_1.roundToDecimals(2);
  var translate = 0;

  function translateX(n) {
    return "translate3d(".concat(n, "%,0px,0px)");
  }

  function to(v) {
    var target = roundToTwoDecimals(v.get());
    if (translate === target) return;
    getComputedStyle(node).transform;
    node.style.transform = translateX(target);
    translate = target;
  }

  var self = {
    to: to
  };
  return Object.freeze(self);
}

exports.Translate = Translate;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function EventDispatcher() {
  var listeners = {
    destroy: [],
    dragEnd: [],
    dragStart: [],
    init: [],
    resize: [],
    scroll: [],
    select: [],
    settle: []
  };

  function dispatch(evt) {
    listeners[evt].forEach(function (e) {
      return e();
    });
    return self;
  }

  function on(evt, cb) {
    listeners[evt] = listeners[evt].concat([cb]);
    return self;
  }

  function off(evt, cb) {
    listeners[evt] = listeners[evt].filter(function (e) {
      return e !== cb;
    });
    return self;
  }

  var self = {
    dispatch: dispatch,
    off: off,
    on: on
  };
  return Object.freeze(self);
}

exports.EventDispatcher = EventDispatcher;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultOptions = Object.freeze({
  align: 'center',
  containScroll: false,
  containerSelector: '*',
  dragFree: false,
  draggable: true,
  draggableClass: 'is-draggable',
  draggingClass: 'is-dragging',
  loop: false,
  selectedClass: 'is-selected',
  slidesToScroll: 1,
  speed: 10,
  startIndex: 0
});

/***/ })
/******/ ]);
});