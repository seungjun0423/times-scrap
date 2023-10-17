import { create } from 'zustand';
import { TnationList } from '@/types/HomeScreenType';
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
}

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


export const scrapStore = create(
  persist(
    (set, get): any => ({
			id: null,
			setStore: (input: number | null)=> set({id: input})
    }),
    {
      name: 'state-storage', 
      storage: createJSONStorage(() => localStorage), 
    }
  )
)
export { modalStore, filterStore };