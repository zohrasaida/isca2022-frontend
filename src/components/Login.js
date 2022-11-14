// import React from 'react'
// import { useFormik } from "formik";

// import * as Yup from "yup";
// //import the action to save the user

  

// export default function Login() {
    
//   const formik = useFormik({
//     initialValues: {
//       username: "",
//       password: "",
//     },
//     validationSchema: Yup.object({
//       username: Yup.string().required(),
//       password: Yup.string().required(),
//     }),
//     onSubmit: (values) => {
//       const c = {
//         username: values.username,
//         password: values.password,
//       };
//       console.log("This is c", c);
//     },
//   });
//   return (
//     <div
//       className="card auth-form-light text-left p-5"
//       style={{
//         width: "35%",
//         marginTop: "7%",
//         marginLeft: "33%",
//         marginBottom: "2rem",
//         height: "60%",
//       }}
//     >
//       <div className="brand-logo">
//         logo
//       </div>
//       <h4>text.......................</h4>
//       <form onSubmit={formik.handleSubmit} className="pt-3">
//         <div className="form-group">
//           <input
//             type="text"
//             className="form-control form-control-lg app-config-form-control"
//             id="username"
//             name="username"
//             placeholder="Nom d'utilisateur"
//             value={formik.values.username}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//           />

//           {formik.touched.username && formik.errors.username ? (
//             <div>{formik.errors.username}</div>
//           ) : null}
//         </div>
//         <div>
//           <input
//             type="password"
//             className="form-control form-control-lg app-config-form-control"
//             id="password"
//             placeholder="Mot de passe"
//             name="password"
//             value={formik.values.password}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//           />

//           {formik.touched.password && formik.errors.password ? (
//             <div>{formik.errors.password}</div>
//           ) : null}
//         </div>

//         <div className="mt-3">
//           <button
//             type="submit"
//             className="btn btn-block btn-gradient-dark btn-lg font-weight-medium auth-form-btn"
//           >
//             Verify
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
