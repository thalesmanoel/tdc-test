package com.tdc.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tdc.backend.entities.Proposal;
import com.tdc.backend.service.ProposalService;

@RestController
@RequestMapping("/proposal")
@CrossOrigin("*")

public class ProposalController {
	
	@Autowired
	private ProposalService service;
	
	@GetMapping("/listAll")
    public ResponseEntity<List<Proposal>> findAll() {
        try {
            List<Proposal> proposals = service.findAll();
            return ResponseEntity.ok(proposals);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
    
    @PostMapping("/save")
    public ResponseEntity<Proposal> save(@RequestBody Proposal proposal) {
        try {
            Proposal createdProposal = service.createProposal(proposal);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdProposal);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
	
	@ExceptionHandler
    public ResponseEntity<String> handleException(Exception e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An unexpected error occurred: " 
        	   + e.getMessage());
    }
	
}
