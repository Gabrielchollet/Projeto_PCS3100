import { Exclude } from "class-transformer";
import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, } from "typeorm";

import { v4 as uuid } from "uuid";

@Entity("users")
class User {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  admin: boolean;

<<<<<<< HEAD
  @Column()
  worker: boolean;

=======
>>>>>>> b971468e98ef65463bc9630826a81367683586cc
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