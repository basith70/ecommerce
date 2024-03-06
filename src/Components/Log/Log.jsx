import React from 'react'
import * as yup from'yup'
import { useFormik } from 'formik'


const validationSchema =yup.object({
  Username:yup.string().trim('error'),
  Emailaddress:yup.string().email("type email")
})
function Log() {
  const initialValues={
    Username:"",
    Emailadress:"",
    Password:"",
    Phonenumber:"",
  }
  async function onSubmit(values){console.log(values)}

  const formik=useFormik({
    validationSchema,
    onSubmit,
    initialValues,
  });
  return (
    <div>
        <div>
        <center>
      <form onSubmit={formik.handlesubmit}>
      <div class="mb-3">
    <label for="username" class="form-label">username : </label>
    <input type="username" class="form-control" id="username1" style={{width:300}}
    name='username'
    onChange={formik.handleChange}
    onBlur={formik.handleBur}
    value={formik.values.username}
    />
    {formik.touched.username && formik.errors.username ? (
      <div className="error">{formik.errors.Emailaddress}</div>
    ) :null}
    
  </div>
        
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  style={{width:300}}/>
    {formik.touched.Emailsaddress && formik.errors.Emailaddress ? (
      <div className="error">{formik.errors.username}</div>
       ) : null}   
    
    
    
    <div id="emailHelp" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"  style={{width:300}}/>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</center>
    </div>
    </div>
  )
}

export default Log
