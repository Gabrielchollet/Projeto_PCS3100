import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

import { Expose } from "class-transformer";

import { v4 as uuid } from "uuid";
/* entidade que se refere a um emprego */
@Entity("jobs")
class Job {
  /* Quem será responsável por inserir o ID será o construtor */
  @PrimaryColumn()
  readonly id: string;
  /* cada coluna significa uma propriedade de um emprego*/ 
  @Column()
  employer: string;

  @Column()
  worker: string;
  
  @Column()
  professional: string;

  @Column()
  geolocation: string;

  @Column()
  message: string;

  @Column()
  date: Date;
  
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    /* Verifica se o id não está preenchido */
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Job }