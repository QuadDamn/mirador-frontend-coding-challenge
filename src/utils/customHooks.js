import { useState } from 'react';

// Source: https://serverless-stack.com/chapters/create-a-custom-react-hook-to-handle-form-fields.html
// The goal here is to not have to create the state manually for each potential form element.
// Lets just say you have a form with a lot of fields, the useState initialization bit would become
// overwhelming to look at and manage.
const useFormFields = initialState => {
  const [fields, setValues] = useState(initialState);

  return [
    fields,
    // `value` is another parameter here because we need it to support the Currency textfield.
    (event, value) => {
      setValues({
        ...fields,
        [event.target.id]: value ? value : event.target.value,
      });
    },
  ];
};

export { useFormFields };
