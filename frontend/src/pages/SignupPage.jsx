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

  const submitForm = (e) => {
    e.preventDefault();
    const navigate = useNavigate();

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
  <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Sign Up</h2>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Full Name</label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Email</label>
              <input
                type="email"
                className="border rounded w-full py-2 px-3"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@email.com"
              />
            </div>

  };

export default SignupPage;