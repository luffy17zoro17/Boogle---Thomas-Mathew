


const InputProp = ({inPlaceholder,inclassN,indivclassN}) => {
    return (
      <div className={indivclassN}>
         <input
           placeholder={inPlaceholder}
           className={inclassN}
         />
      </div>  
    );
}

export default InputProp;