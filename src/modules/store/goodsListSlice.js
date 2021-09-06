import { createSlice } from "@reduxjs/toolkit";
import goodArr from '../../db/db.json';

export const goodsListSlice = createSlice({
    name: 'goods',
    initialState: {
        goods: goodArr
    },
    reducers: {

    }
});

export const {} = goodsListSlice.actions;
// массив товаров
export const selectGoods = state => state.goods.goods;
//массив товаров преобразован в объект с ключами id
//для быстрого поиска
export const selectGoodsObj = state => state.goods.goods.reduce((acc, item) => {
    acc[item['id']] = item;
    return acc;
}, {});
//лист категорий - массив объектов с уникальными категориями - именами
export const selectCategoryList = state => {
    const goodsList = state.goods.goods;
    // коллекция категорий
    const categoryList = new Set();
    goodsList.forEach(item => categoryList.add(item.category));

    const nameList = [];
    //перебор коллекции - поиск товара по категории - запись
    // в лист категория и ее название
    categoryList.forEach(item => {
        const good = goodsList.find(elem => elem.category === item)
        nameList.push({
            category: good.category,
            catName: good.catName
        })
    })
    return { categoryList, nameList };
};

export default goodsListSlice.reducer;



export const selectGoodsLists =  state => {
    const goodsList = state.goods.goods,
        menList = goodsList.filter(el => el.category === 'men'),
        womenList = goodsList.filter(el => el.category === 'women'),
        kidsList = goodsList.filter(el => el.category === 'kids'),
        goodsObj = goodsList.reduce((acc, item) => {
            acc[item['id']] = item;
            return acc;
        }, {});
        // console.log('goodsObj: ', goodsObj);
    const categoryList = new Set();
    goodsList.forEach(item => categoryList.add(item.category))

    return { goodsList, menList, womenList, kidsList, goodsObj, categoryList };
};