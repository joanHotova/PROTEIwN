package com.example.demo.model;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

public class ProteinDto {
    public String accession_number;
    public String seq_id;
    public String Prosite_ID;
    public String prev_acc_numbers;
    public String entry_name;
    public String full_name;
    public String short_name;
    public boolean reviewed;
    public String integrated;
    public Date first_date;
    public Date last_date;
    public String pfunction;
    public String proteomes;

    public ProteinDto() { }

    public ProteinDto(Protein protein) {
        this.accession_number = protein.getAccession_number();
        this.seq_id = protein.getSeq_id();
        this.Prosite_ID = protein.getProsite_ID();
        this.prev_acc_numbers = protein.getPrev_acc_numbers();
        this.entry_name = protein.getEntry_name();
        this.full_name = protein.getFull_name();
        this.short_name = protein.getShort_name();
        this.reviewed = protein.isReviewed();
        this.integrated = protein.getIntegrated();
        this.first_date = protein.getFirst_date();
        this.last_date = protein.getLast_date();
        this.pfunction = protein.getPfunction();
        this.proteomes = protein.getProteomes();
    }
}
