import React, { Fragment, useState } from 'react'

export const EditTodo = ({todo}) => {
    return (
        <Fragment>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
                Düzenle
            </button>

            <div class="modal" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h4 class="modal-title">Düzenle</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div class="modal-body">
                            <form>
                                <input type='text'></input>
                            </form>

                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-warning" data-dismiss="modal">Edit</button>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}
