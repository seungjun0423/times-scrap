import { Tparams } from "@/types/type";

const pageHandler = ({text, setPage, setFilter,}: Tparams):void => {
	if(text === "스크랩"){
		setPage("scrap");
		console.log('홈',setFilter.filterHome);
	} else if( text === "홈"){
		setPage("home");
		console.log('스크랩',setFilter.filterScrap);
		// setFilter.setFilterScrap({headline: '전체 헤드라인', date: '전체 날짜', nation: '전체 국가'});
	}
}

export default pageHandler;