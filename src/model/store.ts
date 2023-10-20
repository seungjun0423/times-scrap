import { create } from 'zustand';
import { Tarticle, TnationList } from '@/types/type';
import { createJSONStorage, persist } from 'zustand/middleware';

type Tpage = {
	page: string;
	setPage: (input: string) => void;
};

type TmodalStore = {
	modalState: boolean;
	setModalState: () => void;
};

type TfilterStore = {
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

type TscrapStore = {
	scrapList: Tarticle[];
	addScrap: (input: Tarticle) => void;
	removeScrap: (input: Tarticle[]) => void;
};

const pageStore = create<Tpage>((set) => ({
	page: "home",
	setPage: (input) => set(({ page: input})),
}));

const modalStore = create<TmodalStore>((set) => ({
	modalState: false,
	setModalState: () => set((state) => ({ modalState: !state.modalState})),
}));

const filterStore = create<TfilterStore>((set) => ({
	filterHome: {
		headline: '전체 헤드라인',
		date: '전체 날짜',
		nation: '전체 국가',
	},
	filterScrap: {
		headline: '전체 헤드라인',
		date: '전체 날짜',
		nation: '전체 국가',
	},
	setFilterHome: (input) => set({filterHome: input}),
	setFilterScrap: (input) => set({filterHome: input}),
}));

/** localStorage */
const scrapStore = create(
  persist<TscrapStore>(
    (set) => ({
			scrapList: [],
			addScrap: (input)=> set((state)=>({scrapList:[...state.scrapList, input]})),
			removeScrap: (input)=> set(({scrapList: [...input]})),
    }),
    {
      name: 'scrap-storage', 
      storage: createJSONStorage(() => localStorage), 
    }
  )
)
export { pageStore, modalStore, filterStore, scrapStore };