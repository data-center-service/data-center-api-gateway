import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app.module';
import { ConfigStaticService } from './provider/config/config.service';
import * as RateLimit from 'express-rate-limit';
import * as Proxy from 'http-proxy-middleware';

async function bootstrap() {

    /**
     * 启动服务
     */

    const app = await NestFactory.create(AppModule, {
        cors: false,
        bodyParser: true,
    });

    // app.use(rateLimit({
    //     windowMs: 15 * 60 * 1000, // 15 minutes
    //     max: 100 // limit each IP to 100 requests per windowMs
    // }));

    const options = {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
        pathRewrite: {
            '^/apis/eleme': '',
        },
    };

    app.use('/apis/eleme', Proxy(options));

    /**
     * 启动
     */

    await app.listenAsync(ConfigStaticService.PORT);

}

bootstrap();
