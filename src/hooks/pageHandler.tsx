import { Tparams } from "@/types/type";

const pageHandler = ({text, setPage}: Tparams):void => {
	if(text === "스크랩"){
		setPage("scrap");
	} else if( text === "홈"){
		setPage("home");
	}
}

export default pageHandler;