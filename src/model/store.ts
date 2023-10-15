import { create } from 'zustand';

type TmodalStore = {
	modalState: boolean;
	setModalState: () => void;
};

type TfilterStore = {
	filterState: {
		headline: string;
		date: string;
		nation: object[]
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
		headline: '',
		date: '',
		nation: []
	},
	setFilterState: (input) => set({filterState: input}),
}));

export { modalStore, filterStore };