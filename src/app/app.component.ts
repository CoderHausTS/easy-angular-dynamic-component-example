import {
  Component,
  ViewChild,
  ComponentFactoryResolver,
  OnInit
} from '@angular/core';
import { InjectedComponent } from './injected/injected.component';
import { AnotherInjectedComponent } from './another-injected/another-injected.component';
import { TestDirective } from './test.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // get the viewChild that is our directive (appTest)
  // in the HTML. This is in our ng-template
  // and allows our component to be injected in. This directive
  // gives us access to the view container ref, where we inject our component.
  @ViewChild(TestDirective, { static: true }) someDirective: TestDirective;
  title = 'test-dyncomp';

  ourComponent;
  selected;

  // this is what we display in our dropdown
  list = [];
  mainList = [
    { name: 'Injected', comp: InjectedComponent },
    { name: 'Another Injected', comp: AnotherInjectedComponent }
  ];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    // get the data we'll show in the dropdown
    this.list = this.mainList.map(item => item.name);
  }

  ngOnInit() {
    this.selected = this.mainList[0].name;
    this.changeComponent();
  }

  changeComponent() {
    // grab the item from our mainList that we're going to show.
    // do this by name. In a sec we'll grab the component.
    const result = this.mainList.filter(item => item.name === this.selected);

    this.ourComponent = result[0].comp;

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.ourComponent
    );

    // get the view container ref of our directive that we're injecting
    // this is the viewChild reference - which comes from ng-template in HTML
    // someDirective is from above, our @ViewChild
    const viewContainerRef = this.someDirective.viewContainerRef;

    // We don't want the old view in this container! We're going to get
    // a new one.
    viewContainerRef.clear();

    // Now we instantiate the component and inject in our view
    viewContainerRef.createComponent(componentFactory);
  }
}
