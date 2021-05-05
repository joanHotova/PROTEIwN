package com.example.demo.controller;


import com.example.demo.model.Sequence;
import com.example.demo.service.SequenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/sequences")
public class SequenceController {
    @Autowired
    SequenceService sequenceService;

    @GetMapping("/all_sequences")
    public List<Sequence> list() {
        return sequenceService.listAllSequence();
    }

    @GetMapping("/{seq_id}")
    public ResponseEntity<Sequence> get(@PathVariable String seq_id) {
        try {
            Sequence sequence = sequenceService.getSequence(seq_id);
            return new ResponseEntity<>(sequence, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/")
    public void add(@RequestBody Sequence sequence) {
        sequenceService.saveSequence(sequence);
    }

    @PutMapping("/{seq_id}")
    public ResponseEntity<?> update(@RequestBody Sequence sequence, @PathVariable String seq_id) {
        try {
            Sequence existSequence = sequenceService.getSequence(seq_id);
            existSequence.setSequence(sequence.getSequence());
            existSequence.setChecksum(sequence.getChecksum());
            existSequence.setLast_date(sequence.getLast_date());
            existSequence.setLength(sequence.getLength());
            existSequence.setMass(sequence.getMass());
            sequenceService.updateSequence(sequence);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{seq_id}")
    public void delete(@PathVariable String seq_id) {

        sequenceService.deleteSequence(seq_id);
    }
}
