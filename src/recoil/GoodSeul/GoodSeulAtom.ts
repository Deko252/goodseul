import { atom } from 'recoil';

export const GoodSeulIdxAtom = atom<number>({
    key: 'GoodSeulIdxAtom',
    default: 0,
});

export const floatingStateAtom = atom({
    key: 'floatingState',
    default: true
})