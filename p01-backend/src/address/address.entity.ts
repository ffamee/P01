import { Entity, Column, PrimaryColumn } from "typeorm"

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
}
