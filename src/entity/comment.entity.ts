
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, IsNull, Check, CreateDateColumn, UpdateDateColumn, ManyToMany } from 'typeorm';
import { Post } from './posts.entity';
import { User } from './user.entity';



@Entity({name: "comment"})
export class Comment {
  @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToOne(() => Post, (post) => post.comments)
    post: Post;
  
    @ManyToOne(() => User, (user) => user.comments)
    user: User;
  
    @Column({type: 'varchar', length: 200})
    title: string;
  
    @Column({nullable: true})
    content: string;
  
    @Column({type: 'varchar', length: 200, nullable: true})
    email: string;
  
    @Column({type: 'varchar', length: 200, nullable: true})
    name: string;
  
    @Column({type: 'int'})
    rate: number;
  
    @Column({type: 'boolean', default: false})
    isApproved: boolean;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
  }