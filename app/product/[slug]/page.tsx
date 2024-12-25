import ProductGallery from '@/app/components/ProductGallery';
import ProductDetails from '@/app/components/ProductDetails';
import { detailedProduct } from '@/app/interface';
import { client } from '@/app/lib/sanity'

const getProductData = async (slug: string) => {
    const q = `*[_type == "product" && slug.current == "${slug}"][0]{
    _id,
        images,
        price,
        name,
        description,
        "slug": slug.current,
        "category": category->name,
        price_id,
        sizes
    }`

    const data = await client.fetch(q);
    return data;
}

const ProductPage = async ({params}: {params: {slug: string}}) => {
    const data: detailedProduct = await getProductData(params.slug);

    return (
        <div className='bg-white'>
            <div className='mx-auto max-w-screen-xl px-4 md:px-8 mt-10'>
                <div className='grid w-[90%] mx-auto gap-8 md:grid-cols-2'>
                    <ProductGallery images={data.images}/>
                    <ProductDetails data={data} />
                </div>
            </div>
        </div>
    )
}

export default ProductPage