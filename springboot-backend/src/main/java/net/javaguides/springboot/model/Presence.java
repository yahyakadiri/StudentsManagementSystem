package net.javaguides.springboot.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "presences")
public class Presence {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "etudiant")
	private int etudiant;
	
	@Column(name = "date")
	private Date date;
	
	@Column(name = "presence")
	private String presence;

	

	

	public Presence() {
		super();
	}

	

	public int getEtudiant() {
		return etudiant;
	}

	public void setEtudiant(int etudiant) {
		this.etudiant = etudiant;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getPresence() {
		return presence;
	}

	public void setPresence(String presence) {
		this.presence = presence;
	}
	
	
	
}
