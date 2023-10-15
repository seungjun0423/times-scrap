import axios from "axios";

const { VITE_API_URL, VITE_API_KEY } = import.meta.env;

// const getArticle = ( date, headLine, nation ) => {
// 	const req = axios.get(
// 		`${VITE_API_URL}fq=pub_date:(${date}) AND headline:(${headLine}) AND glocations:(${nation})&api-key=${VITE_API_KEY}`
// 	).then( res => res.data.response.docs)
// 	return req;
// };

const getTodayHeadLine = () => {
	const req = axios.get(
		`${VITE_API_URL}fq=pub_date:(2023-10-14) AND Section Name Values:('Today's Headlines')&api-key=${VITE_API_KEY}`
	).then( res => res.data.response.docs);
	return req;
};

// export { getArticle, getTodayHeadLine };
export { getTodayHeadLine };