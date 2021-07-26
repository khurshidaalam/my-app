import React, { useState } from 'react';
import { Container, Paper } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import ShowSubCategory from '../ShowSubCategory/ShowSubCategory';


import { postSubCategory, getSubCategory, updateSubCategory, deleteSubCategory } from '../../../CallApi/Category'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';


const AddSubCategory = () => {
    let { id, categoryName } = useParams()
    const [subCategory, setSubCategory] = useState('')
    const [data, setData] = useState([])
    useEffect(() => {
        getSubCategoryData()
    }, [])
    const getSubCategoryData = async () => {
        const data1 = await getSubCategory(id)
        setData(data1)

    }
    const saveCategory = async () => {
        let res = await postSubCategory(id, subCategory)
        if (res.status == '201') {
            alert('Sub Category Saved Successful.')
            const data = await getSubCategory(id)
            setData(data)
        }
    }
    const handleChange = (e) => {
        const value = e.target.value;
        setSubCategory(value)
    }
    const deleteSubCategories = async (subId) => {
        let deleteData = await deleteSubCategory(subId)
        const data = await getSubCategory(id)
        setData(data)
    }

    const handleUpdate = async (value, subId) => {
        const update = await updateSubCategory(value, subId)
        if (update.status == '201') {
            alert("Category Update Successful.")
            const data = await getSubCategory(id)
            setData(data)
        } else {
            alert(update.data.message)
        }
    }
    return (
        <div>
            <div className='col-md-12'>
                <Container>
                    <Paper className="p-3 m-3 paper">
                        <div className="container my-3">
                            <h3>{`Add Sub Category (${categoryName})`} </h3>
                            <form action=""  >
                                <div className="row my-3" >
                                    <label for="staticEmail" class="col-sm-5 col-form-label">Add Category </label>
                                    <div class="col-sm-7">
                                        <input onChange={handleChange} type="text" readonly class="form-control" id="staticEmail" />
                                    </div>
                                </div>
                                <div class="my-3">
                                    <Button

                                        onClick={() => saveCategory()}
                                        variant="contained"
                                        color="Secondary"
                                    >
                                        Add
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </Paper>
                </Container>
                <div className="mt-5">
                    <ShowSubCategory
                        data={data}
                        categoryName={categoryName}
                        deleteSubCategories={deleteSubCategories}
                        updateSubCategory={handleUpdate}
                        categoryId={id}
                    />
                </div>
            </div>
        </div>
    );
};

export default AddSubCategory;