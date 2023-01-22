import TextProp from "../props/TextProp";
import Link from "next/link";


const Footer = () => {
    return (
     <div className="flex justify-center relative lg:absolute lg:w-full lg:left-0
       lg:mt-[9rem]">
      
      <div className="absolute w-full
      border-4 flex justify-center bg-gray-200 py-4">
      <div className="">
         <TextProp 
           title={`India`}
           titleclassN={`pr-5 border-gray-400 px-6`} 
           details={`⚫ 000000, xxxx, xxxx - Based on your past activity
            - Update location`}
           detailsclassN={`border-l border-gray-400 px-5 pb-2`} 
           tdivclassN={`flex`}/>
         <div className="flex pt-2 px-6">
          <TextProp title={`Help`} details={`Send feedback`} tdivclassN={`flex gap-[2vw]`}/> 
          <TextProp title={`Privacy`} details={`Terms`} tdivclassN={`flex gap-[2vw]`} />
         </div>
         <div className="pt-6 flex justify-center">Boogle is created by --{'>'}&nbsp;
         <Link className="font-bold text-purple-600 hover:underline hover:text-red-700
           hover:text-lg"
          href={`https://www.linkedin.com/in/thomas-mathew-b26b87253/`}>Thomas Mathew</Link></div>
      </div> 
      <hr className="absolute w-full border-[-0.1rem] border-gray-400 mt-[3.5rem] sm:mt-[2rem]
        lg:mt-[2rem] xl:mt-[2rem]"/>
      </div> 
     </div> 
    )
}

export default Footer;