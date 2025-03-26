import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum UserRole {
    USER= "user",
    ADMIN= "admin"
}

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type:"varchar", length:255 })
    name: string;

    @Column({ type:"varchar", length:255 })
    email: string;

    @Column({ type:"varchar", length:255 })
    password: string;

    @Column({ type:"enum", enum: UserRole, default: UserRole.USER})
    role: UserRole;

    @Column({ type: "boolean", default: true})
    status: boolean;

    @CreateDateColumn()
    created_at: Date;

}