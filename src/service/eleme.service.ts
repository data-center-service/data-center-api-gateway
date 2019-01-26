import { Injectable, Logger } from '@nestjs/common';
import { ElemeServer } from '../server/eleme.server';
import * as _ from '../util/lodash.util';

@Injectable()
export class ElemeService {

    constructor(
        private readonly elemeServer: ElemeServer,
    ) { }

    public async get(
        method: string,
        query: Object,
    ): Promise<any> {
        return this.elemeServer.get(method, query);
    }

    public async getDoc() {
        return this.elemeServer.get('docs');
    }

    public getDocUrl() {
        return 'http://127.0.0.1:8080/docs';
    }

}