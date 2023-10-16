type TsearchBarList = {
	key: string;
	svg: string;
	text: string;
};

type TarticleData = { 
	headline: { main: string; }; 
	source: string; 
	byline: { original: string; }; 
	pub_date: string; 
	web_url: string;
}

type Tarticle = {
	headline: string;
	newspaper: string;
	reporter: string;
	pubDate: string;
	url: string;
};


type TnationList = {
	nation: string;
	isSelected: boolean;
	en: string;
}


export type { TsearchBarList, TarticleData, Tarticle, TnationList };