import IconProp from "../props/IconProp";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TextProp from "../props/TextProp";

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



const PeopleAlsoAsk = () => {
    return (
     <div className="flex justify-center">
      <div className="pt-[6rem] space-y-3
          w-[90vw] lg:w-[35rem] xl:w-[49rem]">
        <div className="flex items-center"><TextProp title={`People Also Ask`} titleclassN={`text-xl`}/>
        <IconProp icon={<MoreVertIcon/>}/></div>
        <ul className="space-y-3 cursor-pointer">
           <hr/> 
          <li className="flex justify-between"><TextProp title={`Is One Piece fully completed?`}/><IconProp icon={<ArrowDropDownIcon/>}/></li>
          <hr/>
          <li className="flex justify-between"><TextProp title={`Is One Piece not for kids?`}/><IconProp icon={<ArrowDropDownIcon/>}/></li> 
          <hr/>
          <li className="flex justify-between"><TextProp title={`Why is it called 1 piece?`}/><IconProp icon={<ArrowDropDownIcon/>}/></li>
          <hr/>
          <li className="flex justify-between"><TextProp title={`Is One Piece at its end?`}/><IconProp icon={<ArrowDropDownIcon/>}/></li>
          <li className="flex items-center text-sm"><hr className="w-full mr-[0.5rem]"/>Feedback</li>
        </ul>
      </div>  
     </div>  
    );
}

export default PeopleAlsoAsk;