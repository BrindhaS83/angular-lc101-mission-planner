import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
equipment: string[] =["Habitat dome","Drones","Food containers","Oxygen tanks"]
 
equipmentBeingEdited: string = null;

constructor() { }

  ngOnInit() {
  }
  add(equipmentName: string) {
            
    this.equipment.push(equipmentName);
  }
  remove(equipmentName: string) {

    let index = this.equipment.indexOf(equipmentName);
    this.equipment.splice(index, 1);
  
  }
  edit(equip: string) {
    this.equipmentBeingEdited = equip;
 }
 save(oldEquipmentName: string, newEquipmentName: string){
   let index = this.equipment.indexOf(oldEquipmentName)
   this.equipment[index] = newEquipmentName;
   this.equipmentBeingEdited =null;
 }
}
