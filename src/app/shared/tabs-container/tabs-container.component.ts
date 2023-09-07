import { Component, OnInit, ContentChildren, AfterContentInit, QueryList, Input } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css']
})
export class TabsContainerComponent implements AfterContentInit  {

  // @ContentChildren(TabComponent) tabs?: QueryList<TabComponent>;
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> = new QueryList();

  constructor() { }

  ngAfterContentInit(): void {
    const activeTabs = this.tabs?.filter(
      t => t.active
    )

    if(!activeTabs || activeTabs.length === 0) {
      this.selectTab(this.tabs!.first)
    }
    // console.log(this.tabs);
  }

  selectTab(tab: TabComponent) {
    this.tabs?.forEach(tab => {
      tab.active = false;
    })

    tab.active = true;

    return false;
  }

}
