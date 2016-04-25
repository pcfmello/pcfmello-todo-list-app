angular.module('todoListApp').value('Config', {
	
	appName: 'TODO List App',
	appTitle: 'Tarefas',
	appListar: 'listar',
	appInserir: 'inserir',
	appEditar: 'editar',
	appMostrar: 'detalhes',
	
	baseUrl: 'http://localhost:8080/todo-list-app/rest/tarefas'

});