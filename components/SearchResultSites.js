import MoreVertIcon from '@mui/icons-material/MoreVert';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import PeopleAlsoSearch from './RelatedSearch';
import IconProp from './props/IconProp';
import ImageProp from './props/ImageProp';
import TextProp from './props/TextProp';



const SiteList = [
    {
        id:1,
        url:`https://en.wikipedia.org › wiki › One_Piece`,
        icon:[{id:0,icon:<MoreVertIcon/>},{id:1,icon:''}],
        title:`One Piece - Wikipedia`,
   
        details:`One Piece (stylized in all caps) is a Japanese manga 
          series written and illustrated by Eiichiro Oda. It has been 
          serialized in Shueisha's shōnen manga ...`,
        subDetail:`English publisher: AUS Madman Entertainmen...
        Original run: July 22, 1997 – present`,  
        subDetailTwo:`English magazine: NA: ‎Shonen Jump‎; Weekly ...‎
        Magazine: Weekly Shōnen Jump`,
        subDetailThree:`TV series · ‎Lists of One Piece episodes · 
        ‎List of One Piece characters · ‎Eiichiro Oda`,
        
    },
    {
        id:2,
        url:`https://www.imdb.com › title`,
        icon:[{id:0,icon:<MoreVertIcon/>},{id:1,icon:<StarBorderIcon/>}],
        title:`One Piece (TV Series 1999– ) - IMDb`,
  
        details:`Follows the adventures of Monkey D. Luffy and his pirate crew 
          in order to find the greatest treasure ever left by the 
          legendary Pirate, Gold Roger.`,
        subDetail:`⭐⭐⭐⭐⭐ Rating: 8.9/10 · ‎128,665 votes`,
        subDetailTwo:``,
        subDetailThree:`‎With One Piece: Wan pîsu... · ‎Episode Guide ·
           ‎Related Videos · ‎Compact`,  
    },
    { 
        id:3,
        url:`https://www.viz.com › shonenjump › chapters › one-piece`,
        icon:[{id:0,icon:<MoreVertIcon/>}, {id:1,icon:''}],
        title:`Read One Piece Manga Free - Official Shonen Jump ... - VIZ`,
 
        details:`Join Monkey D. Luffy and his swashbuckling crew in their
          search for the ultimate treasure, the One Piece. Created by Eiichiro Oda.
           Add favorite Favorited.`,
        subDetail:`Ch. 1018: Join to read`,
        subDetailTwo:``,
        subDetailThree:``,   

    },
    { 
        id:4,
        url:`https://onepiece.fandom.com › wiki › One_Piece_Wiki`,
        icon:[{id:0,icon:<MoreVertIcon/>},{id:1,icon:''}],
        title:`One Piece Wiki - Fandom`,
  
        details:`One Piece Encyclopedia is a database that anyone can edit 
          about the Shonen Jump anime and manga series One Piece created by
           Eiichiro Oda, that features ...`,
        subDetail:`Pages: 7k `,
        subDetailTwo:`Photos: 34k`,
        subDetailThree:``,   
    },
    {
        id:5,
        url:`https://www.netflix.com › title`,
        icon:[{id:0,icon:<MoreVertIcon/>},{id:1,icon:''}],
        title:`Watch ONE PIECE | Netflix`,
   
        details:`Monkey D. Luffy sails with his crew of Straw Hat
           Pirates through the Grand Line to find the treasure One Piece
            and become the new king of the pirates.`,

        subDetail:``,
        subDetailTwo:``,
        subDetailThree:``, 

    },
    {
        id:6,
        url:`https://www.animenewsnetwork.com › encyclopedia › ani...`,
        icon:[{id:0, icon:<MoreVertIcon/>},{id:1,icon:''}],
        title:`One Piece (TV) - Anime News Network`,
   
        details:`One pirate, Monkey D. Luffy, is a boy who had eaten the Devil's
         Fruit and gained rubber powers. Now he and his crew are off to 
         find One Piece, while battling ...`,

        subDetail:``,
        subDetailTwo:``,
        subDetailThree:``, 

    },
    {
        id:7,
        url:`https://www.crunchyroll.com › Adventure`,
        icon:[{id:0,icon:<MoreVertIcon/>},{id:1,icon:<StarBorderIcon/>}],
        title:`One Piece - Watch on Crunchyroll`,
     
        details:`One Piece is a fantastic adventure with epic 
           fight scenes, imaginative characters, wild landscapes, and 
           unforgettable music. You will laugh, cry, feel anger, ...`,

        subDetail:`⭐⭐⭐⭐⭐ Rating: 4.9 · ‎176,582 votes`,
        subDetailTwo:``,
        subDetailThree:``, 

    },
    {
        id:8,
        url:`https://twitter.com › onepieceanime`,
        icon:[
         {id:0,icon:<MoreVertIcon/>},{id:1,icon:<StarBorderIcon/>}],
        title:`One Piece (@OnePieceAnime) / Twitter`,
     
        details:`The Straw Hat Pirates head to Wano when the English dub of
         One Piece Season 14 Voyage 1 drops on Microsoft, ✨ NEXT WEEK ✨ Not 
         only that, One Piece Season ...`,

        subDetail:``,
        subDetailTwo:``,
        subDetailThree:``, 

    }
]



