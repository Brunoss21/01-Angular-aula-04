import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-flow',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.css'],
})
export class FlowComponent implements OnInit {
  n: number = 10;

  getNumbers() {
    return [10, 17, 88, 99, 100];
  }

  ngOnInit() {}
}
