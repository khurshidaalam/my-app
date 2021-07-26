import { Button, Paper, Container } from '@material-ui/core';
import React, { useState } from 'react';
import ShowSubCategoryTwo from '../ShowSubCategoryTwo/ShowSubCategoryTwo';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import { getSubCategoryTwo, postSubCategoryTwo, deleteSubCategoryTwo, updateSubCategoryTwo } from '../../../CallApi/Category'

const AddSubCategoryTwo = () => {
    const { id, subId, categoryName, subCategoryName } = useParams()

    const [subCategoryTwo, setSubCategoryTwo] = useState('')
    const [data, setData] = useState([])

    



    useEffect(() => {
        getSubCategoryTwoData()

    }, [])

    const getSubCategoryTwoData = async () => {
        const data1 = await getSubCategoryTwo(id, subId)
        setData(data1)
        console.log('subId :>> ', subId);
    }
    const saveCategoryTwo = async () => {
        let res = await postSubCategoryTwo(subId, id, subCategoryTwo)
        if (res.status == '201') {
            alert('Sub Category Two Saved Successful.')
            const data = await getSubCategoryTwo(id, subId)
            setData(data)
        }


    }
    const deleteSubCategoriesTWo = async (subId2) => {
        let deleteData = await deleteSubCategoryTwo(subId2)
        const data = await getSubCategoryTwo(id, subId)
        setData(data)
    }


    const handleChange = (e) => {
        setSubCategoryTwo(e)
    }

    const handleUpdate = async (value, subId2) => {
        const update = await updateSubCategoryTwo(value, subId2)
        if (update.status == '201') {
            alert("Category Update Successful.")
            const data = await getSubCategoryTwo(id, subId)
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
                            <h3>Add Sub Category Two  </h3>
                            <form action=""  >
                                <div className="row my-3" >
                                    <label for="staticEmail" class="col-sm-5 col-form-label">Add Category </label>
                                    <div class="col-sm-7">
                                        <input
                                            type="text"
                                            readonly class="form-control"
                                            id="staticEmail"
                                            onChange={(e) => handleChange(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div class="my-3">
                                    <Button
                                        
                                        variant="contained"
                                        color="Secondary"
                                        onClick={() => saveCategoryTwo()}

                                    >
                                        Add
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </Paper>
                </Container>
                <div className="mt-5">
                    <ShowSubCategoryTwo
                        data={data}
                        categoryName={categoryName}
                        subCategoryName={subCategoryName}
                        deleteCatagoriesTwo={deleteSubCategoriesTWo}
                        updateCategory={handleUpdate}

                    />
                </div>
            </div>
        </div>
    );
};

export default AddSubCategoryTwo;