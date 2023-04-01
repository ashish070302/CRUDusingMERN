import React from 'react'

const Home = () => {
    return (
        <div className='mt-5'>
            <div className='container'>
                <div className='add_btn mt-2'>
                    <button className='btn btn-primary'><b>+</b> Add Data</button>
                </div>

                <table class="table table-striped-columns">
                    <thead>
                        <tr className='table-dark'>
                            <th scope="col">Id</th>
                            <th scope="col">UserName</th>
                            <th scope="col">Email</th>
                            <th scope="col">Platform</th>
                            <th scope="col">Mobile No.</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>BT20HCS121</td>
                            <td>ashish.kumar20@st.niituniversity.in</td>
                            <td>NU-Moodle</td>
                            <td>8235811093</td>
                            <td className='d-flex justify-content-between'>
                                <button className='btn btn-success'><i class="fa-sharp fa-solid fa-eye">  Read</i></button>
                                <button className='btn btn-primary'><i class="fa-solid fa-pen-to-square">  Update</i></button>
                                <button className='btn btn-danger'><i class="fa-solid fa-trash">  Delete</i></button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>111</td>
                            <td>test.mail@gmail.com</td>
                            <td>Demo</td>
                            <td>9876543210</td>
                            <td className='d-flex justify-content-between'>
                                <button className='btn btn-success'><i class="fa-sharp fa-solid fa-eye">  Read</i></button>
                                <button className='btn btn-primary'><i class="fa-solid fa-pen-to-square">  Update</i></button>
                                <button className='btn btn-danger'><i class="fa-solid fa-trash">  Delete</i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Home