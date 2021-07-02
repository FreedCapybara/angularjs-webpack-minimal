import angular from 'angular';
import template from './app.html';

(() => {
  'use strict';

  angular.module('app', ['ngRoute']);

  angular.module('app')
    .config(config)

  config.$inject = ['$routeProvider'];

  function config($routeProvider) {

    $routeProvider.when('/', {
      template,
      controller: 'AppController',
      controllerAs: 'vm'
    });

    $routeProvider.otherwise('/');
  }

  angular.module('app')
    .controller('AppController', AppController);

  AppController.$inject = [];

  function AppController() {
    const vm = this;

    vm.count = 0;

    vm.increment = increment;

    ///////

    function increment() {
      vm.count++;
    }
  }

})();

