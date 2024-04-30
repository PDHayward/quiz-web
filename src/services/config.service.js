angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'https://ebs2-env.eba-jrj4nzpe.eu-north-1.elasticbeanstalk.com/';

    return service;
}]);