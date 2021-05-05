package com.example.demo.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name = "Sequence")
public class Sequence {
    @Id
    private String seq_id;
    private int length;
    private double mass;
    @Temporal(TemporalType.DATE)
    private Date last_date;
    private String checksum;
    private String sequence;

    public Sequence() {
    }

    public Sequence(String seq_id, int length, double mass, Date last_date, String checksum, String sequence) {
        this.seq_id = seq_id;
        this.length = length;
        this.mass = mass;
        this.last_date = last_date;
        this.checksum = checksum;
        this.sequence = sequence;
    }
}
