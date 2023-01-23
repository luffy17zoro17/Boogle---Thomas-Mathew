import { useSelector } from "react-redux";
import { selectColorMode } from "../../reducers/colorMode/colorModeSlice";
import ImageProp from "../props/ImageProp";
import TextProp from "../props/TextProp";



const CharacterList = [
    {
        id:1,
        title:"Monkey D. Luffy",
        isrc:`https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTda3OZD3vI96gSY-9pIaqOK3YVnDhboIlxnhOEURNDRL6jpj7shTPjXUf6xba0lI-7`,  
        ialt:"Luffy",
    },
    {
        id:2,
        title:"Roronoa Zoro",
        isrc:`https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Roronoa_Zoro.jpg/220px-Roronoa_Zoro.jpg`,
        ialt:"Zoro",
    },
    {
        id:3,
        title:"Nami",
        isrc:`https://static.wikia.nocookie.net/onepiece/images/6/68/Nami_Anime_Post_Timeskip_Infobox.png/revision/latest?cb=20190720162446`,  
        ialt:"Nami",
    },
    {
        id:4,
        title:"Shanks",
        isrc:`https://static.wikia.nocookie.net/onepiece/images/6/66/Shanks_Anime_Infobox.png/revision/latest?cb=20180607083158`,        
        ialt:"Shanks",
    },


]





const BooksList = [
    {
        id:1,
        title:"One Piece, Vol. 42: Pirat...",
        details:"1997",
        isrc:`https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1318523719l/1237398.jpg`,
        iht:"500",
        iwd:"500",
        imgclassN:"object-contain h-[4rem] w-[4rem] rounded-l-md",
        ialt:"Vol. 42",
    },
    {
        id:2,
        title:"One Piece, Vol. 13: Pirat...",
        details:"2000",
        isrc:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfyxfCDSPP0hiKJNa5JBG4p3TKQUERhKt9CRaNk4y9eQ4TTKHo`,
        iht:"500",
        iwd:"500",
        imgclassN:"object-contain h-[4rem] w-[4rem] rounded-l-md",
        ialt:"Vol. 13",
    },
    {
        id:3,
        title:"One Piece, Vol. 91: Pirat...",
        details:"2018",
        isrc:`https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQOlnKLn13X5coASonUHco541bib94Y9pHSxbS8BC3IIlR8p5pW`,
        iht:"500",
        iwd:"500",
        imgclassN:"object-contain h-[4rem] w-[4rem] rounded-l-md",
        ialt:"Vol. 91",
    },
    {
        id:4,
        title:"One piece",
        details:"1998",
        isrc:`https://m.media-amazon.com/images/I/91koMsLwS+L.jpg`,
        iht:"500",
        iwd:"500",
        imgclassN:"object-contain h-[4rem] w-[4rem] rounded-l-md",
        ialt:"One piece",
    }, 

]



const AlsoSearchList =[
    {
        id:1,
        title:"One Punch Man",
        isrc:`https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/OnePunchMan_manga_cover.png/220px-OnePunchMan_manga_cover.png`,
        iht:"500",
        iwd:"500",
        imgclassN:"object-contain h-[4rem] w-[4rem] rounded-l-md",
        ialt:"One Punch Man",
    },
    {
        id:2,
        title:"Naruto",
        isrc:`https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg`,
        iht:"500",
        iwd:"500",
        imgclassN:"object-contain h-[4rem] w-[4rem] rounded-l-md",
        ialt:"Naruto",
    },
    {
        id:3,
        title:"My Hero Academia",
        isrc:`https://upload.wikimedia.org/wikipedia/en/5/5a/Boku_no_Hero_Academia_Volume_1.png`,
        iht:"500",
        iwd:"500",
        imgclassN:"object-contain h-[4rem] w-[4rem] rounded-l-md",
        ialt:"My Hero Academia",
    },
    {
        id:4,
        title:"Demon Slayer Kimetsu...",
        isrc:`https://upload.wikimedia.org/wikipedia/en/0/09/Demon_Slayer_-_Kimetsu_no_Yaiba%2C_volume_1.jpg`,
        iht:"500",
        iwd:"500",
        imgclassN:"object-contain h-[4rem] w-[4rem] rounded-l-md",
        ialt:"Demon Slayer",
    },


]





