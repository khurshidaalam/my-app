import axios from 'axios'
import { url } from './URL'

// get Categories data
export const getCategoriesData = async () => {
    let data = []
    await axios.get(`${url}category`)
        .then(res => {
            data = res.data.categorys
        })

    return data;
}

export const postCategoriesData = async (categoryName) => {
    let data = {}
    await axios.post(`${url}category`, { categoryName })
        .then(res => {
            data = res;

        }).catch(err => {
            alert("Category Insert Failed.")
        })
    return data
}

export const deleteCategory = async (id) => {
    let createUrl = `${url}category/${id}`
    let data = {}
    await axios.delete(createUrl)

        .then(res => {
            data = res;
        }).catch(err => {
            alert("Category Insert Failed.")
        })
    return data
}

export const updateCategory = async (value, id) => {
    let createUrl = `${url}category/${id}`
    console.log('url :>> ', createUrl);
    let data = {}
    await axios.put(createUrl, { categoryName: value })

        .then(res => {
            data = res;
        }).catch(err => {
            alert("Category Updated Failed.")
        })
    return data
}

// subcategory area start 


export const postSubCategory = async (categoryId, subCategoryName) => {
    let data = {}
    await axios.post(`${url}category/sub`, { categoryId, subCategoryName })
        .then(res => {
            data = res;

        }).catch(err => {
            alert("Sub Category Insert Failed.")
        })
    return data
}


export const getSubCategory = async (id) => {
    let data = []
    await axios.get(`${url}category/sub/${id}`)
        .then(res => {
            data = res.data.subCategory
        })

    return data;
}

export const updateSubCategory = async (subCategoryName, subId) => {
    let createUrl = `${url}category/sub/${subId}`
    let data = {}
    await axios.put(createUrl, { subCategoryName })

        .then(res => {
            data = res;
        }).catch(err => {
            alert("Sub Category Updated Failed.")
        })
    return data
}


export const deleteSubCategory = async (id) => {
    let createUrl = `${url}category/sub/${id}`
    let data = {}
    await axios.delete(createUrl)
        .then(res => {
            console.log(res.data)
            data = res;
        }).catch(err => {
            alert("Sub Category Delete Failed.")
        })
    return data
}


// sub category are two start


export const postSubCategoryTwo = async (subId, categoryId, subCategoryName) => {
    let data = {}
    await axios.post(`${url}category/sub2`, { subId, categoryId, subCategoryName })
        .then(res => {
            data = res;

        }).catch(err => {
            alert("Sub Category Insert Failed.")
        })
    return data
}

export const getSubCategoryTwo = async (categoryId, subId) => {
    let data = []
    console.log('subId :>>  ', subId );
    await axios.get(`${url}category/sub2/${categoryId}/${subId}`)

        .then(res => {
            data = res.data.subCategory
        })

    return data;
}

export const deleteSubCategoryTwo = async (subId) => {
    let createUrl = `${url}category/sub2/${subId}`
    let data = {}
    await axios.delete(createUrl)
        .then(res => {
            console.log(res.data)
            data = res;
        }).catch(err => {
            alert("Sub Category Delete Failed.")
        })
    return data
}

export const updateSubCategoryTwo = async (subCategoryName, subId) => {
    let createUrl = `${url}category/sub2/${subId}`
    let data = {}
    await axios.put(createUrl, { subCategoryName })

        .then(res => {
            data = res;
        }).catch(err => {
            alert("Sub Category Updated Failed.")
        })
    return data
}
