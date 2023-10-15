import { create } from 'zustand';

type TmodalStore = {
	modalState: boolean;
	setModalState: () => void;
};

type TfilterStore = {
	filter: {
		headline: string;
		date: string;
		nation: string[]
	};
	setModalState: () => void;
}

const modalStore = create<TmodalStore>((set) => ({
	modalState: false,
	setModalState: () => set((state) => ({ modalState: !state.modalState})),
}))

export { modalStore };