const RightSideBottom =() => {

    const ColorTheme = useSelector(selectColorMode);

    return (
      <div>
        <TextProp title={`Main characters`} titleclassN={`text-lg`} 
         detailsclassN={ColorTheme===false ? `text-sm pt-2 text-green-700
         cursor-pointer pl-[5rem] hover:underline` : 
         `text-sm pt-2 text-green-400
         cursor-pointer pl-[5rem] hover:underline`} 
        details={`View 35+ more`} tdivclassN={`flex justify-between pb-3 pt-5`}/>
        <div className="flex justify-center mb-[1rem]">
           {CharacterList.map((charac)=>(
               <div key={charac.id} className="w-[6rem] flex flex-col items-center mx-[0.3vw]">
                 <ImageProp
                    isrc={charac.isrc}
                    iwd={"500"}
                    iht={"500"}
                    ialt={charac.ialt}
                    imgclassN={`object-cover h-[5rem] rounded-l-md cursor-pointer`}
                 />
                 <TextProp
                    title={charac.title}
                    titleclassN={`${ColorTheme === false ? 
                         `cursor-pointer text-blue-800 hover:underline` : 
                         `cursor-pointer text-green-200 hover:underline`}`}
                 />
               </div> 
           ))}
        </div>   
           

        <TextProp title={`Books`}  titleclassN={`text-lg`} 
         detailsclassN={ColorTheme===false ? `text-sm pt-2 text-green-700
         cursor-pointer pl-[10rem] hover:underline` : 
         `text-sm pt-2 text-green-400
         cursor-pointer pl-[10rem] hover:underline`}  details={`View 25+ more`} 
         tdivclassN={`flex justify-between pt-5 pb-3`}/>
        <div className="flex justify-center mb-[1rem]">
        {BooksList.map((book)=>(
            <div key={book.id} className="w-[6rem] flex flex-col items-center mx-[0.3vw]">
                <ImageProp
                   isrc={book.isrc}
                   iwd={"500"}
                   iht={"500"}
                   ialt={book.ialt}
                   imgclassN={`object-cover h-[6.9rem] rounded-l-md cursor-pointer`}
                />
                <TextProp
                    title={book.title}
                    titleclassN={`${ColorTheme === false ? 
                        `cursor-pointer text-blue-800 hover:underline` : 
                        `cursor-pointer text-green-200 hover:underline`}`}
                    details={book.details}
                    detailsclassN={ColorTheme === false ? `text-gray-500 text-sm` : `text-green-400 text-sm`}
                />

            </div>
        ))}
        </div>


        <TextProp title={`People also search for`} details={`View 10+ more`} 
         titleclassN={`text-lg`} detailsclassN={ColorTheme===false ? `text-sm pt-2 text-green-700
         cursor-pointer pl-[2rem] hover:underline` : 
         `text-sm pt-2 text-green-400
         cursor-pointer pl-[2rem] hover:underline`} 
        tdivclassN={`flex justify-between pt-5 pb-3`}/>
        <div className="flex pb-4">
        {AlsoSearchList.map((search)=>(
            <div key={search.id} className="w-[6rem] flex flex-col items-center mx-[0.3vw]">
                <ImageProp
                   isrc={search.isrc}
                   iwd={search.iwd}
                   iht={search.iht}
                   ialt={search.ialt}
                   imgclassN={"object-cover h-[5rem] rounded-l-md cursor-pointer"}
                />
                <TextProp
                    title={search.title}
                    titleclassN={`${ColorTheme === false ? 
                        `cursor-pointer text-blue-800 hover:underline` : 
                        `cursor-pointer text-green-200 hover:underline`}`}
                />

            </div>
        ))}
        </div>   

      </div>  
    );
}

export default RightSideBottom;