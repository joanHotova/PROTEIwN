package com.example.demo.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "Protein_classification")
public class Protein_classification {
    @Id
    private String Prosite_ID;
    private String Family;
    private String Subfamily;

    public Protein_classification() {
    }

    public Protein_classification(String Prosite_ID, String Family, String Subfamily) {
        this.Prosite_ID = Prosite_ID;
        this.Family = Family;
        this.Subfamily = Subfamily;
    }
}
