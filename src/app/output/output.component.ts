import { Component, Input, OnInit, Type, ViewChild } from '@angular/core';
import { ItemDescription } from '../item-description';
import { DirGagDirective } from '../dir-gag.directive';
import { DescriptionComponent } from '../description.component';
import { MatTreeNestedDataSource} from '@angular/material/tree';
import { FlatTreeControl, NestedTreeControl} from '@angular/cdk/tree';

interface node  {
  name:string
  count:number
  type:string
  children?:node[]
  isExpanded?:boolean
}
interface head{
  [key: string]:string
}

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
  @Input() aContent:ItemDescription[] = [];
  @ViewChild(DirGagDirective,{static: true}) Host!:DirGagDirective;
  
  treeControl = new NestedTreeControl<node>(node => node.children);
  dataSource = new MatTreeNestedDataSource<node>();

  // transformer = (node: node, level: number) => {
  //   let flatNode = new FileFlatNode();
  //   flatNode.filename = node.filename;
  //   flatNode.type = node.type;
  //   flatNode.level = level;
  //   flatNode.expandable = !!node.children;
  //   return flatNode;
  // }
  oHead:head={
    template : "Шаблон",
    directive : "Дерективы", 
    injection : "Иньекции",
    devGuid : "Руководство разработчика"
  }
  activeContent!:ItemDescription ;
  
  constructor() {}

  ngOnInit(): void {
    this.setDescriptionContent(this.aContent.length - 1);
    this.dataSource.data = this.fnCreateTreeData(this.aContent)
    
    // this.treeControl.expandAll()
  }

  hasChild = (_: number, node: node) => { return !!node.children && node.children.length > 0;}
  fnCreateTreeData (aContent:ItemDescription[]):node[]{
    var aTree:node[] =[];
    aContent.forEach((source)=>{
      let oNode = <node>{name:source.data.name, type:source.type,count:source.count};
      var find = aTree.find(e=>source.type == e.type )?.children?.push(oNode);

      if(!find){
        aTree.push({
          name: this.oHead[source.type],
          type: source.type,
          count: -1, children:[oNode],
          isExpanded : true })
      }
    })    
    return aTree;
  }
  setDescriptionContent(index:number){
    this.activeContent = this.aContent[index];
    const oContent = this.aContent[index];
    const refHost = this.Host.viewContainerRef;
    refHost.clear();
    const componentRef = refHost.createComponent<DescriptionComponent>(oContent.component);
    componentRef.instance.data = oContent.data;
  }
  onClickTheme(count:number){
    this.setDescriptionContent(count);
  }
}
