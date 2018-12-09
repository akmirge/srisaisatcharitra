import { NgModule } from '@angular/core';
import { SatcharitraRepository } from './satcharita.repository';
import { StaticDataSource } from './static.datasource';
import { RestDataSource } from './rest.datasource';
import { HttpClientModule } from '@angular/common/http';
import { ModelResolver } from './model.resolver';

@NgModule({
    imports: [HttpClientModule],
    providers: [SatcharitraRepository, RestDataSource, ModelResolver]
})
export class ModelModule {}
