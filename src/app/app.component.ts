import { Component, OnInit } from '@angular/core';
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import * as pdfFonts from 'pdfmake/build/vfs_fonts'; // fonts provided for pdfmake

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-pdfmake-wrapper';
  pdf = new PdfMakeWrapper();

  ngOnInit(): void {
    PdfMakeWrapper.setFonts(pdfFonts);
  }

  click = () => {
    this.pdf.add('Hello world!');

    this.pdf.create().download();
  };
}
