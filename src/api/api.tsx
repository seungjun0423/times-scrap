import { TarticleData, TfilterState } from "@/types/type";
import axios from "axios";
import { getMonthDate, apiFormat } from "@/lib/fomatter";
const { VITE_API_URL, VITE_API_KEY } = import.meta.env;

/**Parameter: (date: YYYY-MM-DD), 단일 파라미터 date 값을 인자로 받으며 YYYY-MM-DD 포맷의 형태로 받는다.   */
const getData = ( {pageParam}:{pageParam:number},{headline, date, nation}:TfilterState ): Promise<TarticleData[]> => {
	if( (headline==='전체 헤드라인') && (date === '전체 날짜') && (nation === '전체 국가') ){

		const dateList = [...getMonthDate()];
		const req = axios.get(
			`${VITE_API_URL}page=${pageParam}&fq=pub_date:(${dateList[pageParam]})&api-key=${VITE_API_KEY}`
			).then( res => res.data.response.docs);
			return req;
	} else {
		let url:string = ''
		if(headline !== '전체 헤드라인'){
			url += `headline:(${headline}) AND `;
		}
		if(date !== '전체 날짜'){
			url += `pub_date:(${apiFormat(date)}) AND `;
		}
		if( (nation !== '전체 국가') && (typeof nation=== 'string')){
			url += `glocations:(${nation})`
		} else if( (nation !== '전체 국가') && (typeof nation === 'object')){
			let str: string = '';
			for(let i=0;i<nation.length;i++){
				if(i !== nation.length-1){
					str += `glocations:(${nation[i].en}) AND `;
				} else {
					str += `glocations:(${nation[i].en})`;
				}
			}
			url += str;
		}
		if(url.slice(-5,)=== " AND "){
			url = url.slice(0,-5);
		}
		const req = axios.get(
			`${VITE_API_URL}fq=${url}&api-key=${VITE_API_KEY}`
		).then( res => res.data.response.docs)
		return req;
	}
};

export { getData };