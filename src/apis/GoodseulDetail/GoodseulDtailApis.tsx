import { axiosPunch } from "../JWT/JWTConfig";

//서버 URL 변수 설정
const serverUrl = "http://dopeboyzclub.ddns.net:7780";

export const getGoodseulDetail = async (pageGoodSeulIdx:number) => {
    try {
        const res = await axiosPunch ({
            method: 'get',
            url: (`${serverUrl}/api/lv1/gs?goodseulIdx=${pageGoodSeulIdx}`),
        })

        return res;

    } catch (error) {
        console.error("구슬 디테일 API 에러",error);
    }
}

export const goodseulLikeApi = async (pageGoodSeulIdx:number) => {
    try {
        const res = await axiosPunch ({
            method: 'post',
            url: (`${serverUrl}/api/lv1/favorite`),
            data: JSON.stringify({
                "g_idx" : pageGoodSeulIdx
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (res?.status === 200) {
            console.log(pageGoodSeulIdx);
            console.log(res);
          } else {
            console.log(res);
          }  
      

    } catch (error) {
        console.error("구슬 디테일 API 에러",error);
    }
}