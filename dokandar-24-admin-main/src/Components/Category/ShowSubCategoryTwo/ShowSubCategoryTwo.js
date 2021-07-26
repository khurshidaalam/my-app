import React, { useState } from 'react';
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'



const ShowSubCategoryTwo = props => {



    const { data, categoryName, subCategoryName, deleteCatagoriesTwo, updateCategory } = props

    const [update, setUpdate] = useState({
        value: '',
        id: ''
    })

    const handleUpdate = (value, id) => {
        const cloneState = { ...update }
        cloneState.value = value
        cloneState.id = id
        setUpdate(cloneState)
    }
    return (
        <div>
            <table class="table table-hover table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Category</th>
                        <th scope="col">Sub Category</th>
                        <th scope="col">Sub Category Two </th>
                        <th scope="col">Update</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?data.map((data, index) => <tr>
                            <th scope="row"> {index + 1} </th>
                            <td>
                                {categoryName}
                            </td>
                            <td>
                                {subCategoryName}
                            </td>
                            <td>
                                <Link to='/add-sub-category-two' > {data.subCategory2} </Link>
                            </td>
                            <td
                             onClick={() => handleUpdate(data.subCategory2, data.subId2)}
                            >
                                <i 
                                    type="button" data-toggle="modal" data-target="#exampleModal" className='btn btn-success fa fa-edit'></i>
                            </td>
                            <td onClick={() => deleteCatagoriesTwo(data.subId2)} > <i className='btn btn-danger fa fa-trash'></i> </td>
                        </tr>):null
                    }
                </tbody>
            </table>


            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Edit Category</h5>
                            <button type="button" class="close btn btn-danger" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" > <i className="fa fa-times-circle"></i> </span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form action=""  >
                                <div className="row my-3" >
                                    <label for="staticEmail" class="col-sm-5 col-form-label">Add Category </label>
                                    <div class="col-sm-7">
                                        <input
                                            value={update.value}
                                            type="text"
                                            readonly class="form-control"
                                            id="staticEmail"
                                            placeholder="Add Category"
                                            onChange={(e) => handleUpdate(e.target.value, update.id)}
                                        />
                                    </div>
                                </div>
                                <div class="my-3">
                                    <Button
                                        onClick={()=>updateCategory(update.value,update.id)}
                                        variant="contained" color="Secondary"
                                        data-dismiss="modal"
                                    >

                                        Update
                                    </Button>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowSubCategoryTwo;