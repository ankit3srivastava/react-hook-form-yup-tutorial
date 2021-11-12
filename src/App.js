import { useForm } from "react-hook-form";
import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";

function App() {
  let schema = yup.object().shape({
    firstname: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
    openingDate: yup.date().required("Please enter the required field"),
    closingDate: yup.date()
      .min(yup.ref("openingDate"))
      .required("Please enter the required field"),
  });
  const { register, handleSubmit, errors } = useForm({
    mode: "onTouched",
    validationSchema: schema,
  });
  const onSubmit = (data) => console.log("submited :", data);
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="firstname"
          // ref={register({
          //   required:true
          // })}
          ref={register}
        />
        {errors.firstname?.type === "required" && (
          <p style={{ color: "red" }}>{errors.firstname.message}</p>
        )}
        <br />
        <input
          type="text"
          name="email"
          // ref={register({
          //   required:true,
          //   pattern: some regx pattern
          // })}
          ref={register}
        />
        {errors.email?.type === "required" && (
          <p style={{ color: "red" }}>{errors.email.message}</p>
        )}
        {errors.email?.type === "email" && (
          <p style={{ color: "red" }}>{errors.email.message}</p>
        )}
        <br />
        <input
          type="password"
          name="password"
          // ref={register({
          //   required:true,
          //   minLength: 6
          // })}
          ref={register}
        />
        {errors.password?.type === "required" && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}
        {errors.password?.type === "min" && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}
        <br />
        <input type="date" name="openingDate" ref={register}/>
        {errors.openingDate?.type === "required" && (
          <p style={{ color: "red" }}>{errors.openingDate.message}</p>
        )}
        <br />
        <input type="date" name="closingDate" ref={register}/>
        {errors.closingDate?.type === "required" && (
          <p style={{ color: "red" }}>{errors.openingDate.message}</p>
        )}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
