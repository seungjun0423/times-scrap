import { create } from 'zustand';
import { Tarticle, TnationList } from '@/types/HomeScreenType';
import { createJSONStorage, persist } from 'zustand/middleware';

type TmodalStore = {
	modalState: boolean;
	setModalState: () => void;
};

type TfilterStore = {
	filterState: {
		headline: string;
		date: string;
		nation: string | TnationList[]
	};
	
	setFilterState: (
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

const modalStore = create<TmodalStore>((set) => ({
	modalState: false,
	setModalState: () => set((state) => ({ modalState: !state.modalState})),
}));

const filterStore = create<TfilterStore>((set) => ({
	filterState: {
		headline: '전체 헤드라인',
		date: '전체 날짜',
		nation: '전체 국가',
	},
	setFilterState: (input) => set({filterState: input}),
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
export { modalStore, filterStore, scrapStore };