import { useContext } from "react";

import UserContext from "../context/UserContext";

const Profile = () => {
	const { user } = useContext(UserContext);

	if (user) {
		return <div>{user.username}</div>;
	}

	return <div>No data available</div>;
};

export default Profile;
