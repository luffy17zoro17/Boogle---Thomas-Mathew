import { useSelector } from "react-redux";
import { selectColorMode } from "../../reducers/colorMode/colorModeSlice";
import ImageProp from "./ImageProp";




const TextProp = ({title,titleclassN,details,detailsclassN,tdivclassN,
        subDetail,subDetailTwo,subDetailThree,tonClick}) => 
{
    const ColorTheme = useSelector(selectColorMode);
    return (
      <div onClick={tonClick} className={tdivclassN}>
        <h1 className={titleclassN}>{title}</h1>
        
        <p className={detailsclassN}>{details}</p>
        {[subDetail,subDetailTwo,subDetailThree] ? 
         (<div className={ColorTheme === false ? `text-gray-500` : `text-green-500`}>
            <p>{subDetail}</p>
            <p>{subDetailTwo}</p>
            <p>{subDetailThree}</p>
         </div>) 
         : (<div></div>)}
      </div>  

    );
}

export default TextProp;