import IconProp from "../props/IconProp";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ImageProp from "../props/ImageProp";
import TextProp from "../props/TextProp";

import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useSelector } from "react-redux";
import { selectColorMode } from "../../reducers/colorMode/colorModeSlice";



const TopStories = () => {

    const ColorTheme = useSelector(selectColorMode); 

    return (
      <div className="flex justify-center
      ">
       <div className="">
         <div className="">
         
         <div className="lg:flex lg:justify-center">
         <div className="lg:w-[35rem] xl:w-[50rem]"> 
          <TextProp 
             title={`About 2,12,00,00,000 results(0.49 seconds)`}
             titleclassN={ColorTheme === false ? 
               `pb-4 text-gray-500 text-sm pl-3 sm:pl-0` : 
               `pb-4 text-green-400 text-sm pl-3 sm:pl-0`}
          />
          <div>
          <div className="flex flex-col">
           <div className="flex items-center py-3 pl-3 text-xl sm:pl-0">
            <IconProp icon={<NewspaperIcon/>}/>Top stories
            <IconProp icon={<MoreVertIcon/>}/>
          </div> 
          <hr className="border w-full"/> 
          </div> 
         </div> 
         </div>
         </div>
         
          <div>
            <div className={`${ColorTheme===false ? `text-blue-800 flex flex-wrap sm:justify-center` :
                           `text-purple-200 flex flex-wrap sm:justify-center`}`}>
               <div className="">
                  <div className="flex p-3 border-b border-r sm:w-[18rem]
                     md:w-[23rem] lg:w-[17rem] xl:w-[25rem]">
                   <div>
                   <ImageProp
                     isrc={`https://play-lh.googleusercontent.com/MNPn-JvDDvYNRrMKx1qX9YW-WkR7ps-PP5ez75MUK_Ovp3o21GbxUK3FvL2p5DSv4AU`}
                     iwd={`660`}
                     iht={'660'}
                     ialt={'profile_pic'}
                     imgclassN={`object-contain h-[2rem] w-[2rem]`}
                     />
                   <TextProp
                      title={`One piece heading for the final chapter! 
                         Will Luffy be the Pirate King?`}
                      titleclassN={`hover:underline cursor-pointer`}   
                      details={`21 hours ago`}   
                      detailsclassN={`${ColorTheme===false ? `text-sm text-gray-500` : `text-sm text-green-300`}`}
                   />
                   </div> 
                   <ImageProp
                     isrc={`https://w0.peakpx.com/wallpaper/406/172/HD-wallpaper-luffy-one-piece.jpg`}
                     iwd={`540`}
                     iht={`540`}
                     imgclassN={`object-cover rounded-md w-[260px] h-[100px] pl-2 cursor-pointer`}
                     ialt={'content_pic'}
                      
                   />
                  </div>

                  <div className="flex p-3 sm:w-[18rem] md:w-[23rem]
                    lg:w-[17rem] xl:w-[25rem]">
                   <div>
                   <ImageProp
                     isrc={`https://scontent.fcok10-3.fna.fbcdn.net/v/t39.30808-6/275061178_111212824820564_6320316483284738935_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=gGi5UFgg8fAAX-hQQnB&_nc_oc=AQnkl1fsu3OZZOVTDl9rQNmpcXLWMeixe3SLcpJjtAF_3DE07kCbFvFYbiHREYpiFXd82T5KkjwefJuLrhpFuS5z&tn=rlWRLJ9AjNsGC-w2&_nc_ht=scontent.fcok10-3.fna&oh=00_AfClobHl7-Y3GCtrm_Gc6DYadS5kSBoRkJ1njO1masbQdA&oe=63CF5F30`}
                     iwd={`30`}
                     iht={'30'}
                     ialt={'profile_pic'}
                     imgclassN={`object-contain`}
                     />
                   <TextProp
                      title={`One Piece episode 1048: Release date and time, where to watch, and more`}
                      titleclassN={`hover:underline cursor-pointer`} 
                      details={`23 hours ago`}
                      detailsclassN={`${ColorTheme===false ? `text-sm text-gray-500` : `text-sm text-green-300`}`}
                    />  
                   </div> 
                   <ImageProp
                     isrc={`https://w0.peakpx.com/wallpaper/936/808/HD-wallpaper-one-piece-kozuki-momonosuke-monkey-d-luffy.jpg`}
                     iwd={`540`}
                     iht={`540`}
                     imgclassN={`object-cover rounded-md w-[280px] h-[100px] pl-2 cursor-pointer`}
                     ialt={'content_pic'}
                      
                   />
                  </div>
               </div> 

               <div>
               <div className="flex p-3 h-[9.5rem] sm:h-[11rem] sm:w-[18rem] md:w-[23rem]
                  md:h-[9.5rem] lg:h-[11rem] lg:w-[17rem] xl:h-[9.5rem] xl:w-[25rem]">
                   <div>
                   <ImageProp
                     isrc={`https://i.kym-cdn.com/entries/icons/facebook/000/020/540/polygonlol.jpg`}
                     iwd={`630`}
                     iht={'630'}
                     ialt={'profile_pic'}
                     imgclassN={`object-contain w-[2rem] h-[2rem]`}
                     
                     />
                   <TextProp
                      title={`JRPG One Piece Odyssey is a major letdown for One Piece fans`}
                      titleclassN={`hover:underline cursor-pointer`} 
                      details={`19 hours ago`}
                      detailsclassN={`${ColorTheme===false ? `text-sm text-gray-500` : `text-sm text-green-300`}`}
                   />
                   </div> 
                   <ImageProp
                     isrc={`https://w0.peakpx.com/wallpaper/557/859/HD-wallpaper-one-piece-one-piece-odyssey.jpg`}
                     iwd={`540`}
                     iht={`540`}
                     imgclassN={`object-cover rounded-md w-[240px] h-[100px] pl-2 cursor-pointer`}
                     ialt={'content_pic'}
                      
                   />
                  </div>

                  <div className=" mt-[-0.25rem] flex p-3 border-t border-l sm:w-[18rem]
                     md:w-[23rem] lg:w-[17rem] xl:w-[25rem]">
                   <div>
                   <ImageProp
                     isrc={`https://scontent.fcok10-4.fna.fbcdn.net/v/t39.30808-6/279005881_312573897691408_2474662102687542369_n.jpg?stp=dst-jpg_p320x320&_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=tEWBELKq1mIAX-2-c_R&_nc_ht=scontent.fcok10-4.fna&oh=00_AfAiGswqA8ast8jVL5KhO-VBkyHHsLll8sKKw5L__cfPLQ&oe=63D0449C`}
                     iwd={`430`}
                     iht={'430'}
                     ialt={'profile_pic'}
                     imgclassN={`object-contain h-[2rem] w-[6rem]`}
                     />
                   <TextProp
                      title={`Japan’s real-world One-Piece fitness gym is open, lets you pump giant manga`}
                      titleclassN={`hover:underline cursor-pointer`} 
                      details={"1 day ago"}
                      detailsclassN={`${ColorTheme===false ? `text-sm text-gray-500` : `text-sm text-green-300`}`}
                   />
                   </div> 
                   <ImageProp
                     isrc={`https://soranews24.com/wp-content/uploads/sites/3/2023/01/OP-6.jpg?resize=640,426`}
                     iwd={`540`}
                     iht={`540`}
                     imgclassN={`object-cover rounded-md w-[300px] h-[100px] pl-2 cursor-pointer`}
                     ialt={'content_pic'}
                      
                   />
                  </div> 

               </div>
            </div>
          </div>

          <div className="relative flex items-center 
          justify-center top-11">
           
           <hr className="w-full lg:w-[35rem] xl:w-[50rem]"/>
           <div className="text-black flex absolute rounded-full bg-green-300 px-[5vw] py-1
            cursor-pointer hover:bg-green-400">
             More news <IconProp icon={<KeyboardDoubleArrowRightIcon/>}/>
           </div>
          </div>
                
          </div>


       </div> 
      </div> 
    );
}

export default TopStories;