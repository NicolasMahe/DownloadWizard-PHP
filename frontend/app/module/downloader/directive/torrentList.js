angular.module('module_downloader')

.directive('downloaderTorrentListDirective', function() {
    return {
        restrict: 'E',
        scope: {
            'reload': '@reload'
        },
        controller: "Module_DownloaderTorrentListController",
        templateUrl: 'frontend/app/module/downloader/template/torrentList.tpl.html',
        link: function(scope) {
            
        }
    };
});