import { NgModule} from  '@angular/core';

import {
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule
} from '@angular/material';
import {FormsModule} from '@angular/forms'
@NgModule({
    imports:[
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        FormsModule,
        MatIconModule
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule
    ]
})
export class MaterialModule { }
