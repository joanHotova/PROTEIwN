package com.example.demo.repository;

import com.example.demo.model.Gene;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GeneRepository extends JpaRepository<Gene, String>{
}