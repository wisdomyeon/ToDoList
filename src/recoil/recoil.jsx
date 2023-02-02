import { atom } from 'recoil';

export const UserInfoRecoil = atom({
    key: "UserInfoRecoil",
    default: {
        name: "",
        goal: "",
    }
});

export const IconIndexRecoil = atom({
    key: "IconIndexRecoil",
    default: {
        id: "",
    },
}

)