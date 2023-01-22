import IconProp from "./props/IconProp";
import InputProp from "./props/InputProp";
import TextProp from "./props/TextProp";
import CancelIcon from '@mui/icons-material/Cancel';
import MicNoneIcon from '@mui/icons-material/MicNone';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import SearchIcon from '@mui/icons-material/Search';

import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AppsIcon from '@mui/icons-material/Apps';

import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import MoreVertIcon from '@mui/icons-material/MoreVert';



const navbItems = [
    {
        id:1,
        title:"All",
        icon:<SearchIcon/>,
    },
    {
        id:2,
        title:"Images",
        icon:<PhotoSizeSelectActualIcon/>,
    },
    {
        id:3,
        title:"News",
        icon:<NewspaperIcon/>,
    },
    {
        id:4,
        title:"Shopping",
        icon:<LocalOfferIcon/>,
    },
    {   
        id:5,
        title:"Videos",
        icon:<VideoLibraryIcon/>,
    },
    {
        id:6,
        title:"More",
        icon:<MoreVertIcon/>,
    }
]





const Navbar = () => {
    return (
      <div className="flex justify-between pl-[6vw] pr-[3vw]
         py-3 h-[7.6rem] shadow shadow-black fixed top-0 w-full
         bg-white z-10">
        <div className="flex gap-[2vw]">    
        <TextProp title={"Boogle"} titleclassN={`pt-2 z-20 text-2xl lg:ml-[-2rem] cursor-pointer
          border-t-0 border-b-[0.2rem] rounded-full shadow-sm shadow-black
           border-x border-yellow-500 text-cyan-400 px-1 hover:shadow-purple-600`}/>     
        <div className="flex flex-col items-center gap-[2vw]">

          <div className="w-full flex absolute left-0 justify-center
             z-[-10]">
          <div className="relative flex items-center lg:left-[-13rem] 
            xl:left-[-20vw]">   
           <InputProp inPlaceholder={"one piece"} inclassN={`relative 
            rounded-full py-2 pl-4 border outline-none w-[30vw] text-sm
            border-4 border-green-300 hover:border-purple-500
             shadow hover:shadow-md sm:text-lg md:pl-5 xl:w-[37vw] xl:left-[2vw]`}/> 
          <div className="absolute flex right-[1rem] gap-[0.8vw]
            pl-3 xl:right-[-0.5rem]"> 
           <IconProp icoclassN={`hidden md:flex cursor-pointer`} icon={<CancelIcon className=""/>}/>
             <div className="border-l-[0.12rem] border-black hidden md:flex"/>
           <IconProp icoclassN={`text-red-500 hidden lg:flex cursor-pointer`} icon={<MicNoneIcon/>}/>
           <IconProp icoclassN={`text-yellow-500 hidden lg:flex cursor-pointer`} icon={<PhotoCameraIcon/>}/>
           <IconProp icoclassN={`text-blue-400 cursor-pointer hover:text-purple-600`} icon={<SearchIcon/>}/>
          </div> 
          </div>
          </div>
          
          <div className="flex items-center w-full 
             text-sm  justify-center fixed left-0 mt-[4.6rem]
             md:gap-[9rem]
             lg:left-[-8.5rem] xl:left-[-16vw]">
          <div className="flex gap-[1.7vw] sm:gap-[2vw] md:gap-[3vw]
           lg:gap-[1.5rem]">
          {navbItems.map((item)=>(  
          <div key={item.id} className={`hover:text-blue-500 cursor-pointer
            flex items-center ${item.id===1 ? 
          `border-b-4 text-blue-600 border-blue-600 pb-2` : `mb-3`}`}>  
          <IconProp icon={item.icon} icoclassN="scale-[0.7]"/>
          <TextProp title={item.title} />
          </div>
          ))}
          </div>

           <TextProp title={"Tools"} titleclassN={`mb-3 hidden md:flex cursor-pointer
              hover:text-blue-500`}/>
          </div>
        </div>
        </div>

        <div className="flex items-center gap-[1vw] mt-2 absolute right-4">
          <IconProp icoclassN={`hidden md:flex cursor-pointer`} icon={<SettingsApplicationsIcon/>}/>
          <IconProp icoclassN={`hidden md:flex cursor-pointer`} icon={<AppsIcon/>}/>
          <div className="bg-blue-500 text-white rounded-l-xl
           px-2 py-1 cursor-pointer shadow shadow-gray-500 hover:bg-purple-500">Sign in</div>
        </div>
      </div>  
    );
}

export default Navbar;