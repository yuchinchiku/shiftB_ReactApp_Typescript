import { useForm } from "react-hook-form";

const FormBasic = () => {
  const defaultValues = {
    name: '髙橋　侑',
    email: 'abc@gmail.com',
    message: '本文を入力してください'
  }

  const { register, handleSubmit, formState: {errors} } = useForm({
    defaultValues
  });

  const onsubmit = data => console.log(data);
  const oneerror = err => console.log(err);
};


export default FormBasic;