import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedMaterialModule } from '../../shared-material/shared-material.module';
import { ChartroomRoutingModule } from './chartroom-routing.module';
import { ChartroomComponent } from './chartroom.component';
import { InfoComponent } from './info/info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoomComponent } from './room/room.component';

@NgModule({
  imports: [
    CommonModule,
    ChartroomRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SharedMaterialModule
  ],
  declarations: [ChartroomComponent, InfoComponent, RoomComponent]
})
export class ChartroomModule { }
