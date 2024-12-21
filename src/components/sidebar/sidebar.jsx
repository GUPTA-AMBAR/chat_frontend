import Conversations from "./conversations";
import LogoutButton from "./logout";
import SearchInput from "./searchInput";

const Sidebar = () => {
	return (
		<div className='border-r border-slate-500 p-4 flex flex-col'>
			<SearchInput />
			<div className="divider divider-primary"></div>
			<Conversations />
			<LogoutButton />
		</div>
	);
};
export default Sidebar;