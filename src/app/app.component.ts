import {
  Component,
  OnInit,
  ViewContainerRef,
  ComponentFactoryResolver
} from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "ngindia2020";
  ngOnInit() {

    const tag=document.createElement('script');
    tag.src="https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }
  constructor(

  ) {}

}
