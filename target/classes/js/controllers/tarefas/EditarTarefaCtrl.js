angular.module('todoListApp').controller('EditarTarefaCtrl', function($scope, TarefasAPI, $location, $route, $routeParams, status, tarefa, Config) {

	$scope.statusList = status.data;
	$scope.tarefa = tarefa.data;
	$scope.titulo = Config.appTitle;
	$scope.subtitulo = Config.appEditar;
	
	$scope.calendarioAberto = false;
	
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