import { useContext } from "react";

import UserContext from "../context/UserContext";

const Profile = () => {
	const { user } = useContext(UserContext);

	if (user) {
		return <div>username is {user.username}</div>;
	}

	return <div>No data available</div>;
};

export default Profile;
