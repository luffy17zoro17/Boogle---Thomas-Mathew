
import BooglePagination from "../BooglePagination";
import RelatedSearch from "../RelatedSearch";
import SearchResultSites from "../SearchResultSites";
import Footer from "./Footer";
import PeopleAlsoAsk from "./PeopleAlsoAsk";
import RightSideDetails from "./RightSideDetails";
import TopStories from "./TopStories";


const InitialPage = () => {
    return (
      <div className="flex pt-[9rem]
         lg:gap-[5vw]">
      <div className="flex lg:gap-[2rem] xl:gap-[4vw]">    
       <div className="lg:w-[35rem]
        xl:w-[50rem]">
        <TopStories/>
        
        <PeopleAlsoAsk/>
        <SearchResultSites/>
        <RelatedSearch/>
        <BooglePagination/>

        <Footer/>
       </div>
        <div>
          <RightSideDetails/> 
        </div> 
       </div> 
      
      </div>  
    );
}

export default InitialPage;