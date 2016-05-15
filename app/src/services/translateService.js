define([], function() {

    'use strict';

    var translateService = function translateServiceRecipe($translate, $timeout, $q) {

        var self = this;

        self.getCurrent = function() {
            // normally an HTTP call to the server would take place here
            var deferred = $q.defer();

            $timeout(function() {
                deferred.resolve({
                    language: 'en-US'
                });
            }, 200);

            return deferred.promise;
        };

        self.setLocale = function() {
            var locale = "en-US";
            $translate.uses(locale);
        };

        self.isLocaleSet = function() {
            return $translate.uses() === "en-US";
        };
    };

    translateService.$inject = [
        '$translate', '$timeout', '$q'
    ];

    return translateService;

});