const GenderCheckbox = ({onChangeBox, selectedGender}) => {
	return (
		<div className='flex'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer  ${selectedGender === "male" ? "selected" : ""}`}>
					<span className='label-text'>Male</span>
					<input type="checkbox" defaultChecked className="checkbox checkbox-info" 
						checked={selectedGender === "male"}
					    onChange={() => onChangeBox("male")}
					/>
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer  ${selectedGender === "female" ? "selected" : ""}`}>
					<span className='label-text'>Female</span>
					<input type="checkbox" defaultChecked className="checkbox checkbox-info"
						checked={selectedGender === "female"} 
					    onChange={() => onChangeBox("female")}
					/>
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;