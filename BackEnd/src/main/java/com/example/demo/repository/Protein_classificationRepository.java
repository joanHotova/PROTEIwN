package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Protein_classification;

public interface Protein_classificationRepository extends JpaRepository<Protein_classification, String> {
}
