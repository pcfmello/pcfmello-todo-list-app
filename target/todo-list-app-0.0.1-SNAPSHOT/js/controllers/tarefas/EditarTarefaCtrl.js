angular.module('todoListApp').controller('EditarTarefaCtrl', function($scope, TarefasAPI, $location, $route, $routeParams, status, tarefa) {

	$scope.statusList = status.data;
	$scope.tarefa = tarefa.data;
	$scope.titulo = 'editar';
	
	$scope.calendarioAberto = false;
	
	$scope.insereTarefa = function(tarefa) {
		alert(tarefa.porcentagemConcluida);
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