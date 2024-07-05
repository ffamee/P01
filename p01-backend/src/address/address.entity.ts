import { Entity, Column, PrimaryColumn, ManyToOne } from "typeorm"
import { User } from '../user/user.entity'

@Entity()
export class Address {
    @PrimaryColumn()
    id: number

    @Column()
    address: string

    @Column()
    sub_district: string

    @Column()
    district: string

		@Column()
		province: string

		@Column()
		post_code: string

		@ManyToOne(() => User, (user) => user.address)
    user: User
}
