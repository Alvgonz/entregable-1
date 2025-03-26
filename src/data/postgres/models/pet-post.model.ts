import { BaseEntity, Collection, Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


export enum PetPostStatus {
    PENDING="pending",
    APPROVED="approved",
    REJECTED="rejected",
}

@Entity()
export class PetPost extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar", length: 255})
    pet_name: string;

    @Column({ type: "text" })
    description: string;

    @Column({ type:"varchar", length: 255, nullable: true })
    image_url: string;

    @Column({ type: "enum", enum: PetPostStatus, default: PetPostStatus.PENDING })
    status: PetPostStatus;

    @Column({ type: "varchar", length: 255})
    owner: string;

    @Column({ type: "boolean", default: false})
    hasFound: boolean;

    @CreateDateColumn()
    created_at: Date;
}