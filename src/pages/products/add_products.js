import React, { useState } from 'react'
import Navbar from '../../../components/navbar'
import {IoMdAdd} from 'react-icons/io'
import {BiEdit} from 'react-icons/bi'
import Dropdown from '../../../components/dropdown'
import { useRouter } from 'next/router'
import cookieCutter from 'cookie-cutter'
import TypeDropdown from '../../../components/type_dropdown'

const AddProducts = () => {
    const [image, setImage] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("Options")
    const [selectedType, setSelectedType] = useState("Options")
    const [isValid, setIsValid] = useState(true)
    const [isTypeValid, setIsTypeValid] = useState(true)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isImageNull, setIsImageNull] = useState(false)
    const [types, setTypes] = useState([])

    const router = useRouter();

    const hiddenClicked = () => {
        document.getElementById("hiddenFile").click();
      }

      const handleImageChange = (e) => {
        setImage(e.target.files[0]);
      };

      async function uploadImage() {
        let headersList = {
          "Accept": "*/*"
         }
         
         let bodyContent = new FormData();
         bodyContent.append("upload_preset", "cvm3azcu");
         bodyContent.append("file", image);
         
         let response = await fetch("https://api.cloudinary.com/v1_1/ddkybdc5n/image/upload", { 
           method: "POST",
           body: bodyContent,
           headers: headersList
         });
         
         let data = await response.json();
         console.log(data.url);
         return data.url;
      }

      function postProduct(title, description, url, image_path, category_name) {

        const token = localStorage.getItem('token');
    
        const query = `
                mutation{
                    insert_products(objects: {
                      title: "${title}",
                      description: "${description}",
                      link: {
                        type: "${selectedType}",
                        url: "${url}"
                      },
                      image_path: "${image_path}",
                      category_name: "${category_name}"
                    }){
                      returning{
                        title
                      }
                    }
                }
            `;
    
            const options = {
            method: 'POST',
            headers: {
              "Accept": "*/*",
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json"
          },
            body: JSON.stringify({ query })
            };
    
            fetch(process.env.baseUrl, options)
            .then(response => response.json())
            .then(data => {
    
              let category = data.data;
    
              if((typeof category === 'undefined')) {
                if(data.errors[0].message === "Could not verify JWT: JWTExpired") {
                  cookieCutter.set('signed-in', false)
                  localStorage.removeItem('token');
                  router.replace('/signin')
              }
              } else {
                setIsSubmitting(false)
                router.replace('/products')
              }
            });
      }

      async function onSubmit(event) {
        event.preventDefault();
        setIsSubmitting(true)
        if(selectedType == "Options"){
          setIsTypeValid(false);
        } else {
          setIsTypeValid(true);
          if(selectedCategory == "Options") {
            setIsValid(false);
          } else {
            setIsValid(true);
            if(image) {
              setIsImageNull(false);
              const imageUrl = await uploadImage();
              postProduct(event.target.title.value, event.target.description.value, event.target.url.value, imageUrl, selectedCategory);
              setIsSubmitting(false);
            } else {
              setIsImageNull(true);
              setIsSubmitting(false);
            }
          }
        }
      }

  return (
    <>
    <Navbar />
    <div className='w-screen flex justify-center'>
        <div className='w-3/5 items-center border-2 rounded-lg border-textFormBorderbg px-10 pb-10 mt-10'>
        <div className='grid text-center gap-2 mb-5 mt-10'>
        <div className='text-3xl'>Add Product</div>
                </div>
                <form onSubmit={onSubmit}>
                <div className='text-left my-1'>
        <p className='font-bold mb-1'>Title</p>
        <input id="title" type= 'text' name="title" placeholder={'Enter the product title'} className='bg-textFormbg border-textFormBorderbg border-2 outline-none w-full py-2 px-2 rounded-lg' required/>
    </div>
    <div className='text-left my-4 flex flex-row gap-3'>
    <div>
        <p className='font-bold mb-1'>Type</p>
        <TypeDropdown selectedType={selectedType} setType= {(category) => setSelectedType(category)} />
        {isTypeValid ? "" : <div className='text-red-400 mt-10 w-full text-center mb-2 font-medium'>{"Please select a type"}</div>}
        </div>
        <div className='w-full'>
        <p className='font-bold mb-1'>URL</p>
        <input id="url" type= 'text' name="url" placeholder={'Enter the product url'} className='bg-textFormbg border-textFormBorderbg border-2 outline-none w-full py-2 px-2 rounded-lg' required/>
        </div>
    </div>
    <div className='text-left my-4'>
        <p className='font-bold mb-1'>Category</p>
        <Dropdown selectedCategory={selectedCategory} setCategory= {(category) => setSelectedCategory(category)} />
        {isValid ? "" : <div className='text-red-400 mt-10 w-full text-center mb-2 font-medium'>{"Please select a category"}</div>}
    </div>
    <div className='text-left my-1'>
        <p className='font-bold mb-1'>Description</p>
        <textarea name="description" rows="5" id="description" placeholder={'Enter the product description'} className='bg-textFormbg border-textFormBorderbg border-2 outline-none w-full py-1 px-2 rounded-lg' required/>
    </div>
    <div className='text-left my-1'>
        <p className='font-bold mb-1'>Image</p>
        {image ? (
              <div className='relative z-0 max-w-[400px] h-[250px]'>
                <img className="max-w-[400px] h-[250px] rounded-lg my-5" src={URL.createObjectURL(image)} />
                <BiEdit onClick={hiddenClicked} className='text-primaryColor absolute inset-0 z-10 cursor-pointer' size={25}/>
                <input
                name="mainImage"
                type="file"
                accept="image/*"
                id='hiddenFile'
                onChange={handleImageChange}
                className="invisible h-0"
              />
              </div>
            ) : (<div className='w-full h-[153px] border-2 border-dashed border-textFormBorderbg flex flex-col justify-center items-center'>
            <IoMdAdd onClick={hiddenClicked} size={40} className='text-primaryColor cursor-pointer'/>
            <input
                name="mainImage"
                type="file"
                accept="image/*"
                id='hiddenFile'
                onChange={handleImageChange}
                className="invisible h-0"
              />
        </div>)}
        <div className='text-red-400 mt-10 w-full text-center mb-2 font-medium'>{isImageNull ? "Image can not be null" : ""}</div>
    </div>
    <button type='submit' disabled={isSubmitting} className='w-full bg-primaryColor font-bold disabled:bg-gray-300 disabled:text-gray-600 text-onPrimary rounded-lg cursor-pointer mt-14 py-2 text-center hover:bg-secondaryColor'>
                                {isSubmitting ? "Please Wait..." : "Add Product"}
                            </button>
            </form>
        </div>
    </div>
    </>
  )
}

export default AddProducts