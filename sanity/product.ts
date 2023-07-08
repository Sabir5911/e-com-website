import { defineField,defineType } from "sanity"
export const product=defineType(
    {

        name:"product",
        type:"document",
        title:"Product",
        fields:[
            defineField({
                name:"name",
                 type:"string",
                 title:"product name",
            }),
            defineField({
                name:"price",
                 type:"number",
                 title:"product price",
            }),                                     
            defineField({
                name:"title",
                 type:"string",
                 title:"product title",
            }),
            defineField({
                name:"image",
                 type:"image",
                 title:"product image",
            }),
            defineField({
                name:"slug",
                 type:"slug",
                 title:"slug",
                 options:{
                    source:"name",
                    maxLength:200,
                    slugify:(input:string)=>input.toLowerCase().replace(/\s+/g,'-').slice(0,200)
                 }
                 
            }),
            defineField({
                name:"category",
                 type:"reference",
                 title:"product category",
                 to:[{
                         type:"category"
                 }]
            }),
        ]
    }
)