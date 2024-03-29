import { OrderTableComponent } from './orderTable.component';
import { ProductTablerComponent } from './productTable.component';
import { ProductEditorComponent } from './productEditor.component';
import { AdminComponent } from './admin.component';
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from "./auth.guard";

let routing = RouterModule.forChild([
    { path: "auth", component: AuthComponent },
    {
        path: "main", component: AdminComponent, canActivate: [AuthGuard],
        children: [
            { path: "products/:mode/:id", component: ProductEditorComponent },
            { path: "products/:mode", component: ProductEditorComponent },
            { path: "products", component: ProductTablerComponent },
            { path: "orders", component: OrderTableComponent },
            { path: "**", redirectTo: "products" }
        ]
    },
    { path: "**", redirectTo: "auth" }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing],
    providers: [AuthGuard],
    declarations: [AuthComponent, AdminComponent,
        ProductTablerComponent, ProductEditorComponent, OrderTableComponent]
})
export class AdminModule { }