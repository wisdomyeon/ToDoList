import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const UserInfoRecoil = atom({
    key: "UserInfoRecoil",
    default: {
        name: "",
        goal: "",
    },
    effects_UNSTABLE: [persistAtom],
});

// export const IconIndexRecoil = atom({
//     key: "IconIndexRecoil",
//     default: {
//         id: "",
//     },
// }

// )