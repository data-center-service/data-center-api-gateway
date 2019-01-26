import { Injectable, HttpService } from '@nestjs/common';
import { ConfigService } from '../provider/config/config.service';
import * as _ from '../util/lodash.util';

@Injectable()
export class ElemeServer {

    private readonly url: string;

    constructor(
        private readonly httpService: HttpService,
        private readonly config: ConfigService,
    ) {
        this.url = this.config.get('API_ELEME');
    }

    public async get(
        method: string,
        query?: Object,
    ): Promise<any> {
        const res = await this.httpService.get(`${this.url}/${method}`, {
            params: query,
        }).toPromise();
        return res.data;
    }

}