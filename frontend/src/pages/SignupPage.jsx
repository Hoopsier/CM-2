import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");

  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const newUser = {
      name,
      email,
      password,
      phone_number: phoneNumber,
      gender,
      address: { street, city, zipCode },
    };

    console.log("Signup payload:", newUser);
    toast.info("Signup UI listo. Integración con backend en la siguiente iteración.");
    navigate("/login");
  };

return (

  };

export default SignupPage;