export type TsearchBarList = {
	key: string;
	svg: string;
	text: string;
	input: boolean;
};

export type Tkeywords = {
	name: string;
	value: string
}

export type TarticleData = { 
	headline: { main: string; }; 
	source: string; 
	byline: { original: string; }; 
	pub_date: string; 
	web_url: string;
	_id: string;
	keywords: Tkeywords[];
}

export type Tarticle = {
	headline: string;
	newspaper: string;
	reporter: string;
	pubDate: string;
	url: string;
	id: string;
	keywords: Tkeywords;
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

export type TfilterState = {
	headline: string;
	date: string;
	nation: string | TnationList[]
}

export type TfilterStore = {
	filterHome: TfilterState

	filterScrap: TfilterState
	
	setFilterHome: (input: TfilterState) => void;

	setFilterScrap: (input: TfilterState) => void;
};

export type TscrapStore = {
	scrapList: Tarticle[];
	addScrap: (input: Tarticle) => void;
	removeScrap: (input: Tarticle[]) => void;
};

export type Tparams = {
	text: string;
	setPage: (input: string) => void;
};

export type Tfiltered = {
	filtered: null | Tarticle[];
	setFiltered: (input: Tarticle[]|null) => void;
};