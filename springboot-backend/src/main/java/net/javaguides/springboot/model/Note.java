package net.javaguides.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "notes")
public class Note {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "etudiant")
	private int etudiant;
	
	@Column(name = "matiere")
	private int matiere;
	
	@Column(name = "note")
	private float note;
	
	public Note() {
		super();
	}
	
	public Note(int etudiant, int matiere, float note) {
		super();
		this.etudiant = etudiant;
		this.matiere = matiere;
		this.note = note;
	}

	public int getEtudiant() {
		return etudiant;
	}

	public void setEtudiant(int etudiant) {
		this.etudiant = etudiant;
	}

	public int getMatiere() {
		return matiere;
	}

	public void setMatiere(int matiere) {
		this.matiere = matiere;
	}

	public float getNote() {
		return note;
	}

	public void setNote(float note) {
		this.note = note;
	}
	
	
	
}
