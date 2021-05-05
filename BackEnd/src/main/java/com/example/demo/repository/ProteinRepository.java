package com.example.demo.repository;

import com.example.demo.model.Protein;
import org.springframework.data.jpa.repository.JpaRepository;
// import com.example.demo.javasampleapproach.springjpa.many2many.model.Protein;

public interface ProteinRepository extends JpaRepository<Protein, String>{
}
