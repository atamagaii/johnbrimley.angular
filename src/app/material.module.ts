import { NgModule } from '@angular/core';

import { MatButtonModule} from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
    declarations: [],
    imports: [
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
    ],
    exports: [
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
    ]
})
export class MaterialModule { }
