import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { BaseEntity } from '../common/entity/base.entity';
import { ICall } from './common/call.interface';

@Entity({
  name: 'calls',
})
export class Call extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ length: 255 })
  call_sid: string;

  @Column({ length: 255 })
  from: string;

  @Column({ length: 255 })
  to: string;

  @Column({ length: 255, nullable: true })
  recording_duration: string;

  @Column({ length: 255, nullable: true })
  recording_sid: string;

  @Column({ length: 255, nullable: true })
  record_url: string;

  @Column({ length: 255 })
  direction: string;

  @Column({ length: 255 })
  from_country: string;

  @Column({ length: 255 })
  to_country: string;

  fromDto(data: ICall) {
    this.call_sid = data.CallSid;
    this.from = data.From;
    this.to = data.To;
    this.recording_duration = data.RecordingDuration;
    this.recording_sid = data.RecordingSid;
    this.record_url = data.RecordingUrl;
    this.direction = data.Direction;
    this.from_country = data.FromCountry;
    this.to_country = data.ToCountry;
    return this;
  }
}