'use client'
import { Button, Radio, RadioGroup } from "@chakra-ui/react"
import { Form, Formik, useFormik } from "formik"

interface OptionPickerProps {
  options: string[],
}

export const OptionPicker: React.FC<OptionPickerProps> = ({
  options,
}) => {
  let formik = useFormik({
    initialValues: {
      optionChosen: ""
    },
    onSubmit: async (values) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
      }, 1000);
    }
  });

  return (
    <Formik
      initialValues={{ optionNumber: "" }}
      onSubmit={(values) => {
        setTimeout(() => {
          console.log("holy crap!");
        }, 3000);
        alert(JSON.stringify(values, null, 2))
      }}
    >
      {({ values }) => (
        <Form>
          <RadioGroup>
            <Radio>Something?</Radio>
            <Radio>Hello??</Radio>
          </RadioGroup>
          <Button type="submit">Check</Button>
        </Form>
      )}
    </Formik>
  )
}

export default OptionPicker;

