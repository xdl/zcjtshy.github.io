/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _html5Mode = __webpack_require__(6);

var _router = __webpack_require__(7);

var _stories = __webpack_require__(19);

var _home = __webpack_require__(4);

var _dotnav = __webpack_require__(3);

var _cover = __webpack_require__(2);

var _about = __webpack_require__(1);

var _support = __webpack_require__(14);

var _stories2 = __webpack_require__(16);

var _story = __webpack_require__(20);

var _nav = __webpack_require__(5);

var app = angular.module('soulRelics', ['ui.router']).config(_html5Mode.html5ModeConfig).config(_router.routerConfig).service('storiesService', _stories.storiesService);

var components = {
  'srNav': _nav.navComponent,
  'srHome': _home.homeComponent,
  'srCover': _cover.coverComponent,
  'srDotnav': _dotnav.dotnavComponent,
  'srAbout': _about.aboutComponent,
  'srSupport': _support.supportComponent,
  'srStories': _stories2.storiesComponent,
  'srStory': _story.storyComponent
};

// register all components
Object.keys(components).forEach(function (name) {
  return app.component(name, components[name]);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.aboutComponent = undefined;

var _aboutComponent = __webpack_require__(8);

var _aboutComponent2 = _interopRequireDefault(_aboutComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var aboutComponentController = ['$interval', function ($interval) {
  var _this = this;

  this.images = ['pebble.jpg', 'filippa.jpg', 'remotecontrol.png', 'plato.jpg', 'aboutblank.png'].map(function (f) {
    return 'http://soulrelicsmuseum.me/' + f;
  });
  this.active = 0;
  $interval(function () {
    _this.active = (_this.active + 1) % _this.images.length;
  }, 3500);
}];

var aboutComponent = exports.aboutComponent = {
  template: _aboutComponent2.default,
  controller: aboutComponentController
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.coverComponent = undefined;

var _coverComponent = __webpack_require__(9);

var _coverComponent2 = _interopRequireDefault(_coverComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var coverComponentController = ['$interval', function ($interval) {
  var _this = this;

  this.images = ['pebble.jpg', 'filippa.jpg', 'remotecontrol.png', 'plato.jpg', 'aboutblank.png'].map(function (f) {
    return 'http://soulrelicsmuseum.me/' + f;
  });
  this.active = 0;
  $interval(function () {
    _this.active = (_this.active + 1) % _this.images.length;
  }, 3500);
}];

var coverComponent = exports.coverComponent = {
  template: _coverComponent2.default,
  controller: coverComponentController
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dotnavComponent = undefined;

var _dotnavComponent = __webpack_require__(10);

var _dotnavComponent2 = _interopRequireDefault(_dotnavComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dotnavComponentController = ['$anchorScroll', function ($anchorScroll) {}];

var dotnavComponent = exports.dotnavComponent = {
  template: _dotnavComponent2.default,
  controller: dotnavComponentController
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.homeComponent = undefined;

var _homeComponent = __webpack_require__(11);

var _homeComponent2 = _interopRequireDefault(_homeComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var homeComponentController = function homeComponentController() {};

var homeComponent = exports.homeComponent = {
  template: _homeComponent2.default,
  controller: homeComponentController
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navComponent = undefined;

var _navComponent = __webpack_require__(12);

var _navComponent2 = _interopRequireDefault(_navComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function navController() {
  this.navs = {
    "Home": "home",
    "Stories": "stories"
  };
}

var navComponent = exports.navComponent = {
  template: _navComponent2.default,
  controller: navController
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var html5ModeConfig = exports.html5ModeConfig = ['$locationProvider', function ($locationProvider) {
  $locationProvider.html5Mode(true);
}];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var routerConfig = exports.routerConfig = ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  var homeState = {
    name: 'home',
    url: '/home',
    component: 'srHome'
  };

  var storiesState = {
    name: 'stories',
    url: '/stories',
    component: 'srStories'
  };

  [homeState, storiesState].forEach(function (s) {
    return $stateProvider.state(s);
  });

  // by default go to home state
  $urlRouterProvider.otherwise('/home');
}];

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "<div id=\"about\" class=\"uk-cover-container\" uk-height-viewport>\n  <img class=\"margin-large-top\" src=\"http://soulrelicsmuseum.me/aboutus.jpg\" uk-cover>\n  <div class=\"uk-overlay uk-position-cover uk-flex uk-flex-column uk-flex-left uk-dark\"\n    uk-scrollspy=\"cls:uk-animation-fade; offset-top: -80; repeat: true; delay: 100\"\n    style=\"background: rgba(255, 255, 255, 0.8)\">\n    <div style=\"margin-top: 80px\">\n      <div class=\"uk-flex\">\n        <h1 class=\"title\">About us</h1>\n      </div>\n    </div>\n    <div class=\"uk-overflow-auto\">\n      <div class=\"uk-flex\">\n        We believe everyone has a story to tell.\n      </div>\n      <div class=\"uk-flex uk-width-2-3@m uk-margin-top\">\n        Yet, many stories are untold, hidden, or suppressed.\n      </div>\n      <div class=\"uk-flex uk-width-2-3@m uk-margin-top\">\n        Soul Relics is an online platform on storytelling, objects and mental health. We are dedicated to respond to these issues using creative media and stories.\n      </div>\n      <div class=\"uk-flex uk-width-2-3@m uk-margin-top\">\n        We anchor our memories with objects. By creating an open platform for connections to form between our individual stories, and letting each person use objects to express a fragment of past/ present personal account of mental ill health and recovery, we hope to create a collective message that transcends barriers between people, and challenges the stigma surrounding mental health.\n      </div>\n      <div class=\"uk-flex uk-width-2-3@m uk-margin-top\">\n        Ultimately, we hope the platform will capture both unique experiences and common themes. We wish to provide a new way for people to tell and understand others’ stories.\n      </div>\n      <div class=\"uk-flex uk-width-2-3@m uk-margin-top\">\n        If you agree with the cause, please read our stories, and/or send yours. You can also look at the vision statement on Medium .\n      </div>\n      <div class=\"uk-flex uk-width-2-3@m uk-margin-top\">\n        It is a gallery of photos of objects and personal stories that are related to a difficult time of your lives (A period of mental ill health); and/or something that helped you work towards recovery. That object can be anything of personal significance, or/and represent institutional barrier to mental health care, etc.\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "<div id=\"home\" class=\"uk-cover-container\" uk-height-viewport>\n  <img class=\"margin-large-top\" ng-repeat=\"image in $ctrl.images\" ng-src=\"{{image}}\" uk-cover ng-class=\"{'transparent': $ctrl.active != $index}\"\n  style=\"transition:opacity 1s linear;\">\n  <div class=\"uk-overlay uk-position-cover uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-light\"\n    style=\"background: rgba(205, 102, 0, .8); margin-top: 80px\">\n    <div class=\"uk-flex uk-text-center\">\n      <h1 class=\"title\">SOUL RELICS</h1>\n    </div>\n    <div class=\"uk-flex uk-text-center\">\n      Soul Relics is an online platform on storytelling, objects and mental health.\n    </div>\n    <div class=\"uk-flex uk-width-1-2@m uk-text-center uk-margin-top\">\n      It is a gallery of photos of objects and personal stories that are related to a difficult time of your lives (A period of mental ill health); and/or something that helped you work towards recovery. That object can be anything of personal significance, or/and represent institutional barrier to mental health care, etc.\n    </div>\n    <div class=\"uk-flex uk-margin-medium-top\">\n      <a href=\"#about\" uk-icon=\"icon: chevron-down; ratio: 2\" uk-scroll></a>\n    </div>\n  </div>\n</div>\n";

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-dark\">\n  <ul class=\"uk-dotnav uk-dotnav-vertical\" uk-scrollspy-nav=\"cls: uk-active; closest: li; scroll: true;\">\n    <li><a href=\"#home\">Item 1</a></li>\n    <li><a href=\"#about\">Item 2</a></li>\n    <li><a href=\"#support\">Item 2</a></li>\n  </ul>\n</div>\n";

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-position-relative\">\n  <sr-cover></sr-cover>\n  <sr-about></sr-about>\n  <sr-support></sr-support>\n\n  <div class=\"uk-position-fixed uk-position-center-right uk-position-medium uk-visible@m\">\n    <sr-dotnav></sr-dotnav>\n  </div>\n\n  <div class=\"uk-position-fixed uk-position-top\">\n    <sr-nav></sr-nav>\n  </div>\n</div>\n";

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-hidden@m\">\n  <nav class=\"uk-navbar-container\" uk-navbar>\n    <div class=\"uk-navbar-left\">\n      <a class=\"uk-navbar-toggle\" uk-navbar-toggle-icon uk-toggle=\"target: #offcanvas-nav\"></a>\n    </div>\n    <div class=\"uk-navbar-center\">\n      <a class=\"uk-navbar-item uk-logo\" href=\"#\">Soul Relics</a>\n    </div>\n  </nav>\n\n\n  <div id=\"offcanvas-nav\" uk-offcanvas=\"mode: push; overlay: true\">\n    <div class=\"uk-offcanvas-bar\">\n\n      <ul class=\"uk-nav uk-nav-primary\">\n        <li ng-repeat=\"(name, state) in $ctrl.navs\" ui-sref-active=\"uk-active\">\n          <a ui-sref=\"{{ state }}\" uk-toggle=\"target: #offcanvas-nav\">{{ name }}</a>\n        </li>\n      </ul>\n\n    </div>\n  </div>\n</div>\n\n<div class=\"uk-visible@m\">\n  <nav class=\"uk-navbar-container\" uk-navbar>\n    <div class=\"uk-navbar-left\">\n      <a class=\"uk-navbar-item uk-logo\" href=\"#\">Soul Relics</a>\n      <ul class=\"uk-navbar-nav\">\n        <li ng-repeat=\"(name, state) in $ctrl.navs\" ui-sref-active=\"uk-active\">\n          <a ui-sref=\"{{ state }}\">{{ name }}</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</div>\n";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supportComponent = undefined;

var _supportComponent = __webpack_require__(15);

var _supportComponent2 = _interopRequireDefault(_supportComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var supports = [{
  title: 'General Mental Health Support',
  meta: 'Organisations offering information and support on a wide range of mental health problems',
  links: {
    'Mind': 'http://www.mind.org.uk/information-support/',
    'Rethink': 'https://www.rethink.org/',
    'Big White Wall': 'https://www.bigwhitewall.com/landing-pages/landingV3.aspx?ReturnUrl=%2f',
    'Time to Change': 'http://www.time-to-change.org.uk/'
  }
}, {
  title: 'For those suffering from depression',
  links: {
    'Charlie Waller Memorial Trust': 'http://www.cwmt.org.uk/'
  }
}, {
  title: 'For those suffering from anxiety',
  links: {
    'Anxiety UK': 'https://www.anxietyuk.org.uk/'
  }
}, {
  title: 'For those suffering from Obsessive Compulsive Disorder',
  links: {
    'OCD Action': 'http://www.ocdaction.org.uk/'
  }
}, {
  title: 'For those suffering from Body Dysmorphic Disorder',
  links: {
    'Body Dysmorphic Disorder Foundation': 'http://bddfoundation.org/'
  }
}];

var supportComponentController = [function () {
  var $ctrl = this;
  $ctrl.supports = supports;
}];

var supportComponent = exports.supportComponent = {
  template: _supportComponent2.default,
  controller: supportComponentController
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "<div id=\"support\" class=\"uk-cover-container\" uk-height-viewport>\n  <img class=\"margin-large-top\" src=\"http://soulrelicsmuseum.me/infosupport.jpg\" uk-cover>\n  <div class=\"uk-overlay uk-position-cover uk-dark uk-flex uk-flex-column \"\n    uk-scrollspy=\"cls:uk-animation-fade; offset-top: -80; repeat: true; delay: 100\"\n    style=\"background: rgba(191, 255, 242, 0.8)\">\n    <div style=\"margin-top: 80px\">\n      <h1 class=\"title\">Support and Information</h1>\n      Places to find mental health support online\n    </div>\n    <div class=\"uk-overflow-auto\">\n\n      <div class=\"uk-child-width-1-3@m uk-grid-small uk-grid-match\" uk-grid>\n        <div ng-repeat=\"support in $ctrl.supports\">\n          <div class=\"uk-card uk-margin-top\" style=\"background: #FFF\">\n            <div class=\"uk-card-header\">\n              <h3 class=\"uk-card-title\">{{ support.title }}</h3>\n              <p ng-if=\"support.meta\" class=\"uk-text-meta\">{{ support.meta }}</p>\n            </div>\n            <div class=\"uk-card-body\">\n              <ul class=\"uk-list\">\n                <li ng-repeat=\"(title, link) in support.links\"><a href=\"{{link}}\">{{title}}</a></li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storiesComponent = undefined;

var _storiesComponent = __webpack_require__(17);

var _storiesComponent2 = _interopRequireDefault(_storiesComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storiesComponentController = ['storiesService', function (storiesService) {
  var $ctrl = this;
  $ctrl.stories = [];
  storiesService.getStories().then(function (stories) {
    $ctrl.stories = stories;
  });
}];

var storiesComponent = exports.storiesComponent = {
  template: _storiesComponent2.default,
  controller: storiesComponentController
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top: 100px\">\n  <div class=\"uk-container uk-container-large\">\n    <div class=\"uk-column-1-2@m uk-column-1-3@l uk-column-1-4@xl\">\n      <sr-story ng-repeat=\"story in $ctrl.stories\" story=\"story\"></sr-story>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"uk-position-fixed uk-position-top\">\n  <sr-nav></sr-nav>\n</div>\n";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var stories = exports.stories = [{
  id: 0,
  title: 'A Remote Control',
  name: '',
  image: './remotecontrol.png',
  filter: [],
  story: 'Because I used to steal them when I had OCD to save the people from mind poison and keep the trajectories of their life force. I don’t do it (much) anymore – but I own over 267 remote controls – sorry!'
}, {
  id: 1,
  title: '138',
  name: 'Sarah',
  image: './flower.png',
  filter: ['stress'],
  story: 'I had left my job due to severe stress and did not have a job to go to. I was very low and lacking in self-confidence. I started to make myself go for little local walks from my home in the middle of the city. In places where there were lots of people I felt lost, they all seemed full of purpose and direction compared to me. I didn\'t belong. Then I started to notice small pockets of nature that were managing to thrive in harsh conditions. Noticing and then photographing this nature in the urban environment gave me a focus and, looking back, I suppose was a kind of metaphor for hope in bleak surroundings. It was a kind of mindfulness that enabled me to connect again. This photograph is one of those I took during this time of a beautiful lilac blossom growing in a parking bay on the estate where I live. '
}, {
  id: 2,
  title: 'Clothes Drier',
  name: '',
  image: '',
  filter: [],
  story: 'I would put in my clothes drier (clothers rack). It symbolises my escape from an abusive relationship and my new start in discouraging myself'
}, {
  id: 3,
  title: '',
  name: 'Sarah',
  image: 'glass.jpg',
  filter: [],
  story: 'A shard of glass, from the bathroom window I smashed when I was 20. The object says more than I can put into words, because I could never really explain satisfactorily to anyone else why I did it. I felt constantly trapped at the time. I was sure my skull was contracting, slowly crushing my brain, and I needed to do something drastic to break free. I often thought about smashing windows. I’ve always been quite attached to buildings, and it seemed quite natural to regard a window as an extension of myself. So one day I put my fist through one. It was a double-glazed pane, and I still remember the ‘boom’ when the inner glass broke as the sound of freedom. My flatmates, who had to clean up the mess while I trod all over the broken glass in bare feet, were of an entirely different opinion.'
}, {
  id: 4,
  title: 'Filippa',
  name: 'Kate',
  image: 'filippa.jpg',
  filter: ['anxiety', 'depression'],
  story: 'Whenever I have a breakdown and I\'m on the verge of despair and don\'t feel like talking to anyone I want to retreat in bed into my own world and just cry in my pillow and squeeze my strawberry Filippa. The idea of calling someone seems pointless or stressful on those moments, so in that sense Filippa has "seen" more sides and states of me than some of the closest people. Just hugging a soft and happy-looking is sometimes enough for me to come back to more manageable feelings.'
}, {
  id: 5,
  title: '',
  name: '',
  image: '',
  filter: [],
  story: 'A used toothbrush on a bathroom shelf. Inside a toothbrush holder next to the toothpaste as it always is. The only thing is that this toothbrush should not be there. It should be in someone\’s bag while travelling for work.When I saw it, at 10:15 pm that night the world ended and a new one started. You see, this is how the clueless me found out that my partner of 16 years was having an affair with (a most boring) friend. He chose her. They were together for a year by then. I died. The following months after were the most difficult and painful. The first month of being on my own and all that this meant I had all the physical symptoms of the broken heart. I thought seriously constantly of how I might die of how people do die of this. \\n\\n Friends were fabulous and picked me up. Then a beautiful man took my hand and led me out of the darkness, less than a month later, the 100 years later. One day at a time, one minute at a time, one second that the pain isn’t there anymore. Now I am someone who’s more beautiful.'
}, {
  id: 6,
  title: 'Crutches',
  name: '',
  image: '',
  filter: [],
  story: 'My crutches - recovery but also now permanent. They keep me mobile but have caused other problems for my body (arthritis etc). They are a mixed blessing but they are a visible symbol of how I manage my invisible condition. They represent my normal.'
}, {
  id: 7,
  title: 'Enlightening',
  name: 'Davidinio',
  image: 'plato.jpg',
  filter: [],
  story: 'In essence, I always followed the status quo, lived by the motions, and did what every good studious medical student/youthful party goer should - study medicine, go out and get drunk, and repeat. I never had any ambition or imagination, because there was no impetus to - the path for my life was largely carved out, and there was no need for me to do anything really, as I was rather content and didn\'t see the point of wasting time and energy. \\n\\n But then I went through a very tough few months of exams, where I experienced strong feelings of anxiety, guilt, self-loathing, and the lot, and it escalated into a full state of depression mixed with anxiety. I lacked self-awareness and mental health awareness to truly understand what was going on and to be able to see the root causes of my poor state of mind. I was also thrown into a state of existentialism - repeatedly thinking \'I hate this shit. Why on Earth am I doing it? Who decided my fate? Why can I not do something else? Is this really the best my life can be?\' I felt that such analysis was vacuous and out of place, and that I would be absconded by anyone were I to voice my nihilistic utterings, especially given my good situation and blessings in life. I simply did not have a tool, or the comprehension, to commence vivaciously re-analysing my life and re-structuring it for the better. \\n\\n A lack of understanding and self-awareness led to an apathy of action. If I had truly known that what I experienced was outside the realms of tolerability perhaps I would have been poised to act differently. But I didn’t.  There was no attempt at any level to bulwark myself against the return of this chaotic phenomenon. Of course, it transpired again, and again, and again. Year on year while at university, the episodes would be darker and unbearably longer, each one worse than the last. I would only blame myself for feeling so poorly, believing that my sadness was the inevitable consequence of my many failures and imperfections, each of which I simply had to work on harder. It was an ecosystem of destructiveness permeating through my everyday life: I would be incapable of simple work or simple social interactions, and this reliably made me feel like more of a failure and an alien – and so it went on. Though I picked up knowledge about mental health from the course, it was very hard to conjoin my subjective experience with the objective understanding of medical sciences, and to truly believe that perhaps my mind may be defective in some way. Indeed, this was the hardest part of the entire ordeal, and why it took so long and required for things to get so bad. Being honest with yourself and saying that you may have a mental health problem can be very difficult, especially if you come from a background of hushed whispers and destructive taboos surrounding mentality, a robust illusion of complete autonomy over your thoughts and mood, and little exposure to genuine understanding of the mind. These experiences were reduced to a simple interpretation of life – that the universe was unpleasant and interspersed with painful things, and amidst its evils there seems to be only the bitter reality of confusion and dejection; while the conscious experience is stable, pre-determined, and hollow. I felt like I was destined to spend most of my future life feeling rather unhappy. I would cry out to question and penetrate the bleak walls of such realities, but my pleas would not be answered. My mind would respond defensively, asserting that I ought to persist with what I had been taught, and leave the ostensible emptiness of my requests behind me.  If getting to the crux of the questions did not seem to be in the realms of possibility; changing the answers that they enshrined was a fantasy tale. The solutions are simple - find that brave face, smile, and push on. Life cannot be changed. You cannot be changed. \\n\\n There was a glimmer of disgruntlement at such a tenuous conclusion. It was to become my saviour. I began realising that there were scattered happy moments that fleeted by. Rather, there were moments free of pain, where I had slither of equanimity and true joy. Yet, I did not understand how these feelings came about – nor did I have any stimulus to. Since no one talked about the landscape of subjective states, of what constitutes the good life, of the roots of happiness, I did not stumble across these ideas readily. Besides, there were so many significant and imperative objectives to focus on – becoming a doctor, becoming successful, being a good person – who has time for this self-indulgent pursuit of centring one’s attention on personal happiness when there is so much to be thinking about? \\n\\n Yet, some part of me could not be satisfied with this answer. I yearned I and searched for meaning to existence, something to cling on to, an answer, a hope. The vacuous questions regarding the objective constitutions of happiness and meaning for which I searched for yielded the same vacuous answers of complicated empty words stringed together in sentences by highbrow academics that voiced anything but candid depictions of life. \\n\\n But one day, through a series of coincidences, I picked up my first ever intellectual and philosophical book - The Republic. The beauty of the analytical, honest and in depth scrutiny of Socrates demonstrated to me the limitless potential to create and shape our vlaues, to sculpt our lives, and to live fervently with the truth. It demonstrated that the status quo, and what all of my friends and family were doing, were not necessarily correct. This catalysed two things: one, a love of knowledge, reading and understanding of the world, which to this day adds incredible joy and stimulation to my days and embellishes my projects, and indeed my life, in a meaningful and fun context. The other, a confidence in my self, and a relentless pursuit of what is true and what is good. This has prevented relapses into depressive states, as I know myself better and am more aware of my mental landscape, nurturing it gently, and directing my awareness to things that deserve it. It has also made a more moral, more unique, and more connected person. Credit to Socrates!'
}, {
  id: 8,
  title: 'Pebble',
  name: 'Steph',
  image: 'pebble.jpg',
  filter: [],
  story: 'During my first two years as an undergraduate law student, I often sat down by a field that was in the centre of the campus, watching the sun fall on the grass and on the pebbles that bordered the field. The days were hot, muggy and often hazy, an atmosphere which seemed to be reflected in the inside of my mind. Coming into my early twenties and put into a state of unrest by the changes in my life, I was feeling mind crack under mounting internal tension and anxiety. I spent hours hammering the same questions in my head, wondering who I was, what I should feel and where I should situate my sense of meaning. I tried to avoid reading and writing, feeling like the words would suffocate me. If I put pen to paper I could never be satisfied. I wrote and cancelled and re-wrote, the end product being a mess of scratch marks and scribbles which did not in any way resemble what I wanted to project. I got lost and then got lost about being lost and was often a mess. \\n\\n One day a friend of mine picked this very round pebble from the pile. “Useless as a paperweight,” he said. “But that doesn’t make it of any less worth as a stone”. I carried it around in my bag for the next few months. The feel of it, small but solid and certain in my palm, gave me comfort. Small gifts like these made me feel like little parts of myself were being restored to me, and helped me on the way towards finding the sense of assurance, composure and hopefulness I needed to move forward.'
}, {
  id: 9,
  title: 'Blank',
  name: '',
  image: './aboutblank.png',
  filter: [],
  story: 'The title bar from the internet when I was googling methods to commit suicide'
}, {
  id: 10,
  title: 'Escape',
  name: 'Reb',
  image: 'paperclip.jpg',
  filter: ['BPD'],
  story: 'I chose this object as it\'s where my addiction to self harm started. I remember being roughly 13 years old and hiding behind a sofa in my living room crying my eyes out as I had this overwhelming emotional pain sweep over me, my palms were sweaty and I was finding it hard to breathe as my heart pounded so fast and thoughts spun around uncontrollably in my mind! \\n\\n I had this paper clip in my hand at the time and one thought went through my head which changed everything, \'what if this emotional pain could be counteracted by physical pain?\' and with that thought I unraveled the paper clip took it to my wrist and for a moment I was free I had escaped! Little knowing that in reality a whole new battle had begun.'
}, {
  id: 11,
  title: 'New beginnings',
  name: 'Sophie',
  image: 'drum.jpg',
  filter: ['eating disorders'],
  story: 'I remember many years ago I was very ill and was in denial. My parents were absolutely mad at me and could not understand me. My dad even broke part of my drum set, something that I deeply treasured. I could vividly remember that scene when he was so infuriated, shouting and threatening to throw the instrument away. I just sat there, crying with angry tears, feeling helpless and not understood. \\n\\n Months later I agreed to be voluntarily sectioned and I met one of the most friendly people I have ever met in my life in the ward. The doctors and nurses understood that my music exam was coming up so they let me to take the drum set to a quiet room in the ward to practice. Everyone said I was talented. Being well enough to attend the exam became one of my biggest motivations in life then, and I ended up with high distinction. \\n\\n Memories (painful ones and joyful ones) came back to me every time I rehearse and practise, but it has now provided a new definition and narrative to my life.'
}, {
  id: 12,
  title: 'Words from Heaven',
  name: 'John',
  image: 'book_loved_myself_enough.jpg',
  filter: [],
  story: 'This book gave me the revelation; that maybe, just maybe, I should love myself. Be kind. Stop beating up... etc. A total revelation and revolution.'
}, {
  id: 13,
  title: 'Win',
  name: 'Jennifer',
  image: 'win.jpeg',
  filter: [],
  story: 'If like me you have been involved in a few tussles over the years, can you also say that some of the worse confrontations were with those you thought understood you or those you were close to? There are at least three things that can be done when being confronted or attacked. One can stand there and be insulted, move away from the situation, or defend oneself. \\n\\n In the book of Timothy we are told, “Fight the good fight of faith, lay hold on eternal life.” What are you or I to do then? “Fight the good fight of faith.” That sounds great but, what exactly is the “fight of faith” especially when there is a sense of feeling so alone. Hence, I add YOU ARE NOT alone. Others are also fighting too, and within that there is the awareness that I or you are not the sad deceived soul who needs to get a life. Our enemy wants us to think we are the odd one out. The more this thought pattern is eliminated from our minds, the stronger we will grow. This is why the enemy has tries to keep us isolated. I am told that solitary confinement is the worst place to be in prison. In order to or us to fight we need to be strong and to attempt fighting whilst in confinement will place you only two steps backwards from where you are now. \\n\\n For most people a good fight is a fight that you win. That is why therefore we must never give up. The stakes are too high. Quitting is not an option. To quit is to admit defeat. Any soldier or those in the middle of a battle have to go through a course of training before they receive an assignment. During this time they go through a very rigorous physical and mental time of training. \\n\\n The sole purpose of this training is to get us ready and prepared to do the job, and be properly equipped to do whatever it takes to get the job done even under the harshest environments. However we are not doing physical battle such as what military soldiers do, we are doing spiritual battle and the training we do is in the spiritual realm. We have been given God’s amour to do battle, to defend ourselves from the onslaught of the enemy, and to take back what has been rightfully purchased for us. This doesn’t mean there won’t be a fight; it means we just keep on fighting with God’s spiritual weapons. This means that with our eyes of understanding, we have an answer. Be aware that the enemy will work overtime to keep us from seeing the key issue of the battle. Any fighter without endurance is a fighter who will eventually give up especially during the time of mental battle.'
}, {
  id: 14,
  title: 'A White Wall',
  name: 'Jon',
  image: 'Whitepaint.jpg',
  filter: ['paranoia'],
  story: 'Staring off into space, facing a wall, many years ago, I messed up my meditation practice on a long solitary retreat. It gave me paranoia. \\n\\n  I came away from the retreat with a nagging sense of dread. I became frightened of the prospect of anthrax attacks in London, then of sarin attacks on the underground. I was frightened of a then little known disease in Uganda, called Ebola. I was frightened about outbreaks of smallpox. Of heart attacks. Of skin cancer. Of many things. I would have months of mental quiet, when life would normally be very sunny and then the paranoia would come back and typically it would be a little worse. \\n\\n I would ask my local meditation teachers. They would be concerned and have ideas but very quickly refer me onto a more senior teacher. I\'d speak to my senior teachers and they would make suggestions and those wouldn\'t work and time would go on and I\'d get worse. I developed a bigger and bigger meditation "toolkit" for dealing with my fear and the tools would all work for a bit then they would all break. \\n\\n I moved my job from central London to South West London because, when I looked at the prevalent wind directions I thought that I\'d be safe from any airbourne toxins. We went to war against Iraq, so I moved to Newcastle. I alternated between happy times and all-pervasive fear, which could manifest as terror on retreat. \\n\\n Before moving to Newcastle I went on another month\'s solitary retreat and my teacher saw me every day in the meditation hall, looking really uptight. I asked for an interview and he looked really quite nervous - he was wiping the sweat off his bald head. \\n\\n He said, "Listen, this is a new practice I\'m giving you. Do nothing. No space, no time. Just let your Buddha nature take care of it." I thought this was absolutely crazy - I sat there with my jaw hanging open. I was struggling with my sanity and he was giving me what sounded an impossibly advanced practice to deal with the problem. \\n\\n But I resolved to try it - feeling if this doesn\'t work, how\'s even the relationship with my teacher? Will I be I completely lost? So I sat and let go - I didn\'t even let go, I literally did nothing. After years of meditation I had the skills to do that, for an extended period. \\n\\n And it worked. Sitting staring at the wall, I felt the tension be replaced by a sense of - sensibleness, groundedness. I felt my good judgment fall naturally into place. I realized for the first time how far I had been making the whole whirl of frightened thoughts spin around in my mind.\\n\\n I broke the advanced practice up with some other practices as I knew my mind could get bored - but, I felt the tension break - properly, and real confidence come in. \\n\\n On the coach back to London, the city felt safe again. In the subsequent 13 years I have barely experienced paranoia again.'
}];

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storiesService = undefined;

var _stories = __webpack_require__(18);

var storiesService = exports.storiesService = [function () {
  // Promise is used so that later one could easily change this service to call asynchronously to a server to fetch stories
  this.getStories = function () {
    return Promise.resolve(_stories.stories);
  };
}];

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storyComponent = undefined;

var _storyComponent = __webpack_require__(21);

var _storyComponent2 = _interopRequireDefault(_storyComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MAX_WORD_COUNT = 50;

var storyComponentController = ['$sce', '$location', function ($sce, $location) {
  var modal_id;
  var $ctrl = this;
  $ctrl.zoomed = false;

  $ctrl.facebook_share_iframe_url = $sce.trustAsResourceUrl('https://www.facebook.com/plugins/share_button.php?href=' + encodeURIComponent(window.location.href) + '&layout=button&size=small&mobile_iframe=true&width=59&height=20');

  $ctrl.$onInit = function () {
    modal_id = 'story' + $ctrl.story.id;
    $ctrl.story.short = $ctrl.story.story.split(' ', MAX_WORD_COUNT).join(' ');
    if ($ctrl.story.image) $ctrl.story.image = "http://soulrelicsmuseum.me/" + $ctrl.story.image;
    $ctrl.story.name = $ctrl.story.name || '(Anonymous)';

    $ctrl.zoom = function () {
      $location.hash(modal_id);
      $ctrl.zoomed = true;
    };
  };

  // set timeout with 0 so that the listening is registered when all the DOM are rendered
  setTimeout(function () {
    $('#' + modal_id).on('hidden', function () {
      window.location.hash = '';
      $ctrl.zoomed = false;
    });
    if (modal_id === $location.hash()) $('a[href="#' + modal_id + '"]').trigger('click');
  }, 0);
}];

var storyComponent = exports.storyComponent = {
  bindings: {
    story: '='
  },
  template: _storyComponent2.default,
  controller: storyComponentController
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "<a ng-click=\"$ctrl.zoom()\" href=\"#story{{$ctrl.story.id}}\" uk-toggle>\n  <div class=\"uk-card uk-card-default uk-card-hover uk-margin-medium-bottom\" style=\"display: inline-block\">\n    <div class=\"uk-card-media-top\" ng-if=\"$ctrl.story.image\">\n      <img src=\"{{$ctrl.story.image}}\">\n    </div>\n    <div class=\"uk-card-body\">\n      <h3 ng-if=\"$ctrl.story.title\" class=\"uk-card-title\">{{ $ctrl.story.title }}</h3>\n      <p>{{ $ctrl.story.short }}</p>\n      <span ng-if=\"$ctrl.story.name\" class=\"uk-text-meta\">— {{ $ctrl.story.name }}</span>\n    </div>\n  </div>\n</a>\n\n<div id=\"story{{$ctrl.story.id}}\" ng-class=\"{'uk-modal-full': $ctrl.story.image}\" uk-modal>\n  <div ng-if=\"$ctrl.zoomed && $ctrl.story.image\" class=\"uk-modal-dialog\">\n    <button class=\"uk-modal-close-full uk-close-large\" type=\"button\" uk-close></button>\n    <div class=\"uk-grid-collapse uk-child-width-1-2@s uk-flex-middle\" uk-grid>\n      <div class=\"uk-background-cover\" style=\"background-image: url('{{$ctrl.story.image}}');\" uk-height-viewport></div>\n      <div class=\"uk-padding-large\">\n        <h1>{{$ctrl.story.title}}</h1>\n        <p>{{$ctrl.story.story}}</p>\n        <span class=\"uk-text-meta\">— {{$ctrl.story.name}}</span>\n        <p>\n          <iframe src=\"{{$ctrl.facebook_share_iframe_url}}\" width=\"59\" height=\"20\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\" allowTransparency=\"true\"></iframe>\n          <a href=\"https://twitter.com/share\" class=\"twitter-share-button\" data-url=\"{{window.location.href}}\" data-show-count=\"false\">Tweet</a><script async src=\"//platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>\n        </p>\n      </div>\n    </div>\n  </div>\n\n  <div ng-if=\"$ctrl.zoomed && !$ctrl.story.image\" class=\"uk-modal-dialog uk-modal-body\">\n    <button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>\n    <h2 class=\"uk-modal-title\">{{$ctrl.story.title}}</h2>\n    <p>{{$ctrl.story.story}}</p>\n    <span class=\"uk-text-meta\">— {{$ctrl.story.name}}</span>\n    <p>\n      <iframe src=\"{{$ctrl.facebook_share_iframe_url}}\" width=\"59\" height=\"20\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\" allowTransparency=\"true\"></iframe>\n      <a href=\"https://twitter.com/share\" class=\"twitter-share-button\" data-url=\"{{window.location.href}}\" data-show-count=\"false\">Tweet</a><script async src=\"//platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>\n    </p>\n  </div>\n</div>\n";

/***/ })
/******/ ]);