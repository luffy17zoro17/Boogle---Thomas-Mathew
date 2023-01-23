import IconProp from "./props/IconProp";
import TextProp from "./props/TextProp";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useSelector } from "react-redux";
import { selectColorMode } from "../reducers/colorMode/colorModeSlice";


const BoogleLetters = [
    {
        id:1,
        letter:"B",
        value:'0',
    },
    {
        id:2,
        letter:"o",
        value:'1',
    },
    {
        id:3,
        letter:"o",
        value:'2',
    },
    {
        id:4,
        letter:"o",
        value:'3',
    },
    {
        id:5,
        letter:"o",
        value:'4',
    },
    {
        id:6,
        letter:"o",
        value:'5',
    },
    {
        id:7,
        letter:"o",
        value:'6',
    },
    {
        id:8,
        letter:"o",
        value:'7',
    },
    {
        id:9,
        letter:"o",
        value:'8',
    },
    {
        id:10,
        letter:"o",
        value:'9',
    },
    {
        id:11,
        letter:"o",
        value:'10',
    },
    {
        id:12,
        letter:"g",
        value:'11',
    },
    {
        id:13,
        letter:"l",
        value:'12',
    },
    {
        id:14,
        letter:"e",
        value:'13',
    },



]


const BooglePagination = () => {
    const ColorTheme = useSelector(selectColorMode);

    return (
      <div className={ColorTheme===false ? `pt-5 pb-11 flex justify-center lg:absolute lg:w-full
         lg:left-0` : `bg-gradient-to-r from-gray-800 via-gray-500 to-gray-800
         text-purple-200
         pt-5 pb-11 flex justify-center lg:absolute lg:w-full
         lg:left-0`}>
        <div className="flex items-center">
            <div className="flex">
            {BoogleLetters.map((letr)=>(
                <div key={letr.id}>
                    <TextProp title={letr.letter} titleclassN={`text-3xl border-t-0 border-b-[0.2rem] rounded-full shadow-sm shadow-black
                         border-x border-yellow-500 text-cyan-400 px-1`}
                     details={letr.value} 
                     detailsclassN={`hover:text-cyan-400 cursor-pointer
                       ${(letr.id===1 || letr.id>11) ? `invisible` : ""}
                       ${(letr.id===2) ? "text-cyan-400 " : ""}`}
                     tdivclassN={`flex flex-col items-center space-y-3`}  
                    />              
                </div>    
            ))}
            </div>

            <div className="flex flex-col items-center">
              <IconProp icon={<ArrowRightIcon className="mb-5"/>}/>
              <TextProp title={`Next`} titleclassN={`cursor-pointer hover:text-purple-600`}/>
            </div>
        </div>
      </div>  
    );
}

export default BooglePagination;