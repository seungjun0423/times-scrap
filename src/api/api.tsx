import axios from "axios";

const { VITE_API_URL, VITE_API_KEY } = import.meta.env;

const getArticle = async( date, headLine, nation ) => {
	const req = await axios.get(
		`${VITE_API_URL}fq=pub_date:(${date}) AND headline:(${headLine}) AND glocations:(${nation})&api-key=${VITE_API_KEY}`
	)
	console.log(req.data.response.docs);
	return req;
};

const getTodayHeadLine = async() => {
	const req = await axios.get(
		`${VITE_API_URL}fq=pub_date:(2023-09-10) AND Section Name Values:('Today's Headlines')&api-key=${VITE_API_KEY}`
	)
	console.log(req.data.response.docs);
	return req;
};

export { getArticle, getTodayHeadLine };