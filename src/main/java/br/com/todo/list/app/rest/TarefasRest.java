package br.com.todo.list.app.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.todo.list.app.entities.Status;
import br.com.todo.list.app.entities.Tarefa;
import br.com.todo.list.app.services.StatusService;
import br.com.todo.list.app.services.TarefaService;

@RestController
@RequestMapping("/rest")
public class TarefasRest {

	@Autowired
	private TarefaService tarefaService;
	
	@Autowired
	private StatusService statusService;
	
	@ResponseBody
	@RequestMapping(value = "/tarefas")
	public List<Tarefa> getTarefasList() {
		return tarefaService.getTarefas();
	}
	
	@ResponseBody
	@RequestMapping(value = "/tarefas/statuslist")
	public List<Status> getStatusList() {
		return statusService.getStatus();
	}
	 
	@RequestMapping(value = "/tarefas", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<Tarefa> inserir(@RequestBody Tarefa tarefa) { 
		tarefaService.inserir(tarefa);
		return new ResponseEntity<>(tarefa, HttpStatus.CREATED);
	}
	
	@RequestMapping(value = "/tarefas/excluir", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<Tarefa> exclui(@RequestBody Tarefa tarefa) {	
		tarefaService.excluir(tarefa.getId());		
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@RequestMapping(value = "/tarefas/buscaTarefa/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody Tarefa getTarefa(@PathVariable Long id) { 
		return tarefaService.getTarefa(id);
	}

}
