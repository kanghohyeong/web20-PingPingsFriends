import { ApiProperty } from '@nestjs/swagger';
import { Post } from 'src/post/entities/post.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class Heart {
  @PrimaryColumn({ name: 'user_id' })
  @ApiProperty()
  userId: number;

  @PrimaryColumn({ name: 'post_id' })
  @ApiProperty()
  postId: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;

  @ManyToOne(() => Post)
  @JoinColumn({ name: 'post_id', referencedColumnName: 'id' })
  post: Post;
}
