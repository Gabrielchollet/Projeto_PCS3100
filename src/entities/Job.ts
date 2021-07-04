import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

import { Expose } from "class-transformer";

import { v4 as uuid } from "uuid";

@Entity("jobs")
class Job {
  /* Quem será responsável por inserir o ID será o construtor */
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  user_sender: string;

  @Column()
  user_receiver: string;
  
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