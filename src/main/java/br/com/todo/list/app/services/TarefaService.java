package br.com.todo.list.app.services;

import java.util.List;

import br.com.todo.list.app.entities.Tarefa;

public interface TarefaService {

	/**
	 * RETORNA A LISTA DE TAREFAS 
	 * @author Paulo Cesar Ferreira de Mello [pcfmello@gmail.com]
	 * @return Lista de tarefas
	 * @since  22/04/2016
	 * 
	 * */
	List<Tarefa> getTarefas();

	/**
	 * INSERE UMA TAREFA NO REPOSITÓRIO
	 * @author Paulo Cesar Ferreira de Mello [pcfmello@gmail.com]
	 * @return Tarefa inserida
	 * @since  22/04/2016
	 * 
	 * */
	Tarefa inserir(Tarefa t1);

	/**
	 * EXCLUI UMA TAREFA NO REPOSITÓRIO
	 * @author Paulo Cesar Ferreira de Mello [pcfmello@gmail.com]
	 * @since  23/04/2016
	 * 
	 * */
	void excluir(Long id);

	/**
	 * BUSCA UMA TAREFA NO REPOSITÓRIO
	 * @author Paulo Cesar Ferreira de Mello [pcfmello@gmail.com]
	 * @since  23/04/2016
	 * 
	 * */
	Tarefa getTarefa(Long id);

}
