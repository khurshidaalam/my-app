import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
const ShowCategory = props => {

    const data = props.data
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

    // const handleChange = (value , id)


    return (
        <div>
            <table class="table table-hover table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Category</th>
                        <th scope="col">Update</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((data, index) => <tr>
                            <th> {index + 1} </th>
                            <td>
                                <Link to={`/add-sub-category/${data.id}/${data.categoryName}`} > {data.categoryName} </Link>
                            </td>
                            <td
                                onClick={() => handleUpdate(data.categoryName, data.id)}
                            >
                                <i type="button" data-toggle="modal" data-target="#exampleModal" className='btn btn-success fa fa-edit'></i>
                            </td>
                            <td onClick={() => props.deleteCategory(data.id)} > <i className='btn btn-danger fa fa-trash'></i> </td>
                        </tr>)
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
                                            type="text"
                                            readonly class="form-control"
                                            id="staticEmail"
                                            value={update.value}
                                            placeholder="Add Category"
                                            onChange={(e) => handleUpdate(e.target.value, update.id)}

                                        />
                                    </div>
                                </div>
                                <div class="my-3">
                                    <Button
                                        onClick={() => { props.updateCategory(update.value, update.id) }}
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

export default ShowCategory;