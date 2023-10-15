import axios from "axios";

const { VITE_API_URL, VITE_API_KEY } = import.meta.env;

const getArticle = async( date, headLine, nation ) => {
	const req = await axios.get(
		`${VITE_API_URL}begin_date=${date}&end_date=${date}&fq=headline:(${headLine}) AND glocations:(${nation})&api-key=${VITE_API_KEY}`
	)
	
};

export { getArticle };