import { Injectable } from '@nestjs/common';
import { Curso } from './entities/curso.entity';

@Injectable()
export class CursoService {
    
    private curso: Curso[] = []

    createCurso(curso,res){

        //Validações de campos do Body
        if(!curso.title){
            return res.status(422).json({message:"O campo title não pode ser nulo!"})
        }
        if(!curso.language){
            return res.status(422).json({message:"O campo language não pode ser nulo!"})
        }
        if(!curso.nivel){
            return res.status(422).json({message:"O campo nivel não pode ser nulo!"})
        }
        
        
        this.curso.push(curso)
        return res.status(201).json(this.curso)
    }

    allCursos(){
        return this.curso
    }
}
