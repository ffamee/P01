import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm"
import { Address } from '../address/address.entity'

@Entity()
export class User {
    @PrimaryColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    phone: string

		@OneToMany(() => Address, (address) => address.user)
    address: Address[]
}

