import { Module } from '@nestjs/common';
import { ServiceModule } from './service.module';
import { ApiController } from '../controller/api.controller';

@Module({
  imports: [ServiceModule],
  controllers: [ApiController],
})
export class ControllerModule { }
