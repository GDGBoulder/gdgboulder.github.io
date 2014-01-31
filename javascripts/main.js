var app = angular.module("app", ['ngResource']);

app.directive("projectlist", function(){

    //console.log("Project", project);
    var template = '<div class="projectInstance">' +
        '<div class="image"><img src="{{ project.owner.avatar_url }}" /> </div>' +
        '' +
        '<div class="name">{{ project.name }}</div>' +
        '<div class="description">{{ project.description }}</div>' +
        '<a href="{{ project.clone_url }}" class="url">Project Link</a>' +
        '</div>';

    return {
        restrict:'E',
        scope: {
            project: '=project'
        },
        template: template,
        link: function (scope, element, attr){
            console.log("HEIGHT: ", element.height());
            if(element.find(".projectInstance").height() < 80){
                element.find(".projectInstance").height(80);
            }
        }
    }

});

app.controller("mainCtrl", function($scope, $resource){
    $resource("https://api.github.com/users/gdgboulder/repos").query(function (data) {
        console.log("DATA:", data);
        $scope.projects = data;
    });
});