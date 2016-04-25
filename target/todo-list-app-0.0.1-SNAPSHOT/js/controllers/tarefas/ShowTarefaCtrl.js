angular.module('todoListApp').controller('ShowTarefaCtrl', function($scope, TarefasAPI, $location, $route, $routeParams, tarefa) {
 
	$scope.tarefa = tarefa.data;
	$scope.titulo = 'detalhes';
	
});