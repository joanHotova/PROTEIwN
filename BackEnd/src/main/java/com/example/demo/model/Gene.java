package com.example.demo.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "Gene")
public class Gene {
    @Id
    private String gene_name;
    private int taxID;
    private String accession_number;
    private String ORF_name;
    private String synonym;

    public Gene() {
    }

    public Gene(String gene_name, int taxID, String accession_number, String ORF_name, String synonym) {
        this.gene_name = gene_name;
        this.taxID = taxID;
        this.accession_number = accession_number;
        this.ORF_name = ORF_name;
        this.synonym = synonym;
    }
}
