import { Exclude } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany } from 'typeorm';
import { ExclusionMetadata } from 'typeorm/metadata/ExclusionMetadata';
import { Post } from './posts.entity';
import { Comment } from './comment.entity';


@Entity({name: "user"})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar", default: "test", length: 200})
    name: string;

    @Column({type: "varchar", default: "test", length: 200})
    email: string;

    @Column({ type: "varchar", length: 100, select: false })
   password: string;
        
    @Column({ type: "datetime", default: () => "Now()" })
    createdAt: string;

    @Column({type: "boolean", default: false})
    isActive: string;

    @OneToMany(() => Post, (post) => post.user)
    posts: Post[];
    
    @OneToMany(() =>Comment, (coment) => coment.user)
  comments: Comment[];

}
