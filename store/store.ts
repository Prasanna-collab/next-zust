import { create } from "zustand";

export interface Details {
    gradeDetails: string[];
    boardDetails: string[];
    subjectDetails: string[];
    moreDetails: string[];
}

export interface FormDetails {
    fullName: string;
    email: string;
    phone: string;
    amount: string;
}

interface StoreState {
    detail: Details;
    formDetails: FormDetails;
    setDetail: (type: keyof Details, newDetail: string[]) => void;
    setFormDetails: (payload: { name: keyof FormDetails; value: string }) => void;
}

const useStore = create<StoreState>((set) => ({
    detail: {
        gradeDetails: [],
        boardDetails: [],
        subjectDetails: [],
        moreDetails: [],
    },
    formDetails: {
        fullName: "",
        email: "",
        phone: "",
        amount: "",
    },
    setDetail: (type, newDetail) => set((state) => ({
        detail: {
            ...state.detail,
            [type]: newDetail,
        },
    })),
    setFormDetails: (payload) => set((state) => ({
        formDetails: {
            ...state.formDetails,
            [payload.name]: payload.value,
        },
    })),
}));

export default useStore;
