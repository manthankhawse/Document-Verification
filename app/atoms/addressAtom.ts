import { atom } from "recoil";

const addressAtom = atom({
    key:'addressAtom',
    default : ''
})

export {addressAtom};