import { TarticleData, TfilterState } from "@/types/type";
import axios from "axios";
import { getMonthDate } from "@/lib/fomatter";
const { VITE_API_URL, VITE_API_KEY } = import.meta.env;

/*
const getFilterd = ( date, headLine, nation ) => {
	const req = axios.get(
		`${VITE_API_URL}fq=pub_date:(${date}) 
		OR headline:(${headLine}) 
		OR glocations:(${nation})
		&api-key=${VITE_API_KEY}`
	).then( res => res.data.response.docs)
	return req;
};
OR glocations:("south korea")
		OR glocations:("china")
		OR glocations:("japan")
		OR glocations:("usa")
		OR glocations:("north korea")
		OR glocations:("russia")
		OR glocations:("france")
		OR glocations:("england")
*/


const getFilterdData = ( {headline, date, nation}: TfilterState ): Promise<TarticleData[]> => {
	const req = axios.get(
		`${VITE_API_URL}fq=headline:(${headline}) AND pub_date:(${date}) AND glocations:(${nation})&api-key=${VITE_API_KEY}`
	).then( res => res.data.response.docs)
	return req;
};

/**Parameter: (date: YYYY-MM-DD), 단일 파라미터 date 값을 인자로 받으며 YYYY-MM-DD 포맷의 형태로 받는다.   */
const getData = ( pageParam: number ): Promise<TarticleData[]> => {
	const dateList = [...getMonthDate()];
	const req = axios.get(
		`${VITE_API_URL}page=${pageParam}&fq=pub_date:(${dateList[pageParam]})&api-key=${VITE_API_KEY}`
	).then( res => res.data.response.docs);
	return req;
};

export { getData, getFilterdData };