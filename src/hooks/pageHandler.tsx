import { Tparams } from "@/types/type";

const pageHandler = ({page, setPage, setFilter,}: Tparams):void => {
	console.log(page);
	if(page === "scrap"){
		setPage("home");
		setFilter.setFilterHome({headline: '전체 헤드라인', date: '전체 날짜', nation: '전체 국가'});
	} else if( page === "home"){
		setPage("scrap");
		setFilter.setFilterScrap({headline: '전체 헤드라인', date: '전체 날짜', nation: '전체 국가'});
	}
}

export default pageHandler;