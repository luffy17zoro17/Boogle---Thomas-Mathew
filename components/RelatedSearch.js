import IconProp from "./props/IconProp";
import TextProp from "./props/TextProp";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from "react-redux";
import { selectColorMode } from "../reducers/colorMode/colorModeSlice";



const RelatedSearchList = [
    {
        id:1,
        title: "one piece anime",
    },
    {
        id:2,
        title:"one piece dress",
    },
    {
        id:3,
        title:"one piece manga",
    },
    {
        id:4,
        title:"one piece movie",
    },
    {
        id:5,
        title:"one piece for women",
    },
    {
        id:6,
        title:"one piece - imdb",
    },
    {
        id:7,
        title:"one piece netflix",
    },
    {
        id:8,
        title:"one piece wiki"
    }
]

const RelatedSearch = () => {

    const ColorTheme = useSelector(selectColorMode);
    return (
      <div className={`py-8 flex`}>
       <div className="pl-[4vw] lg:pl-0"> 
        <div className="flex items-center pb-5">
            <TextProp title={`Related searches`} titleclassN={`text-xl`}/>
        <IconProp icon={<MoreVertIcon/>}/></div>
        <div className="flex gap-4 flex-wrap
        ">
        {RelatedSearchList.map((rel)=>(
            <div key={rel.id} className={ColorTheme === false ? `flex items-center px-7 py-3 rounded-full
              bg-gray-200 gap-[1vw] w-[19rem] cursor-pointer hover:underline` : 
              `flex items-center px-7 py-3 rounded-full
              bg-gray-900 gap-[1vw] w-[19rem] cursor-pointer hover:underline`}>
               <IconProp icon={<SearchIcon/>}/><TextProp title={rel.title}/> 
            </div>    
        ))}
        </div>
       </div>  
      </div>  
    );
}

export default RelatedSearch;