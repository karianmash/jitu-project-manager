import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  projects = [
    {
      id: 'wa2g5wrgsdpv879ewu9TEYdvsdRCsvsz',
      user: 'Ian Macharia',
      title: "Ian's Kitchen",
      description:
        'Lorem egbsdzv dsvfc sdfgv szd ccsfv dzvf d s gbfd v cdf vdfbdrfszdvd',
      status: 'in progress',
      deadline: '2012-08-31 16:31:53.267',
    },
    {
      id: 'wa2g5wrgsdpv879ewu9TEYdvsdRCsvsz',
      user: 'Ian',
      title: "Ian's Kitchen",
      description:
        'Lorem egbsdzv dsvfc sdfgv szd ccsfv dzvf d s gbfd v cdf vdfbdrfszdvd',
      status: 'in progress',
      deadline: '2012-08-31 16:31:53.267',
    },
    {
      id: 'wa2g5wrgsdpv879ewu9TEYdvsdRCsvsz',
      user: 'Ian',
      title: "Ian's Kitchen",
      description:
        'Lorem egbsdzv dsvfc sdfgv szd ccsfv dzvf d s gbfd v cdf vdfbdrfszdvd',
      status: 'in progress',
      deadline: '2012-08-31 16:31:53.267',
    },
  ];
}
