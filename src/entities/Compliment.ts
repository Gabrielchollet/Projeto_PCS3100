import { Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToOne, } from "typeorm";
import { v4 as uuid } from "uuid";
import { Tag } from "./Tag";
import { User } from "./User";
import {Job} from "./Job";

@Entity("Compliments")
class Compliment {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  user_sender: string;

  @JoinColumn({ name: "user_sender" })
  @ManyToOne(() => User)
  userSender: User;

  @Column()
  user_receiver: string;

  @JoinColumn({ name: "worker" })
  @ManyToOne(() => User)
  Worker: User;

  @Column()
  tag_id: string;

  @JoinColumn({name: "tag"})
  @ManyToOne(() => Tag)
  tag: Tag;

  @Column()
  job_id: string;

  /* Não entendi a função desse joinColumn :(  */
  @JoinColumn({ name: "job_id" })
  @ManyToOne(() => Job)
  job: Job;

  @Column()
  message: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Compliment };