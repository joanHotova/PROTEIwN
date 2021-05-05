package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;
import java.util.Set;

@Data
@Entity
@Table(name = "Organism")
@EqualsAndHashCode(exclude = "setProtein")
@ToString(exclude = "setProtein")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "taxID",
        scope = Organism.class)
public class Organism {
    @Id
    private int taxID;
    private String scientific_name;
    private String mnemonic;
    private String taxonomy_navigation;

    @ManyToMany(cascade = CascadeType.MERGE)
    @JoinTable(
            name = "Protein_Organism",
            joinColumns = @JoinColumn(name = "taxID"),
            inverseJoinColumns = @JoinColumn(name = "accession_number"))
    Set<Protein> setProtein;

    public Organism() {
    }

    public Organism(int taxID, String scientific_name, String mnemonic, String taxonomy_navigation) {
        this.taxID = taxID;
        this.scientific_name = scientific_name;
        this.mnemonic = mnemonic;
        this.taxonomy_navigation = taxonomy_navigation;
    }
}
