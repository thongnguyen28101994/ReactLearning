import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, MenuItem, Select, TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box } from "@mui/system";
export default function TodoForm() {
  const schema = yup.object({
    firstName: yup.string().required(),
    age: yup.number().required().min(18),
  });
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      age: "",
      select1: {},
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  // console.log(watch("example"));
  return (
    <>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="test" {...register("example")} />
        <input {...register("exmampleRequired", { required: true })} />
        {errors.exmampleRequired && <span>this field is requied</span>}
        <input type="submit" />
      </form> */}
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("firstName", {
            valueAsNumber: true,
          })}
        />

        {errors.firstName && <span>Not a Number</span>}
        <select {...register("gender")}>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="Other">Other</option>
        </select>
        <input type="submit"></input>
      </form> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box component="form">
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => (
              <TextField {...field} label="firstName" variant="outlined" />
            )}
          ></Controller>
          <Controller
            name="age"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="age"
                variant="outlined"
                helperText={errors.age?.message}
              />
            )}
          ></Controller>
          <Controller
            name="select1"
            control={control}
            render={({ field }) => (
              <Select {...field} defaultValue={10}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            )}
          ></Controller>
        </Box>

        <input type="submit"></input>
      </form>
    </>
  );
}
