angular.module('todoListApp').controller('ShowTarefaCtrl', function($scope, TarefasAPI, $location, $route, $routeParams, tarefa, Config) {
 
	$scope.tarefa = tarefa.data;
	$scope.titulo = Config.appTitle;
	$scope.subtitulo = Config.appMostrar;
	
});