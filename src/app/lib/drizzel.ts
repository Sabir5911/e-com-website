import { pgTable, serial, varchar, integer,text } from 'drizzle-orm/pg-core'
import {drizzle} from 'drizzle-orm/vercel-postgres' 

import { sql } from '@vercel/postgres'
import { type } from 'os'
import { InferModel } from 'drizzle-orm'

export const usercarts = pgTable("usercarts", {

    id: serial('id').primaryKey(),

    product_name: varchar("product_name"),
 quantity: integer('quantity').notNull(),

 price: integer('price').notNull(),
 image: varchar('image').notNull(),

 size:text('size'),
 title: varchar('title'),


 user_id: varchar('user_id'),



})
export type cart=InferModel<typeof usercarts>

export const db=drizzle(sql)