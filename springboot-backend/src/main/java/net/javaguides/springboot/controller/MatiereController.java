package net.javaguides.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Matiere;
import net.javaguides.springboot.repository.MatiereRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class MatiereController {

	@Autowired
	private MatiereRepository matiereRepository;
	
	// get all matieres
	@GetMapping("/matieres")
	public List<Matiere> getAllMatieres(){
		return matiereRepository.findAll();
	}		
	
	// create matiere rest api
	@PostMapping("/matieres")
	public Matiere createMatiere(@RequestBody Matiere matiere) {
		return matiereRepository.save(matiere);
	}
	
	// get matiere by id rest api
	@GetMapping("/matieres/{id}")
	public ResponseEntity<Matiere> getMatiereById(@PathVariable Long id) {
		Matiere matiere = matiereRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Matiere not exist with id :" + id));
		return ResponseEntity.ok(matiere);
	}
	
	// update matiere rest api
	
	@PutMapping("/matieres/{id}")
	public ResponseEntity<Matiere> updateMatiere(@PathVariable Long id, @RequestBody Matiere matiereDetails){
		Matiere matiere = matiereRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Matiere not exist with id :" + id));
		
		
		////
		
		Matiere updatedMatiere = matiereRepository.save(matiere);
		return ResponseEntity.ok(updatedMatiere);
	}
	
	// delete matiere rest api
	@DeleteMapping("/matieres/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteMatiere(@PathVariable Long id){
		Matiere matiere = matiereRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Matiere not exist with id :" + id));
		
		matiereRepository.delete(matiere);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}
