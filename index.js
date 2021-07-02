import angular from 'angular';
import 'angular-route';
import './app';

(() => {
  'use strict';

  const element = document.getElementById('app');
  angular.bootstrap(element, ['app']);
})();

