import { title } from "process";

export default {
    name: "product",
    type: "document",
    title: "Product",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Name of Product"
        },
        {
            name: "images",
            type: "array",
            title: "Product Images",
            of: [{type: "image"}],
        },
        {
            name: "description",
            type: "string",
            title: "Description of Product"
        },
        {
            name: "slug",
            type: "slug",
            title: "Product Slug",
            options: {
                source: "name"
            }
        },
        {
            name: "price",
            type: "number",
            title: "Price"
        },
        {
            name: "sizes",
            type: "array",
            title: "Sizes",
            of: [{type: "string"}]
        },
        {
            name: "price_id",
            type: "string",
            title: "Stripe Product Price ID",
        },
        {
            name: "category",
            type: "reference",
            title: "Product Category",
            to: [
                {
                    type: "category"
                }
            ]
        },
    ]
}