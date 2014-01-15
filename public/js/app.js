'use strict';

angular.module('mean', ['ngCookies', 'ngResource', 'ngRoute', 'ui.bootstrap', 'ui.route', 'ngAnimate', 'mean.system', 'mean.articles','mean.logReader']);

angular.module('mean.system', []);
angular.module('mean.articles', []);
angular.module('mean.logReader', []);