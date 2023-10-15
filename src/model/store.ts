import { create } from 'zustand';

type TmodalStore = {
	modalState: boolean;
	setModalState: () => void;
};

type TfilterStore = {
	filterState: {
		headline: string;
		date: string;
		nation: object[] | string
	};
	
	setFilterState: (
		input: {
			headline: string;
			date: string;
			nation: object[]
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

export { modalStore, filterStore };