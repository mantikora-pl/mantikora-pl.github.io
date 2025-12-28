import BigNewsItem from "../../components/BigNewsItem"
import SmallNewsItem from "../../components/SmallNewsItem"
import React,{useEffect,useState} from "react"
import ReactPaginate from "react-paginate"
import {getLanguage,getTranslation} from "../../helper/translation"
import {newsData_mock,newsData_real,NewsI} from "../../data/newsData"
import {mock} from "../../data/mock"
import {BrowserView,isMobile,MobileView} from "react-device-detect";

export default function News({maxItemsPerPage=12}:{maxItemsPerPage?:number}){
    const actualMaxItems=(!isMobile)?maxItemsPerPage:Math.floor(maxItemsPerPage*0.7)
    const newsData=(mock)?newsData_mock:newsData_real
    const itemsPerRow=4
    const [currentItems,setCurrentItems]=useState<NewsI[]>([])
    const [pageCount,setPageCount]=useState(Math.ceil(newsData.length/actualMaxItems))
    const [itemOffset,setItemOffset]=useState(0)

    useEffect(()=>{
        const endOffset=itemOffset+actualMaxItems
        setCurrentItems(newsData.slice(itemOffset,endOffset))
        setPageCount(Math.ceil(newsData.length/actualMaxItems))
    },[itemOffset,actualMaxItems,newsData])


    const handlePageClick=(event:{selected:number})=>{
        const newOffset=event.selected*actualMaxItems
        setItemOffset(newOffset)
        window.scrollTo({top:0,behavior:'smooth'})
    }

    const bigNewsItems=currentItems.slice(0,itemsPerRow)
    const smallNewsItems=currentItems.slice(itemsPerRow)

    return <div className={"innerPage skullBackground"}>
        <div id={"newsPage"}>
            <BrowserView>
                <div>
                    {bigNewsItems.map((item,index)=>(
                        <BigNewsItem item={item} key={index}/>
                    ))}
                </div>
                <div id={"smallNewsWrapper"}>
                    {smallNewsItems.map((item,index)=>(
                        <SmallNewsItem item={item} key={index}
                                       cssClass={`${index%4===0?' noLeftMargin':''} ${index%4===3?'noRightMargin':''}`}/>
                    ))}
                </div>
            </BrowserView>
            <MobileView>
                <div>
                    {currentItems.map((item,index)=>(
                        <BigNewsItem item={item} key={index}/>
                    ))}
                </div>
            </MobileView>
            <div className={"paginationWrapper"}>
                <ReactPaginate
                    nextLabel={isMobile?">":`${getTranslation(getLanguage(),"next")} >`}
                    onPageChange={handlePageClick}
                    pageCount={pageCount}
                    previousLabel={isMobile?"<":`< ${getTranslation(getLanguage(),"previous")}`}
                    containerClassName="pagination"
                    pageRangeDisplayed={3}
                    activeClassName="active"
                    marginPagesDisplayed={2}
                    pageClassName="pageItem"
                    pageLinkClassName="pageLink"
                    previousClassName="pageItem"
                    previousLinkClassName="pageLink"
                    nextClassName="pageItem"
                    nextLinkClassName="pageLink"
                    breakLabel="..."
                    breakClassName="pageItem"
                    breakLinkClassName="pageLink"
                    renderOnZeroPageCount={null}
                />
            </div>

        </div>

    </div>
}