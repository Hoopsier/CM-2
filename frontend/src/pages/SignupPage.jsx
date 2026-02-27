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

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Password</label>
              <input
                type="password"
                className="border rounded w-full py-2 px-3"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Phone Number</label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="+358..."
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Gender</label>
              <select
                className="border rounded w-full py-2 px-3"
                required
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="" disabled>
                  Select...
                </option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
                <option value="prefer_not_to_say">Prefer not to say</option>
              </select>
            </div>

            <h3 className="text-2xl mb-4 mt-6">Address</h3>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Street</label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3"
                required
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                placeholder="Street 123"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">City</label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Helsinki"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">Zip Code</label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3"
                required
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                placeholder="00100"
              />
            </div>

            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
            >
              Create Account
            </button>

            <p className="text-center text-gray-600 mt-4">
              Already have an account?{" "}
              <Link to="/login" className="text-indigo-600 hover:text-indigo-700 font-semibold">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;