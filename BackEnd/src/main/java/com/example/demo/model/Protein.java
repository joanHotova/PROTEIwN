package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Data
@Entity
@Table(name = "Protein")
@EqualsAndHashCode(exclude = "setOrganisms")
@ToString(exclude = "setOrganisms")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id",
        scope = Protein.class)
public class Protein {
    @Id
    private String accession_number;
    private String seq_id;
    private String Prosite_ID;
    private String prev_acc_numbers;
    private String entry_name;
    private String full_name;
    private String short_name;
    private boolean reviewed;
    private String integrated;
    @Temporal(TemporalType.DATE)
    private Date first_date;
    @Temporal(TemporalType.DATE)
    private Date last_date;
    private String pfunction;
    private String proteomes;
    @ManyToMany(cascade = CascadeType.MERGE)
    @JoinTable(
            name = "Protein_Organism",
            joinColumns = @JoinColumn(name = "accession_number"),
            inverseJoinColumns = @JoinColumn(name = "taxID"))
    Set<Organism> setOrganisms;


    public Protein() {
    }

    public Protein(String accession_number, String seq_id, String Prosite_ID, String prev_acc_numbers, String entry_name, String full_name, String short_name, boolean reviewed, String integrated, Date first_date, Date last_date, String pfunction, String proteomes) {
        this.accession_number = accession_number;
        this.seq_id = seq_id;
        this.Prosite_ID = Prosite_ID;
        this.prev_acc_numbers = prev_acc_numbers;
        this.entry_name = entry_name;
        this.full_name = full_name;
        this.short_name = short_name;
        this.reviewed = reviewed;
        this.integrated = integrated;
        this.first_date = first_date;
        this.last_date = last_date;
        this.pfunction = pfunction;
        this.proteomes = proteomes;
    }
}
