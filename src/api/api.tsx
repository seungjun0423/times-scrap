import { TarticleData } from "@/types/type";
import axios from "axios";
const { VITE_API_URL, VITE_API_KEY } = import.meta.env;

// const getFilterd = ( date, headLine, nation ) => {
// 	const req = axios.get(
// 		`${VITE_API_URL}fq=pub_date:(${date}) AND headline:(${headLine}) AND glocations:(${nation})&api-key=${VITE_API_KEY}`
// 	).then( res => res.data.response.docs)
// 	return req;
// };

/**Parameter: (date: YYYY-MM-DD), 단일 파라미터 date 값을 인자로 받으며 YYYY-MM-DD 포맷의 형태로 받는다.   */
const getData = ( pageParam: number ): Promise<TarticleData[]> => {
	const req = axios.get(
		`${VITE_API_URL}page=${pageParam}&api-key=${VITE_API_KEY}`
	).then( res => res.data.response.docs);
	return req;
};

// export { getFilterd, getTodayHeadLine };
export { getData };