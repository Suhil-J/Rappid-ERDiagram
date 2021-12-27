import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { dia, ui, shapes, util } from '@clientio/rappid';
import { ErDiagramServiceService } from 'src/Service/er-diagram-service.service';

@Component({
  selector: 'app-erdiagram',
  templateUrl: './erdiagram.component.html',
  styleUrls: ['./erdiagram.component.scss']
})
export class ERDiagramComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas') canvas: ElementRef;

  private graph: dia.Graph;
  private paper: dia.Paper;
  private scroller: ui.PaperScroller;

  constructor(private erDiagramServiceService: ErDiagramServiceService,) { }

  LoadGraphItems() {
    this.erDiagramServiceService.LoadGraphItems().subscribe(data =>
      this.graph.fromJSON(data)
    );
  }

  ngOnInit(): void {
    const graph = this.graph = new dia.Graph({}, { cellNamespace: shapes });

    const paper = this.paper = new dia.Paper({
      model: graph,
      background: {
        color: '#464a65',
      },
      frozen: true,
      height: 600,
      width: 1000,
      async: true,
      cellViewNamespace: shapes
    });

    const scroller = this.scroller = new ui.PaperScroller({
      paper,
      autoResizePaper: true,
      cursor: 'grab'
    });

    this.LoadGraphItems()
  }
  ngAfterViewInit(): void {
    const { scroller, paper, canvas } = this;
    canvas.nativeElement.appendChild(this.scroller.el);
    scroller.center();
    paper.unfreeze();
  }

}