const SearchResultSites = () => {
    return (
     <div className="flex justify-center w-full"> 
      <div className='w-[90vw] lg:w-[35rem] xl:w-[50rem]'>
        {SiteList.map((site)=>(
          <div key={site.id}>
            <div>
              <div className='flex pt-[2rem] pb-[0.4rem]'>  
               <TextProp title={site.url}/>
               <IconProp icon={site.icon.map((item)=>(<div className='flex' key={item?.id}>{item.id===0 && item.icon}</div>))}/>
              </div> 

              <div>

              <TextProp 
                 title={site.title} 
                 titleclassN={`text-xl pb-[0.6rem] text-blue-800 
                  cursor-pointer hover:underline`}
                
            
                 

                 details={site.id=== 8 ? ('') : (site.details)}
            
                 subDetail={site.subDetail} 
                 subDetailTwo={site.subDetailTwo}
                 subDetailThree={site.subDetailThree}
              />
              <div className='flex gap-[0.2vw]'>
              <ImageProp
                  isrc={(site.id === 8) && `https://pbs.twimg.com/media/FmsxEIeXEAAAy_S?format=jpg&name=small`}
                  iht={"500"}
                  iwd={"500"}
                  ialt={""}
                  imgclassN={`object-cover h-[7.5rem] w-[11rem] cursor-pointer`}
                  
              />
              <ImageProp
                  isrcOne={(site.id === 8) && `https://pbs.twimg.com/media/Fmmi7c7X0AQ7-WX?format=jpg&name=small`}
                  iht={"500"}
                  iwd={"500"}
                  ialt={""}
                  imgclassN={`object-cover h-[7.5rem] w-[5.5rem] cursor-pointer`}
                  
              />
              <ImageProp
                  isrcTwo={(site.id === 8) && `https://pbs.twimg.com/media/FmenpxRX0AAJrEG?format=jpg&name=small`}
                  iht={"500"}
                  iwd={"500"}
                  ialt={""}
                  imgclassN={`object-cover h-[7.5rem] w-[10rem] cursor-pointer`}
                  
              />
              <ImageProp
                  isrcThree={(site.id === 8) && `https://pbs.twimg.com/media/FmYK5JeXEB0ufsm?format=jpg&name=small`}
                  iht={"500"}
                  iwd={"500"}
                  ialt={""}
                  imgclassN={`object-cover h-[7.5rem] w-[13rem] rounded-r-xl cursor-pointer`}   
              />
              </div>
              <TextProp
                 details={site.id===8 ? site.details : ''}
                 detailsclassN={site.id===8 ? `mt-[0.8rem]` : ''}
              />
                      
            </div>
                
            </div>    
             
          </div>    
        ))} 

      </div>  
      </div>
    )
}

export default SearchResultSites;