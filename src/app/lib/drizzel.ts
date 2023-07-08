import { pgTable, serial, varchar, integer,text } from 'drizzle-orm/pg-core'
import {drizzle} from 'drizzle-orm/vercel-postgres' 

import { sql } from '@vercel/postgres'

export const usercarts = pgTable("usercarts", {

    id: serial('id').primaryKey(),

    product_name: varchar("product_name"),
 quantity: integer('quantity'),

 price: integer('price'),
 image: varchar('image'),

 size:text('size'),

 user_id: varchar('user_id'),



})


export const db=drizzle(sql)