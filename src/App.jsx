import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
	return (
		<UserContextProvider>
			<div className="flex flex-col justify-center items-center h-screen w-screen gap-10">
				<h1 className="text-red-600 font-semibold">Context API</h1>
				<Login />
				<Profile />
			</div>
		</UserContextProvider>
	);
}

export default App;
