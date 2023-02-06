
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, IsNull, Check, CreateDateColumn, UpdateDateColumn, ManyToMany } from 'typeorm';
import { Post } from './posts.entity';
import { User } from './user.entity';



@Entity({name: "comment"})
export class Comment {
  @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToMany(() => Post, (post) => post.comments)
    post: Post;
  
    @ManyToMany(() => User, (user) => user.comments)
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
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column({type: "varchar", nullable: true, length: 200})
//   email: string;

//   @Column({type: "varchar", nullable: true, length: 200})
//   name: string;

//   @Column({type: "varchar", nullable: false, length: 200})
//   title: string;

//   @Column({type: "text", nullable: true})
//   content: string;
  
//   @Column({type: "integer"})
//     rate: number;

//   @Column({default: false})
//     isAproved: boolean;

//   @CreateDateColumn()
//     createdAt: Date;
    
//   @CreateDateColumn()
//     updatedAt: Date;


//   @ManyToOne(() => Post, (post) => post.comments)
//     posts: Post;
    
//   @ManyToOne(() => User, (user) => user.comments)
//      user: User;
// }