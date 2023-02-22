import axios from 'axios';
import { defaultInstance, authInstance } from './Axios';

export const postCartItems = async (id: number) => {
  try {
    const params = { productId: id };
    await authInstance.post('/cart', params);
  } catch (err: any) {
    console.log(err.message);
  }
};

export const delCartItems = async (id: number) => {
  try {
    await authInstance.delete('/cart', {
      data: {
        productId: id,
      },
    });
  } catch (err: any) {
    console.log(err.message);
  }
};

////////////////////// 검색 ///////////////////
//최근 검색어
// export const getSearchKeywords = async () => {
//   try {
//     const { data } = await authInstance.get('/keywords');
//     console.log(data.data.resultData);
//     return data.data.resultData;
//   } catch (err: any) {
//     console.log(err.message);
//   }
// };

// export const addSearchKeywords = async (keywords: string) => {
//   try {
//     const { data } = await authInstance.post('/user/keywords', { data: { searchContent: keywords } });
//     console.log(data);
//     return data.data.resultData;
//   } catch (err: any) {
//     console.log(err.message);
//   }
// };

// export const deleteSearchKeywordsSingle = async (searchId: number) => {
//   try {
//     const { data } = await authInstance.delete('/user/keywords', { data: { searchId: searchId } });
//     console.log(data.data.resultData);
//     console.log('한개 삭제됨!');
//     return data.data.resultData;
//   } catch (err: any) {
//     console.log(err.message);
//   }
// };

// export const deleteSearchKeywordsAll = async () => {
//   try {
//     const { data } = await authInstance.delete('/user/keywords/all');
//     console.log(data.data.resultData);
//     return data.data.resultData;
//   } catch (err: any) {
//     console.log(err.message);
//   }
// };

// // 최근 본 상품
// export const getRecentProduct = async () => {
//   try {
//     const { data } = await authInstance.get('/user/recentproducts');
//     console.log(data.data.resultData);
//     return data.data.resultDatata;
//   } catch (err: any) {
//     console.log(err.message);
//   }
// };

// export const addRecentProduct = async (productId: number) => {
//   try {
//     const { data } = await authInstance.post('/user/recentproducts', { data: { productId: productId } });
//     console.log(data);
//     return data.data.resultData;
//   } catch (err: any) {
//     console.log(err.message);
//   }
// };

// // 검색결과 조회
// export const getSearchResults = async (title: string, category: string, page: number) => {
//   try {
//     const { data } = await defaultInstance.get(`/search?title=${title}&category=${category}&page=${page}`);
//     console.log(data.data.resultData);
//     return data.data.resultData;
//   } catch (err: any) {
//     console.log(err.message);
//   }
// };

// 최근 검색어
export const getSearchKeywords = async () => {
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${document.cookie.slice(12)}`;
    const data = await axios.get('http://finance-seven.store/user/keywords');
    // console.log(data.data.resultData);
    return data.data.resultData;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const addSearchKeywords = async (keywords: string) => {
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${document.cookie.slice(12)}`;
    const data = await axios.post('http://finance-seven.store/user/keywords', { searchContent: keywords });
    // console.log(data);
    console.log('검색어 추가 완료');
    return data.data.resultData;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const deleteSearchKeywordsSingle = async (searchId: number) => {
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${document.cookie.slice(12)}`;
    const data = await axios.delete('http://finance-seven.store/user/keywords', { data: { searchId: searchId } });
    // console.log(data);
    console.log('한개 삭제됨!');
    return data;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const deleteSearchKeywordsAll = async () => {
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${document.cookie.slice(12)}`;
    const data = await axios.delete('http://finance-seven.store/user/keywords/all');
    console.log('전체삭제됨!');
    return data.data;
  } catch (err: any) {
    console.log(err.message);
  }
};

// 최근 본 상품
export const getRecentProduct = async () => {
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${document.cookie.slice(12)}`;
    const data = await axios.get('http://finance-seven.store/user/recentproducts');
    return data.data.resultData;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const addRecentProduct = async (productId: number) => {
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${document.cookie.slice(12)}`;
    const data = await axios.post('http://finance-seven.store/user/recentproducts', { productId: productId });
    console.log(data.data);
    console.log('최근 본 상품 추가 완료');
    return data;
  } catch (err: any) {
    console.log(err.message);
  }
};

// 검색결과 조회
export const getSearchResults = async (title: string, category: string, page: number) => {
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${document.cookie.slice(12)}`;
    const data = await axios.get(`http://finance-seven.store/search?title=${title}&category=${category}&page=${page}`);
    console.log(data.data.resultData);
    return data.data.resultData;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const getPost = async () => {
  try {
    const { data } = await defaultInstance.get(`items/all/청년&학생&문화&?category=subscription&page=1`);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export async function getCart() {
  try {
    const { data } = await authInstance.get('/cart');

    return data;
  } catch (err: any) {
    console.log(err.message);
  }
}

export const getCategoryItem = async (tags: string, category: string, page: number) => {
  try {
    const { data } = await defaultInstance.get(`items/all/${tags}?category=${category}&page=${page}`);
    return data;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const getDetailItem = async (id: number) => {
  try {
    const { data } = await defaultInstance.get(`items/${id}`);
    return data;
  } catch (err: any) {
    console.log(err.message);
  }
};
