import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { category } from './Category'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,category],
}
