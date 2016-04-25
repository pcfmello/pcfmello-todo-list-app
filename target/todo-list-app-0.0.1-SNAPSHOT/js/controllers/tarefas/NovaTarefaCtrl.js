angular.module('todoListApp').controller('NovaTarefaCtrl', function($scope, TarefasAPI, $location, $route, $routeParams, status) {
    
	$scope.statusList = status.data;
	$scope.titulo = 'inserir';
	
	$scope.insereTarefa = function(tarefa) {
		TarefasAPI.insereTarefa(tarefa).success(function(data, status) {
			$location.path("/tarefas");
		});
	}
	
	$scope.limpaDados = function() {
		$scope.tarefa = {};
	}
	
	$scope.mostraCalendario = function() {
		$scope.calendarioAberto = true;
	}
});