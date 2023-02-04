
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, IsNull, Check, CreateDateColumn } from 'typeorm';
import { Post } from './posts.entity';
import { User } from './user.entity';



@Entity({name: "comment"})
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: "varchar", nullable: true, length: 200})
  email: string;

  @Column({type: "varchar", nullable: true, length: 200})
  name: string;

  @Column({type: "varchar", nullable: false, length: 200})
  title: string;

  @Column({type: "text", nullable: true})
  content: string;
  
  @Column({type: "integer"})
    rate: number;

  @Column({default: false})
    isAproved: boolean;

  @CreateDateColumn()
    createdAt: Date;
    
  @CreateDateColumn()
    updatedAt: Date;


  @ManyToOne(() => Post, (post) => post.comments)
    posts: Post;
    
  @ManyToOne(() => User, (user) => user.comments)
     user: User;
}