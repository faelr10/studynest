import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { CursoService } from './curso.service';

@Controller('curso')
export class CursoController {

    constructor(private readonly cursoService: CursoService ){}

    @Post()
    async createCurso(@Body() body, @Req() req, @Res() res ){

        const {title,language,nivel} = req.body

        const newCurso={
            title,
            language,
            nivel
        }
        const dataCurso = await this.cursoService.createCurso(newCurso,res)


        return dataCurso

    }

    @Get()
    async getAllCursos(@Res() res){
        const allCursos = await this.cursoService.allCursos()
        return res.status(200).json(allCursos)
    }


}
