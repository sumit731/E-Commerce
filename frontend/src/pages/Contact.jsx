import { assets } from "../assets/assets"
import NewsletterBox from "../components/NewsletterBox"
import Title from "../components/Title"

const Contact = () => {
  return (
    <div>

      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img className="w-full md:max-w-[480px]" src={assets.contact_img} alt='' />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">125478 Salem Tabri <br/> Street 5, Near Metro</p>
          <p className="text-gray-500">Tel: (+91) 7845129635 <br/> Email: admin@gmail.com</p>
          <p className="font-semibold text-xl text-gray-600">Careers at Forever</p>
          <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, impedit.</p>  
          <button className="border px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Explore More</button>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact