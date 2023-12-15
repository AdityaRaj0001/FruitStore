import Image from 'next/image'
import Stripe from 'stripe'
import ProductCard from './ProductCard'


async function getStripeProducts(){

  const stripe=new Stripe(process.env.STRIPE_SECRET ?? '',{
    apiVersion:'2023-10-16'
  })

  const res=await stripe.prices.list({
    expand:['data.product']
  })

  const prices=res.data
  return prices
}
export default async function  Home() {

  const products=await getStripeProducts()
  console.log(products)
  return (
    <main className='p-4 flex flex-wrap justify-between gap-4'>

      {products.map((item,index)=>{
        return <ProductCard item={item} key={index} />
      })}
    </main>
  )
}
