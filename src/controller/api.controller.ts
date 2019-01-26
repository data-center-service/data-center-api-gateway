import { Controller, Get } from '@nestjs/common';
import { APIS } from '../const/api.const';

@Controller('apis')
export class ApiController {

    @Get()
    index() {
        return APIS;
    }

}
