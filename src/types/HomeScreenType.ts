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
}

type Tarticle = {
	headline: string;
	newspaper: string;
	reporter: string;
	pubDate: string;
};

export type { TsearchBarList, TarticleData, Tarticle };