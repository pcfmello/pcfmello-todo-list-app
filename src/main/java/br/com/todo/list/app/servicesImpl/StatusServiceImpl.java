package br.com.todo.list.app.servicesImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.todo.list.app.entities.Status;
import br.com.todo.list.app.repositories.StatusRepository;
import br.com.todo.list.app.services.StatusService;

@Service
public class StatusServiceImpl implements StatusService {
	
	@Autowired
	StatusRepository statusRepository;

	/**
	 * {@inheritDoc}
	 * 
	 * */
	@Override
	@Transactional(readOnly = true)
	public List<Status> getStatus() {
		return statusRepository.findAll();
	}

}
