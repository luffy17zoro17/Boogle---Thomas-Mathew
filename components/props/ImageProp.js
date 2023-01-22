import Image from "next/image";


const ImageProp = ({isrc,iht,iwd,imgclassN,ialt, idivclassN,
        isrcOne,isrcTwo,isrcThree}) => {
    return (
      <div className={idivclassN}>
        {((isrc || isrcOne || isrcTwo || isrcThree) ? (
        <Image
          src={isrc ? (isrc) : (isrcOne) ? (isrcOne) : (isrcTwo) ? (isrcTwo) : (isrcThree) ? (isrcThree) : ('')}
          height={iht}
          width={iwd}
          className={imgclassN}
          alt={ialt}
        />
        ) : (<div></div>))}
      </div>  
    );
}

export default ImageProp;