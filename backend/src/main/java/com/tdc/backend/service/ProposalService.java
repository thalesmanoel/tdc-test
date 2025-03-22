package com.tdc.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tdc.backend.entities.Proposal;
import com.tdc.backend.repository.ProposalRepository;
import com.tdc.backend.service.exception.ResourceNotFoundException;

@Service
public class ProposalService {

	@Autowired
	private ProposalRepository repository;

	public Proposal createProposal(Proposal proposal) {
		return repository.save(proposal);
	}

	public List<Proposal> findAll() {
		return repository.findAll();
	}

	public Proposal findProposalById(Long id) {
		Optional<Proposal> obj = repository.findById(id);
		return obj.orElseThrow(() -> new ResourceNotFoundException(id));
	}

	public Proposal updateProposal(Long id, Proposal proposalUpdated) {
		Optional<Proposal> proposalOpt = repository.findById(id);
		if (proposalOpt.isPresent()) {
			Proposal proposal = proposalOpt.get();

			proposal.setTitle(proposalUpdated.getTitle());
			proposal.setSummary(proposalUpdated.getSummary());
			proposal.setAuthorName(proposalUpdated.getAuthorName());

			return repository.save(proposal);
		} else {
			throw new ResourceNotFoundException(id);
		}
	}

	public void deleteProposal(Long id) {
		repository.deleteById(id);
	}

}
