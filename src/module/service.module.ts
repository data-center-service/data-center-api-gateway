import { Module } from '@nestjs/common';
import { ServerModule } from './server.module';
import { ElemeService } from '../service/eleme.service';

@Module({
    imports: [
        ServerModule,
    ],
    providers: [
        ElemeService,
    ],
    exports: [
        ElemeService,
    ],
})
export class ServiceModule { }
