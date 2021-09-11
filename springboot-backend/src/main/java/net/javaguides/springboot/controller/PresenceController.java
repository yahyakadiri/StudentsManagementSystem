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
import net.javaguides.springboot.model.Presence;
import net.javaguides.springboot.model.PresenceU;
import net.javaguides.springboot.repository.PresenceRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class PresenceController {

	@Autowired
	private PresenceRepository presenceRepository;
	
	// get all presences
	@GetMapping("/presences")
	public List<Presence> getAllPresences(){
		return presenceRepository.findAll();
	}
	
	@GetMapping("/presences/etudiant/{id}")
	public List<Presence> geStudentPresences(@PathVariable Integer id){
		return presenceRepository.findByStudent(id);
	}
	
	// create presence rest api
	@PostMapping("/presences")
	public Presence createPresence(@RequestBody Presence presence) {
		return presenceRepository.save(presence);
	}
	
	// get presence by id rest api
	@GetMapping("/presences/{id}")
	public ResponseEntity<Presence> getPresenceById(@PathVariable Long id) {
		Presence presence = presenceRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Presence not exist with id :" + id));
		return ResponseEntity.ok(presence);
	}
	
	// update presence rest api
	
	@PutMapping("/presences/{id}")
	public ResponseEntity<Presence> updatePresence(@PathVariable Long id, @RequestBody Presence presenceDetails){
		Presence presence = presenceRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Presence not exist with id :" + id));
		
		///
		Presence updatedPresence = presenceRepository.save(presence);
		return ResponseEntity.ok(updatedPresence);
	}
	
	// delete presence rest api
	@DeleteMapping("/presences/{id}")
	public ResponseEntity<Map<String, Boolean>> deletePresence(@PathVariable Long id){
		Presence presence = presenceRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Presence not exist with id :" + id));
		
		presenceRepository.delete(presence);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}
