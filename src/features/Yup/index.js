import React from "react";
import * as yup from "yup";
export default function YupTest() {
  yup.setLocale({
    mixed: {
      default: "field invalid",
    },
    number: {
      min: (min) => ({ key: "field too short", values: { min } }),
    },
  });
  let schema = yup.object().shape({
    name: yup.string(),
    age: yup.number().min(18).required().integer(),
  });
  //   schema
  //     .isValid({
  //       name: "test",
  //       age: "24t",
  //     })
  //     .then(function (valid) {
  //       console.log(valid);
  //     });
  // .catch(function (e) {
  //   console.log(e);
  // });

  schema
    .validate(
      {
        name: "test",
        age: 11,
      }
      //{ strict: true }
    )
    .then(function (valid) {
      console.log(valid);
    })
    .catch(function (err) {
      console.log(err.errors);
    });
  //   const test = schema.cast({
  //     name: "test1",
  //     age: "24",
  //   });
  //   console.log(test);
  return <div>YupTest</div>;
}
