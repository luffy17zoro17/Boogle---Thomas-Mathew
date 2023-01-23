import TextProp from "../props/TextProp";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconProp from "../props/IconProp";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ImageProp from "../props/ImageProp";

import ShareIcon from '@mui/icons-material/Share';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import RightSideBottom from "./RightSideBottom";
import { useSelector } from "react-redux";
import { selectColorMode } from "../../reducers/colorMode/colorModeSlice";




const RightSideDetails = () => {
    const ColorTheme = useSelector(selectColorMode);

    return (
      <div className="hidden lg:block">
        <div className="flex justify-between w-[22rem] items-center pb-5 border rounded-l-xl p-3">
         <div className="flex">
          <TextProp title={`One Piece`} details={`1999 Adventure 20 seasons`} detailsclassN={``}/><IconProp icon={<MoreVertIcon/>} />  
         </div>
         <IconProp icoclassN={ColorTheme === false ? `rounded-full p-1 px-[0.35rem] shadow shadow-gray-400
             cursor-pointer hover:bg-green-100 hover:text-green-500` : 
             `rounded-full p-1 px-[0.35rem] shadow shadow-white
             hover:shadow-green-500
             cursor-pointer hover:bg-green-100 hover:text-green-500`
              } icon={<ArrowRightIcon/>} />
        </div> 

        <div className="flex">
           <div>
             <ImageProp
                isrc={`https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRTZiGiBgSUs1bbN2ZwJeWOFYkQcC8_5b2xd5q33yCr_0uaTvTy`}
                iht={"500"}
                iwd={"500"}
                ialt={"tll"}
                imgclassN={"object-cover h-[12rem] w-[7.7rem] rounded-l-xl cursor-pointer"}
             />
           </div>
           <div>
            <div className="flex">
             <div>
               <ImageProp
                 isrc={`https://occ-0-395-420.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABa4UAEx4vGcwwHQGJ4rLB3zaYiVdZZ7lgSdgv8OAWEb34BGXEFbNumHPKAupfLMmOiOD-DIsXy5DRklM_Qk9xwIape-S7O0u67l4BYO9Ghj-.png?r=74a`}
                 iht={"500"}
                 iwd={"500"}
                 imgclassN={`object-contain h-[6rem] w-[10rem] mb-[0.1rem] px-[0.1rem] cursor-pointer`}
                 ialt={"tl"}
               />
             </div>
             <div>
               <ImageProp
                  isrc={`https://upload.wikimedia.org/wikipedia/en/thumb/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg/220px-One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg`}
                  iht={"500"}
                  iwd={"500"}
                  ialt={"tr"}
                  imgclassN={`object-cover ml-[0.1rem] mb-[0.2rem] h-[6rem] w-[4.2rem] cursor-pointer`}
               /> 
             </div> 
            </div>
            <div className="flex">
               <div>
                 <ImageProp
                    isrc={`https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_QL75_UX190_CR0,2,190,281_.jpg`}
                    iht={"500"}
                    iwd={"500"}
                    ialt={"bl"}
                    imgclassN={`object-cover w-[4.5rem] h-[5.9rem] ml-[0.1rem] px-[0.1rem] cursor-pointer`}
                 />
               </div>
               <div>
                 <ImageProp
                    isrc={`https://i.ytimg.com/vi/LHTYpWI3S6Q/maxresdefault.jpg`}
                    iht={"500"}
                    iwd={"500"}
                    ialt={"br"}
                    imgclassN={`object-cover w-[9.7rem] h-[5.9rem] pl-[0.1rem] cursor-pointer`}
                 />
               </div>
            </div>  
           </div>
        </div>


        <div className="w-[22rem] border rounded-l-xl p-3">
           <div className="flex justify-between py-3">
              <TextProp title={`One Piece`} titleclassN={`text-3xl`}
               details={`Manga series`}/> 
               <IconProp icoclassN={ColorTheme===false ? `hover:bg-gray-200 text-gray-500
                rounded-full px-2 flex justify-center
                items-center flex-col cursor-pointer h-[2.5rem]` :
                `hover:bg-gray-200 text-gray-200
                hover:text-gray-500
                rounded-full px-2 flex justify-center
                items-center flex-col cursor-pointer h-[2.5rem]`
                 } icon={<ShareIcon/>}/>
           </div>
           
           <TextProp
              detailsclassN={`py-3`}
              details={`One Piece is a Japanese manga series written and illustrated by
                  Eiichiro Oda. It has been serialized in Shueisha's shōnen manga magazine 
                  Weekly Shōnen Jump since July 1997, with its individual chapters compiled
                   into 104 tankōbon volumes as of November 2022. Wikipedia`}
           />
           <div className="space-y-2"> 
           <TextProp title={"Author:"} titleclassN={`font-semibold`} 
              details={"Echiro Oda"} detailsclassN={`${ColorTheme === false ? `text-blue-800 cursor-pointer
              hover:underline` : `text-green-200 cursor-pointer
              hover:underline`}`}
              tdivclassN={`flex gap-1`}/>
           <TextProp title={"Volumes:"} titleclassN={`font-semibold`}
              detailsclassN={`${ColorTheme === false ? `text-blue-800 cursor-pointer
              hover:underline` : `text-green-200 cursor-pointer
              hover:underline`}`}
              details={"104 (List of volumes)"} tdivclassN={`flex gap-1`}/>
           <TextProp title={"Published by:"} titleclassN={`font-semibold`} 
             detailsclassN={`${ColorTheme === false ? `text-blue-800 cursor-pointer
             hover:underline` : `text-green-200 cursor-pointer
             hover:underline`}`}
             details={"Shueisha"} tdivclassN={`flex gap-1`}/>
           <TextProp title={"Genres:"} titleclassN={`font-semibold`}
             detailsclassN={`${ColorTheme === false ? `text-blue-800 cursor-pointer
             hover:underline` : `text-green-200 cursor-pointer
             hover:underline`}`}
             details={"Fantasy, Action manga, Comedy"} tdivclassN={`flex gap-1`}/>
           <TextProp title={"Adaptations:"} titleclassN={`font-semibold`}
             detailsclassN={`${ColorTheme === false ? `text-blue-800 cursor-pointer
              hover:underline` : `text-green-200 cursor-pointer
              hover:underline`}`}
             details={"One Piece (1999), One Piece Film: Red (2022), MORE"} tdivclassN={`flex gap-1`}/>
           </div>
           <div className="pt-3">
              <div className="flex justify-between border-y p-2"><TextProp title={"Time frame"}/><IconProp icon={<ArrowDropDownIcon/>}/></div>
              <div className="flex justify-between border-y p-2"><TextProp title={"Birthday"}/><IconProp icon={<ArrowDropDownIcon/>}/></div>
           </div>
           
           
           <RightSideBottom/>
        </div>
        <TextProp title={`Feedback`} titleclassN={ColorTheme === false ? 
          `text-end text-sm text-gray-500 pt-1 pr-2` : `text-end text-sm text-green-400 pt-1 pr-2`}/>
        
        <div className="border rounded-l-xl my-7 pb-3">
        <TextProp title={`See results about`} titleclassN={`p-3 text-lg`}/>
        <div className="flex justify-between items-center p-3 border-t 
           cursor-pointer hover:rounded-l-xl hover:bg-gray-200">
        <div className="flex gap-3">
          <ImageProp 
            isrc={`https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRTZiGiBgSUs1bbN2ZwJeWOFYkQcC8_5b2xd5q33yCr_0uaTvTy`}
            iwd={`500`}
            iht={`500`}
            ialt={`chopper`}
            imgclassN={`h-[3rem] w-[3rem] object-cover rounded-l-md ml-1`}
          />
          <TextProp title={`One Piece`} details={`Japanese animated series`}/>
        </div>
        <div>
           <IconProp icon={<ArrowRightIcon/>}/>
        </div>
        </div>
        </div>
      </div>  
    );
}

export default RightSideDetails;