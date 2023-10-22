import { useState, useContext } from "react";

import UserContext from "../context/UserContext";

const Login = () => {
	const [username, setUsername] = useState("");

	const [password, setPassword] = useState("");

	const { setUser } = useContext(UserContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		setUser({
			username,
			password,
		});
	};

	return (
		<div className="flex flex-col justify-center items-center gap-5">
			<h2 className="text-3xl font-semibold">Login</h2>
			<div className="flex gap-5 justify-center items-center">
				<input
					type="text"
					placeholder="username"
					value={username}
					className="input input-bordered"
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					type="password"
					placeholder="password"
					className="input input-bordered"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<button className="btn btn-success" onClick={handleSubmit}>
				Submit
			</button>
		</div>
	);
};

export default Login;
