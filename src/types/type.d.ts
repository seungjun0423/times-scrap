export type TsearchBarList = {
	key: string;
	svg: string;
	text: string;
	input: boolean;
};

export type TarticleData = { 
	headline: { main: string; }; 
	source: string; 
	byline: { original: string; }; 
	pub_date: string; 
	web_url: string;
	_id: string;
}

export type Tarticle = {
	headline: string;
	newspaper: string;
	reporter: string;
	pubDate: string;
	url: string;
	id: string;
};

export type TnationList = {
	nation: string;
	isSelected: boolean;
	en: string;
};

export type TnavBtnData = {
	key: string;
	svg: string;
	text: string;
}; 

export type Tpage = {
	page: string;
	setPage: (input: string) => void;
};

export type TmodalStore = {
	modalState: boolean;
	setModalState: () => void;
};

export type TfilterStore = {
	filterHome: {
		headline: string;
		date: string;
		nation: string | TnationList[]
	};

	filterScrap: {
		headline: string;
		date: string;
		nation: string | TnationList[]
	};
	
	setFilterHome: (
		input: {
			headline: string;
			date: string;
			nation: string | TnationList[]
	}) => void;

	setFilterScrap: (
		input: {
			headline: string;
			date: string;
			nation: string | TnationList[]
	}) => void;
};

export type TscrapStore = {
	scrapList: Tarticle[];
	addScrap: (input: Tarticle) => void;
	removeScrap: (input: Tarticle[]) => void;
};

export type Tparams = {
	page: string;
	setPage: (input: string) => void;
	setFilter: TfilterStore;
};