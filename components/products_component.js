import React from 'react'
import Skin from '../public/images/skin.jpg'
import Image from 'next/image'
import {BiEdit} from 'react-icons/bi'
import Link from 'next/link'

const products = [
  {
    title: "Diabetes",
    description: "Diabetes is a leading cause of blindness, kidney failure, heart attacks, stroke, and amputation of lower limbs. Diabetes burden is strongly linked to metabolic risks and behavioral factors. Algorithms supporting predictive models for the risk of getting diabetes or its complications have been developed using artificial intelligence. It is also capable of identifying diabetes mellitus type based on the data obtained from a patient.",
    imageUrl: Skin,
    urlLink: "https://www.youtube.com/"
},
{
  title: "Diabetes",
  description: "Diabetes is a leading cause of blindness, kidney failure, heart attacks, stroke, and amputation of lower limbs. Diabetes burden is strongly linked to metabolic risks and behavioral factors. Algorithms supporting predictive models for the risk of getting diabetes or its complications have been developed using artificial intelligence. It is also capable of identifying diabetes mellitus type based on the data obtained from a patient.",
  imageUrl: Skin,
  urlLink: "https://www.youtube.com/"
},
{
  title: "Diabetes",
  description: "Diabetes is a leading cause of blindness, kidney failure, heart attacks, stroke, and amputation of lower limbs. Diabetes burden is strongly linked to metabolic risks and behavioral factors. Algorithms supporting predictive models for the risk of getting diabetes or its complications have been developed using artificial intelligence. It is also capable of identifying diabetes mellitus type based on the data obtained from a patient.",
  imageUrl: Skin,
  urlLink: "https://www.youtube.com/"
},
{
  title: "Diabetes",
  description: "Diabetes is a leading cause of blindness, kidney failure, heart attacks, stroke, and amputation of lower limbs. Diabetes burden is strongly linked to metabolic risks and behavioral factors. Algorithms supporting predictive models for the risk of getting diabetes or its complications have been developed using artificial intelligence. It is also capable of identifying diabetes mellitus type based on the data obtained from a patient.",
  imageUrl: Skin,
  urlLink: "https://www.youtube.com/"
}
]

const ProductsComponent = () => {
  return (
    <>
    {products.map((product,index) => (
      <div key={index}>
    <div className='w-screen flex flex-row justify-end pr-36'>
    <BiEdit size={30} className='cursor-pointer text-primaryColor'/>
    </div>
    <div className='w-screen flex flex-row'>
    <div className='w-1/2 pl-20'>
      <p className='font-semibold text-[36px] pb-3'>{product.title}</p>
      <p>{product.description}</p>
      <Link href="https://www.youtube.com"><p className='text-primaryColor mt-6 cursor-pointer'>Go to product</p></Link>
    </div>
    <div className='w-1/2 h-full hidden md:flex justify-center items-center'>
            <div className=''>
                <Image className='max-w-[350px]' src={Skin} />
            </div>
        </div>
    </div></div>))}
    </>
  )
}

export default ProductsComponent