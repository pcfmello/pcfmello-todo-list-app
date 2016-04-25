package br.com.todo.list.app.servicesImpl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.todo.list.app.entities.Tarefa;
import br.com.todo.list.app.repositories.TarefaRepository;
import br.com.todo.list.app.services.TarefaService;

@Service
public class TarefaServiceImpl implements TarefaService {
	
	@Autowired
	TarefaRepository tarefaRepository;

	/**
	 * {@inheritDoc}
	 * 
	 * */
	@Override
	@Transactional(readOnly = true)
	public List<Tarefa> getTarefas() {
		return tarefaRepository.findAll();
	}
	
	/**
	 * {@inheritDoc}
	 * 
	 * */
	@Override
	@Transactional(readOnly = true)
	public Tarefa getTarefa(Long id) {
		return tarefaRepository.findOne(id);
	}

	/**
	 * {@inheritDoc}
	 * 
	 * */
	@Override
	@Transactional
	public Tarefa inserir(Tarefa tarefa) {
		tarefa.setDataCadastro(new Date());
		return tarefaRepository.save(tarefa);
	}

	/**
	 * {@inheritDoc}
	 * 
	 * */
	@Override
	@Transactional
	public void excluir(Long id) {
		tarefaRepository.delete(id);
	}

	

}
