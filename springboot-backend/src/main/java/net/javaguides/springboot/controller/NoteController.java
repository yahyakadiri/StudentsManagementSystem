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
import net.javaguides.springboot.model.Note;
import net.javaguides.springboot.model.Presence;
import net.javaguides.springboot.repository.NoteRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class NoteController {

	@Autowired
	private NoteRepository noteRepository;
	
	// get all notes
	@GetMapping("/notes")
	public List<Note> getAllNotes(){
		return noteRepository.findAll();
	}	
	
	@GetMapping("/notes/etudiant/{id}")
	public List<Note> geStudentNotes(@PathVariable Integer id){
		return noteRepository.findByStudent(id);
	}
	
	// create note rest api
	@PostMapping("/notes")
	public Note createNote(@RequestBody Note note) {
		return noteRepository.save(note);
	}
	
	// get note by id rest api
	@GetMapping("/notes/{id}")
	public ResponseEntity<Note> getNoteById(@PathVariable Long id) {
		Note note = noteRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Note not exist with id :" + id));
		return ResponseEntity.ok(note);
	}
	
	// update note rest api
	
	@PutMapping("/notes/{id}")
	public ResponseEntity<Note> updateNote(@PathVariable Long id, @RequestBody Note noteDetails){
		Note note = noteRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Note not exist with id :" + id));
		
		/////
		
		Note updatedNote = noteRepository.save(note);
		return ResponseEntity.ok(updatedNote);
	}
	
	// delete note rest api
	@DeleteMapping("/notes/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteNote(@PathVariable Long id){
		Note note = noteRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Note not exist with id :" + id));
		
		noteRepository.delete(note);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}
