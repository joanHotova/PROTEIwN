package com.example.demo.model;

public class OrganismDto {
    public int taxID;
    public String scientific_name;
    public String mnemonic;
    public String taxonomy_navigation;

    public OrganismDto() { }

    public OrganismDto(Organism organism) {
        this.taxID = organism.getTaxID();
        this.scientific_name = organism.getScientific_name();
        this.mnemonic = organism.getMnemonic();
        this.taxonomy_navigation = organism.getTaxonomy_navigation();
    }
}
