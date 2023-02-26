import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';

export interface Duenio {
  id: number,
  tipodoc: string,
  doc: string;
  duenio: string,
}

const ELEMENT_DATA: Duenio[] = [
  { id: 1, tipodoc: 'CC', doc: '234156', duenio: 'Maria'},
  { id: 2, tipodoc: 'CC', doc: '234156', duenio: 'Pedro'},
  { id: 3, tipodoc: 'CC', doc: '234156', duenio: 'Juan'},
  { id: 4, tipodoc: 'CC', doc: '234156', duenio: 'Ana'},
  { id: 5, tipodoc: 'CC', doc: '234156', duenio: 'Samuel'},
  { id: 6, tipodoc: 'CC', doc: '234156', duenio: 'Teo'},
  { id: 7, tipodoc: 'CC', doc: '234156', duenio: 'Patricia'},
  { id: 1, tipodoc: 'CC', doc: '234156', duenio: 'Maria'},
  { id: 2, tipodoc: 'CC', doc: '234156', duenio: 'Pedro'},
  { id: 3, tipodoc: 'CC', doc: '234156', duenio: 'Juan'},
  { id: 4, tipodoc: 'CC', doc: '234156', duenio: 'Ana'},
  { id: 5, tipodoc: 'CC', doc: '234156', duenio: 'Samuel'},
  { id: 6, tipodoc: 'CC', doc: '234156', duenio: 'Teo'},
  { id: 7, tipodoc: 'CC', doc: '234156', duenio: 'Patricia'},
  { id: 1, tipodoc: 'CC', doc: '234156', duenio: 'Maria'},
  { id: 2, tipodoc: 'CC', doc: '234156', duenio: 'Pedro'},
  { id: 3, tipodoc: 'CC', doc: '234156', duenio: 'Juan'},
  { id: 4, tipodoc: 'CC', doc: '234156', duenio: 'Ana'},
  { id: 5, tipodoc: 'CC', doc: '234156', duenio: 'Samuel'},
  { id: 6, tipodoc: 'CC', doc: '234156', duenio: 'Teo'},
  { id: 7, tipodoc: 'CC', doc: '234156', duenio: 'Patricia'}
];

@Component({
  selector: 'app-duenio',
  templateUrl: './duenio.component.html',
  styleUrls: ['./duenio.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DuenioComponent implements OnInit {

  displayedColumns: string[] = ['id', 'tipodoc', 'doc', 'duenio'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DuenioComponent>){ }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DuenioComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
