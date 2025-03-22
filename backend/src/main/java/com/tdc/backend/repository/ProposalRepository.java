package com.tdc.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tdc.backend.entities.Proposal;


@Repository
public interface ProposalRepository extends JpaRepository<Proposal, Long> {

}
