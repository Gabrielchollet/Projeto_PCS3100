import { Exclude } from "class-transformer";
import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, } from "typeorm";

import { v4 as uuid } from "uuid";

/* entidade que se refere a um user */
@Entity("users")
class User {
    /* Quem será responsável por inserir o ID será o construtor */
  @PrimaryColumn()
  readonly id: string;
  /* cada coluna significa uma propriedade de um user */ 
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  admin: boolean;

  @Column()
  worker: boolean;

  @Column()
  employer: boolean;

  @Column()
  professional: string;
  
  @Exclude()

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };

//Entidadde < - > ORM < - > BD (users)  