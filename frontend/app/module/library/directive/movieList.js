angular.module('module_library')

.directive('libraryMovieListDirective', function() {
    return {
        restrict: 'E',
        scope: {
        },
        controller: "Module_LibraryMovieListController",
        templateUrl: 'frontend/app/module/library/template/movieList.tpl.html',
        link: function(scope) {
            
        }
    };
});