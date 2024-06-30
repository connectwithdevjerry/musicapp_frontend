// import { useNavigate, Link } from "react-router-dom";
// import { useFormik } from "formik";
// import * as yup from "yup";
// import "./SignUp.css";

// const SignUp = () => {
//   const navigate = useNavigate();
//   const initialValues = {
//     email: "",
//     password: "",
//     firstName: "",
//     lastName: "",
//   };

//   const renderError = (touched, errors) =>
//     (touched?.email && errors?.email && (
//       <span className="val-error">{errors.email}</span>
//     )) ||
//     (touched?.password && errors?.password && (
//       <span className="val-error">{errors.password}</span>
//     )) ||
//     (touched?.firstName && errors?.firstName && (
//       <span className="val-error">{errors.firstName}</span>
//     )) ||
//     (touched?.lastName && errors?.lastName && (
//       <span className="val-error">{errors.lastName}</span>
//     ));

//   const validationSchema = yup.object({
//     firstName: yup.string().required("Please enter a first name"),
//     lastName: yup.string().required("Please enter a last name"),
//     email: yup.string().email().required("Please enter a valid email address"),
//     password: yup
//       .string()
//       .matches(
//         "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
//         "Min 8 char, at least one letter, one number and one special character"
//       )
//       .required(),
//   });

//   const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
//     useFormik({
//       initialValues,
//       validationSchema,
//       onSubmit: (values) => {
//         console.log({ values });
//         navigate("/");
//       },
//     });

//   console.log(values);

//   return (
//     <div className="body">
//       <div className="containerup">
//         <form onSubmit={handleSubmit}>
//           <div className="head">
//             <span>Sign up</span>
//             {/* <p>Create a free account with your email.</p> */}
//           </div>
//           {renderError(touched, errors)}
//           <div className="inputs">
//             <input
//               type="text"
//               placeholder="First Name"
//               name="firstName"
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             <input
//               type="text"
//               placeholder="Last Name"
//               name="lastName"
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               name="email"
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               name="password"
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//           </div>
//           <button type="submit">Sign up</button>
//         </form>
//         <div className="form-footer">
//           <p>
//             Have an account? <Link to={"/signin"}>Log in</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
