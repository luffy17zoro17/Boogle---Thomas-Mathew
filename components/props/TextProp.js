import ImageProp from "./ImageProp";




const TextProp = ({title,titleclassN,details,detailsclassN,tdivclassN,
        subDetail,subDetailTwo,subDetailThree}) => 
{
    return (
      <div className={tdivclassN}>
        <h1 className={titleclassN}>{title}</h1>
        
        <p className={detailsclassN}>{details}</p>
        {[subDetail,subDetailTwo,subDetailThree] ? 
         (<div className="text-gray-500">
            <p>{subDetail}</p>
            <p>{subDetailTwo}</p>
            <p>{subDetailThree}</p>
         </div>) 
         : (<div></div>)}
      </div>  

    );
}

export default TextProp;