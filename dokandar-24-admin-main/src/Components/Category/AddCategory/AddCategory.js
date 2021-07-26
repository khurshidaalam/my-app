import React from 'react';
import { Link } from "react-router-dom";
import { Container, Paper } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import ShowCategory from '../ShowCategory/ShowCategory';
import { useEffect } from 'react';
import { useState } from 'react';
import { getCategoriesData, postCategoriesData, deleteCategory, updateCategory } from '../../../CallApi/Category'

const AddCategory = () => {

    const [data, setData] = useState([])
    const [category, setCategory] = useState('')
    const [update, setUpdate] = useState({
        value: '',
        id: ''
    })

    console.log(data);

    useEffect(() => {
        getLoadData()
    }, [])

    const getLoadData = async () => {
        const data = await getCategoriesData()
        setData(data)
    }
    const saveCategory = async () => {
        let res = await postCategoriesData(category)
        console.log(res)
        if (res.status == '201') {
            alert('Data Send Successfully!!!')
            const data = await getCategoriesData()
            setData(data)
        }
    }
    const deleteCategories = async (id) => {
        let deleteData = await deleteCategory(id)
        console.log(id)
        const data = await getCategoriesData()
        setData(data)
    }
    const handleChange = (e) => {
        const value = e.target.value;
        setCategory(value)
    }

    const handleUpdate = async (value, id) => {
        const update = await updateCategory(value, id)
        if (update.status == '201') {
            alert("Category Update Successful.")
            const data = await getCategoriesData()
            setData(data)
        } else {
            alert(update.data.message)
        }
    }

    return (
        <div className=''>
            <div className='col-md-12'>
                <Container>
                    <Paper className="p-3 m-3 paper">
                        <div className="container my-3">
                            <h3>Add Category </h3>
                            <form action=""  >
                                <div className="row my-3" >
                                    <label for="staticEmail" class="col-sm-5 col-form-label">Add Category </label>
                                    <div class="col-sm-7">
                                        <input
                                            type="text"
                                            readonly class="form-control"
                                            id="staticEmail"
                                            onChange={(e) => handleChange(e)}
                                            placeholder="Add Category"

                                        />
                                    </div>
                                </div>
                                <div class="my-3">
                                    <Button
                                        onClick={saveCategory}
                                        variant="contained" color="Secondary">
                                        Add
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </Paper>
                </Container>
            </div>
            <div className="mt-5">
                <ShowCategory
                    data={data}
                    deleteCategory={deleteCategories}
                    updateCategory={handleUpdate}
                />
            </div>
        </div>
    );
};

export default AddCategory;