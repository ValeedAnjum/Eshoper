import firebase from '../../config/config';

export const loadNextItems = (lastItem) => async (dispatch,getState) => {
    const firestore = firebase.firestore();
    const Ref = firestore.collection('Products');
    dispatch({type:'ItemsFetchStart'});
    const name = getState().items.searchByName;
    if(!lastItem){
        dispatch({type:'SearchByNameReSet',payload:undefined});
    }
    try{
        const startAfter = lastItem && (await firestore.collection('Products').doc(lastItem.id).get());
        let query;
        lastItem ? 
        (query = Ref.orderBy('proid').startAfter(startAfter).limit(6)) : (query = Ref.orderBy('proid').limit(6));
        if(name){
            lastItem ?
            (query = Ref.where('brand','==',name.toLowerCase()).orderBy('proid').startAfter(startAfter).limit(6)) 
            : (query = Ref.orderBy('proid').limit(6));
        }
        let querySnap = await query.get();
        if(querySnap.docs.length === 0){
            dispatch({type:'ItemsEmpty'});
            return querySnap;
        }
        let items = [];
        for(let i = 0;i<querySnap.docs.length;i++){
            items.push({...querySnap.docs[i].data(),id:querySnap.docs[i].id});
        }
        dispatch({type:'ItemsFetchEnd',payload:items});
        return querySnap;
    } catch (err) {
        console.log('Error',err.message);
    }
}

export const searchByCatagory = name => async (dispatch,getState) => {
    const firestore = firebase.firestore();
    const Ref = firestore.collection('Products');
    dispatch({type:'SearchByNameSet',payload:name});
    dispatch({type:'ItemsFetchStart'});
    try{
        let query = Ref.where('brand','==',name.toLowerCase()).orderBy('proid').limit(6);
        let querySnap = await query.get();
        if(querySnap.docs.length === 0){
            dispatch({type:'ItemsEmpty'});
            dispatch({type:'SearchByNameReSet',payload:undefined});
            return querySnap;
        }
        let items = [];
        for(let i = 0;i<querySnap.docs.length;i++){
            items.push({...querySnap.docs[i].data(),id:querySnap.docs[i].id});
        }
        dispatch({type:'ItemsFetchEnd',payload:items});
        return querySnap;
    }
    catch(err){
        console.log(err.message);
    }
}

export const loadItemDetails = itemId => async (dispatch,getState) => {
    const firestore = firebase.firestore();
    const Ref = firestore.collection('ProductsDetails');
    dispatch({type:'DetailItemFetchStart'});
    await Ref.doc(itemId).get().then(res => {
        dispatch({type:'DetailItemFetchEnd',payload:res.data()});
    }).catch(err => {
        dispatch({type:'DetailItemFetchError',payload:err.message});
    })
}

export const addToCart = item => {
    const {name,price,proid,proimg,quantity} = item;
    const itemToPush = {[proid]:{name,price,proid,proimg,quantity:quantity,totoal:price*quantity}};
    return {
        type:'AddToCart',
        payload:itemToPush
    }
}

//a temporary function to add data to firestore quickly and easily 
export const addRandomDataToFirestore = () => {
    // console.log('E');
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        // console.log('ex');
        // const firestore = getFirestore();
        // const usability = ['men','women','kid'];
        // const category = 
        // [
        // 'fashion','household','interiors','clothing',
        // 'bags','shoes'];
        // const brand = ['acne','grune erde','albiro','ronhill','oddmolly','boudestijn','rosch creative culture','nike','under armour','adidas',
        // 'puma','asics','fendi','guess','valentino','dior',
        // 'versace','armani','prada','dolce and gabbana','chanel','fashion','household','interiors','clothing',
        // 'bags','shoes','gucci'];
        // const condition = ['new','used','old'];
        // const proimages = ['images/product-details/similar1.jpg','images/product-details/similar2.jpg','images/product-details/similar3.jpg'];

        // for(let i = 1;i<=201;i++){
        //     let usabilityIndex = Math.floor(Math.random()*(usability.length));
        //     let categoryIndex = Math.floor(Math.random()*(category.length));
        //     let brandIndex = Math.floor(Math.random()*(brand.length));
        //     let ConditionIndex = Math.floor(Math.random()*(condition.length));
        //     let price = Math.floor(Math.random()*1000+1);
        //     let proimg = `images/home/product${Math.floor(Math.random()*12+1)}.jpg`;
        //     let date = new Date().toString();
        //     firestore.collection('Products').add({
        //         name:`Easy Polo Black Edition ${i}`,
        //         price:price,
        //         proid:i,
        //         proimg:proimg,
        //         date:date,
        //         usability:usability[usabilityIndex],
        //         category:category[categoryIndex],
        //         brand:brand[brandIndex]
        //     }).then(res => {
        //         firestore.collection('ProductsDetails').doc(res.id).set({
        //             name:`Easy Polo Black Edition ${i}`,
        //             price:price,
        //             proid:i,
        //             proimg:proimg,
        //             availability:'In Stock',
        //             condition:condition[ConditionIndex],
        //             brand:brand[brandIndex],
        //             proimages:proimages
        //         }).then(() => {
        //             console.log('Detail Product Added')
        //         }).catch(err => {
        //             console.log('Detail Product Error',err.message);
        //         })
        //     }).catch(err => {
        //         console.log(err.message);
        //     })
        // }

    }
}