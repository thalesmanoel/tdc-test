package com.tdc.backend.testconfig;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.tdc.backend.entities.Proposal;
import com.tdc.backend.repository.ProposalRepository;

@Configuration
@Profile("test")
public class TestConfig implements CommandLineRunner{

	@Autowired
	private ProposalRepository repository;

	@Override
	public void run(String... args) throws Exception {

		Proposal p1 = new Proposal(null, "Apresetação", "Tecnologia", "Thales", "thalescarrion@gmail");
		Proposal p2 = new Proposal(null, "Apresetação", "Tecnologia", "Manoel", "manoel@gmail");

		repository.saveAll(Arrays.asList(p1, p2));
	}
}
