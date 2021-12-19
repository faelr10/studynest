import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CursoController } from './curso/curso.controller';
import { CursoService } from './curso/curso.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nestCrud')],
  controllers: [AppController, CursoController],
  providers: [AppService, CursoService],
})
export class AppModule {}
