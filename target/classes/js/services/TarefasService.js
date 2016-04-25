angular.module('todoListApp').factory('TarefasAPI',function($http, Config) {
    	
	var _getTarefasList = function() {
		return $http.get(Config.baseUrl);
	};
	
	var _getTarefa = function(id) {
		return $http.get(Config.baseUrl + '/buscaTarefa/' + id);
	};
	
	var _getStatusList = function() {
		return $http.get(Config.baseUrl + '/statuslist');
	};
	
	var _insereTarefa = function(tarefa) {
		return $http.post(Config.baseUrl, tarefa);
	};
	
	var _excluiTarefa = function(tarefa) {
		return $http.post(Config.baseUrl + "/excluir", tarefa);
	}
	
	return {
		getTarefasList: _getTarefasList,
		getTarefa: _getTarefa,
		getStatusList: _getStatusList,
		insereTarefa: _insereTarefa,
		excluiTarefa: _excluiTarefa
	}	
	
});