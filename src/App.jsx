import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
	return (
		<UserContextProvider>
			<div className="flex justify-center items-center h-screen w-screen">
				<h1 className="text-red-600 font-semibold">Context API</h1>
			</div>
			<Login />
			<Profile />
		</UserContextProvider>
	);
}

export default App;
