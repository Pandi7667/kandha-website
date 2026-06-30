import Link from "next/link"
const Govt_Service = () => {

    return (
      <div id="/governmentServices" className="bg-[#f2f0f1]">
          <div className="line-gradient relative inset-x-0 bottom-0 w-full md:h-2 h-1 mb-5"></div>
          <div className="">
              <div className="mt-14 flex flex-col md:text-justify text-center justify-center items-center w-[84%] max-w-[1400px] mx-auto gap-5">
              <span className="font-light">                
                  Kandha Consulting Corp is a Minority Woman Owned Certified Business Enterprise 
                  (MBE/WBE) which provides IT service management, Project management and workforce 
                  structuring initiatives. Kandha’s objective is to help people and organizations 
                  successfully adapt to change - whatever the change entails.
              </span>
              <span className="font-light">                
                  Kandha is expert in leading large scale initiatives spanning technology rollouts, 
                  strategic resource planning, learning organization operating models, managed services, 
                  future of learning, reskilling/ upskilling strategies, unconventional talent pipeline building, 
                  scenario planning, digital skilling strategy implementation, employee engagement and change 
                  management.
              </span>   
  
              </div>       
              <div className="flex justify-center items-center p-10 pb-20">
                    <button className="transition-button px-5 py-2 my-10 bg-black text-white text-sm ml-2">
                        <Link href="https://4b42e197-55f6-4ecb-920c-030e46542db4.filesusr.com/ugd/f16624_969c81db33ab4b7b9ed84f2a220f7b79.pdf" target="_blank">
                        DOWNLOAD NOW
                        </Link>
                    </button>
              </div>
  
          </div>
      </div>
    )
  }
  
  export default Govt_Service