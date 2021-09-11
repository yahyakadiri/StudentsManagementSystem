package net.javaguides.springboot.model;

import java.sql.Date;



public class PresenceU {
	
	
	private String etudiant;
	
	private Date date;
	
	private String presence;

	

	

	public PresenceU() {
		super();
	}
	
	

	

	public PresenceU(String etudiant, Date date, String presence) {
		super();
		this.etudiant = etudiant;
		this.date = date;
		this.presence = presence;
	}





	public String getEtudiant() {
		return etudiant;
	}

	public void setEtudiant(String etudiant) {
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
