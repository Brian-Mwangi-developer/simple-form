import {useState} from 'react'
import axios from 'axios'



const Form = () => {
  
 
  const [ name, setName]                  = useState('')
  const [ phoneNumber, setPhoneNumber]    = useState('')
  const [ nationalId, setNationalId ]   = useState('')
  const [emailAddress, setEmailAddress]   = useState('')
  const [ productId, setProductId ]      = useState('')
  const [productName,setProductName]     = useState('')
  const [ files, setFiles ]               = useState()
  const [ idPhoto, setIdPhoto ]           = useState()
  const [ isSubmited, setIsSubmited ]     = useState(false)
  console.log(files)
  console.log(idPhoto)

  const changeHandler = (e) =>{
    setFiles(e.target.files[0]);
   
  }
  const changeImageHandler = (e) =>{
    setIdPhoto(e.target.files[0]);
  }
  

  let sendEmail = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('phoneNumber', phoneNumber);
    formData.append('nationalId', nationalId);
    formData.append('email', emailAddress);
    formData.append('productId', productId);
    formData.append('productName', productName);
    formData.append('files', files);
    formData.append('idPhoto', idPhoto);
    console.log(formData)
    let url = 'http://localhost:7000/api/mail';
    try {
      await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    }catch(err){
      console.log(err)
    }
  
    setNationalId('')
    setFiles('')
    setProductId('')
    setName('')
    setEmailAddress('')
    setPhoneNumber('')
    setProductName('')
    setIsSubmited(true)
    
  };
 

  return (
    <div className='container m-auto py-16 '>
      <h2 className="text-5xl text-left sm:text-center font-semibold text-[#6495ED] capitalize ">Apply Now</h2>
      <hr className='w-90'/>
      <section className="max-w-4xl p-6 mx-auto   mt-20">  
      { isSubmited ? (
        <div class=" rounded-md p-3 flex justify-center ">
        <svg
            class="stroke-2 stroke-current text-green-600 h-8 w-8 mr-2 flex-shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M0 0h24v24H0z" stroke="none" />
            <circle cx="12" cy="12" r="9" />
            <path d="M9 12l2 2 4-4" />
        </svg>
  
        <div class="text-green-700">
          <div class="font-bold text-xl">Application is Submit successfully</div>
    
           
        </div>
      </div>
      ):(
        <form  encType="multipart/form-data" action='/mail' onSubmit={sendEmail}   >
         <h2 className="text-5xl text-center font-semibold text-[#23314C] capitalize">Tell Us About Your Qualifications</h2>
         <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2">
         
           
             <div>
               
               <label className="text-[#23314C] " >Full Name</label>
               <input name= "name" type="text" placeholder= "John Doe" required  value={ name } onChange={(e)=> setName(e.target.value)}  className="block w-full px-4 py-2 mt-2 text-[#23314C] bg-white border border-gray-300 rounded-md   focus:border-blue-500 focus:outline-none focus:ring"/>
             </div>
             <div>
               <label className="text-[#23314C] " >Phone Number</label>
               <input name= "phoneNumber" type="number" placeholder= "07xxxxxxx" required  value={ phoneNumber }   onChange={(e)=> setPhoneNumber(e.target.value)}  className="block w-full px-4 py-2 mt-2 text-[#23314C] bg-white border border-gray-300 rounded-md   focus:border-blue-500 focus:outline-none focus:ring"/>
             </div>
             <div>
               <label className="text-[#23314C] " >National ID Number</label>
               <input  name= "nationalId" type="number" placeholder= "ID number" required  value={ nationalId } onChange={(e)=> setNationalId(e.target.value)}  className="block w-full px-4 py-2 mt-2 text-[#23314C] bg-white border border-gray-300 rounded-md   focus:border-blue-500 focus:outline-none focus:ring"/>
             </div>
             <div>
               <label className="text-[#23314C] " >Email Address</label>
               <input  name= "emailAddress" type="text" placeholder= "example@mail.com" required  value={ emailAddress } onChange={(e)=> setEmailAddress(e.target.value)}  className="block w-full px-4 py-2 mt-2 text-[#23314C] bg-white border border-gray-300 rounded-md   focus:border-blue-500 focus:outline-none focus:ring"/>
             </div>
             <div>
               <label className="text-[#23314C] " >Product ID</label>
               <input  name= "productId" type="number" placeholder= "Product Id" required  value={ productId } onChange={(e)=> setProductId(e.target.value)}  className="block w-full px-4 py-2 mt-2 text-[#23314C] bg-white border border-gray-300 rounded-md   focus:border-blue-500 focus:outline-none focus:ring"/>
             </div>
             <div>
               <label className="text-[#23314C] " >Product Name</label>
               <input  name= "productName" type="text" placeholder= "Product Name" required  value={ productName } onChange={(e)=> setProductName(e.target.value)}  className="block w-full px-4 py-2 mt-2 text-[#23314C] bg-white border border-gray-300 rounded-md   focus:border-blue-500 focus:outline-none focus:ring"/>
             </div>
             <div>
               <label className="text-[#23314C] " >Mpesa Statement</label>
               <input name= "files" type="file" placeholder= "" required    onChange={changeHandler}  className="block w-full px-4 py-2 mt-2 text-[#23314C] bg-white border border-gray-300 rounded-md   focus:border-blue-500 focus:outline-none focus:ring"/>
             </div>
             <div>
               <label className="text-[#23314C] " >National id Photo</label>
               <input name= "idPhoto" type="file" placeholder= "" required    onChange={changeImageHandler}  className="block w-full px-4 py-2 mt-2 text-[#23314C] bg-white border border-gray-300 rounded-md   focus:border-blue-500 focus:outline-none focus:ring"/>
             </div>  
         </div>
         <div className="flex justify-center mt-6">
             <button type='submit'  className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#6495ED] rounded-md hover:bg-gray-600 focus:outline-none focus:bg-[#6495ED]">Submit</button>
         </div>
        </form>
        
      )}   
       
      </section>
    </div>
  )
}

export default Form