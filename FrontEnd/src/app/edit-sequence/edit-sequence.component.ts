import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SequenceService} from '../service/sequence.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-sequence',
  templateUrl: './edit-sequence.component.html',
  styleUrls: ['./edit-sequence.component.css']
})
export class EditSequenceComponent implements OnInit {
  editForm = new FormGroup({
    seq_id: new FormControl(''),
    length: new FormControl(''),
    mass: new FormControl(''),
    last_date: new FormControl(''),
    checksum: new FormControl(''),
    sequence: new FormControl('')
  });
  constructor(private sequenceService: SequenceService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params.seq_id);
    this.sequenceService.getSequence(this.activatedRoute.snapshot.params.seq_id).subscribe((result) => {
      this.editForm = new FormGroup({
        seq_id: new FormControl(result['seq_id']),
        length: new FormControl(result['length']),
        mass: new FormControl(result['mass']),
        last_date: new FormControl(result['last_date']),
        checksum: new FormControl(result['checksum']),
        sequence: new FormControl(result['sequence'])
      });
    });
  }
  updateSequence() {
    this.sequenceService.updateSequence(this.activatedRoute.snapshot.params.seq_id, this.editForm.value).subscribe((result) => {
      console.log(result);
    });
    this.router.navigate(['/sequences']);
  }

}
