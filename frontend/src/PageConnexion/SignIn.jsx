import SignUp from "./SignUp";
export default function SignIn () {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
    });
    const [isSignup, setIsSignup] = useState('');
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleLogin = () => {
      // Implémentez la logique de connexion ici
    };
  
    const handleSignUp = () => {
      setIsSignup(true);
    };
  
    if (isSignup) {
      return <SignUp />;
    }
    return (
        <>
        <div className="flex items-center h-screen justify-center bg-gradient-to-b from-blue-600 to-gray-700">
            <div className="bg-white w-96 py-8 px-10 rounded-xl shadow-lg w-100% text-center">
              <p className="mt-6 text-center text-4xl text-black font-semibold">
                Bonjour!
              </p>
              <h1 className="text-2xl font-bold mb-4 text-gray-800">
                Bienvenue sur notre site
              </h1>
              <h2 className="text-3xl font-bold text-blue-800 mb-6">Login</h2>
              <form className="flex flex-col space-y-4">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none"
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none"
                />
                <button
                  onClick={handleLogin}
                  className="bg-gray-600 font-bold text-white rounded-md py-1  hover:bg-gray-800 w-1/2 m-20 mr-3"
                >
                  Login
                </button>
              </form>
              <button
                onClick={handleSignUp}
                className="bg-gray-600 font-bold text-white rounded-md py-1 px-4 hover:bg-gray-800 w-1/2 m-3 ml-5"
              >
                Sign Up
              </button>
            </div>
          </div>
        </>
    )
}