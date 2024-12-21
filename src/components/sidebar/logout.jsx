import { BiLogOut } from "react-icons/bi";
import UseLogout from "../../hooks/useLogout";

const LogoutButton = () => {
	const { loading, uselogout } = UseLogout();

	return (
		<div className='mt-auto'>
			{!loading ? (
				<BiLogOut className='w-6 h-6 text-white cursor-pointer' onClick={uselogout} />
			) : (
				<span className='loading loading-spinner'></span>
			)}
		</div>
	);
};
export default LogoutButton;