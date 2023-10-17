type TsearchBarList = {
	key: string;
	svg: string;
	text: string;
	input: boolean;
};

type TarticleData = { 
	headline: { main: string; }; 
	source: string; 
	byline: { original: string; }; 
	pub_date: string; 
	web_url: string;
	_id: string;
}

type Tarticle = {
	headline: string;
	newspaper: string;
	reporter: string;
	pubDate: string;
	url: string;
	id: string;
};


type TnationList = {
	nation: string;
	isSelected: boolean;
	en: string;
};

type TnavBtnData = {
	key: string;
	svg: string;
	text: string;
}; 


export type { TsearchBarList, TarticleData, Tarticle, TnationList, TnavBtnData };