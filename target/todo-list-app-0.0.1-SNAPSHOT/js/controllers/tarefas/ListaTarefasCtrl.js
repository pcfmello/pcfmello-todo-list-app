angular.module('todoListApp').controller('ListarTarefasCtrl', function($scope, TarefasAPI, $location, $route, tarefas) {

	$scope.tarefasList = tarefas.data;
	$scope.titulo = 'lista';
	
	$scope.novaTarefa = function() {
		$scope.tarefa = {};
		$location.path("/tarefas/new");
	}
	
	$scope.editaTarefa = function(tarefa) {
		TarefasAPI.getTarefa(tarefa).success(function(data, status) {			
			$scope.tarefa = data;
			$location.path("/tarefas/edit");
		});		
	}
	
	$scope.excluiTarefa = function(tarefa) {
		TarefasAPI.excluiTarefa(tarefa).success(function(status) {
			$route.reload();
		});
	}	
	
	$scope.showTarefa = function(tarefa) {
		$location.path("/tarefas/show");
	}
	
	$scope.cancelaTarefa = function(tarefa) {
		$location.path("/tarefas");
		$route.reload();
	}
	
	$scope.limpaDados = function() {
		$scope.tarefa = {};
	}
	
});