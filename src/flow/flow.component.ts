import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.css'],
})
export class FlowComponent implements OnInit {
  getNumbers() {
    return [10, 17, 22, 78, 88, 99, 24, 75];
  }

  ngOnInit() {}
}
