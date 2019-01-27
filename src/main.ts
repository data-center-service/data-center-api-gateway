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
        cors: {
            origin: [
                'http://data-center-service.top:8080',
                'http://web.data-center-service.top:8081',
                'http://www.data-center-service.top:8080',
                'https://data-center-service.top:8080',
                'https://web.data-center-service.top:8081',
                'https://www.data-center-service.top:8080',
            ],
        },
        bodyParser: true,
    });

    // app.use(rateLimit({
    //     windowMs: 15 * 60 * 1000, // 15 minutes
    //     max: 100 // limit each IP to 100 requests per windowMs
    // }));

    const options = {
        target: ConfigStaticService.get('API_ELEME'),
        changeOrigin: true,
        pathRewrite: {
            '^/eleme': '',
        },
    };
    app.use('/eleme', Proxy(options));

    /**
     * 启动
     */

    await app.listenAsync(ConfigStaticService.PORT);

}

bootstrap();
