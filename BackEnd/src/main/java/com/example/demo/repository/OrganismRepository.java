package com.example.demo.repository;

import com.example.demo.model.Organism;
import org.springframework.data.jpa.repository.JpaRepository;
// import com.example.demo.javasampleapproach.springjpa.many2many.model.Organism;

public interface OrganismRepository extends JpaRepository<Organism, Integer> {
}
