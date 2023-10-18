import React, { useContext } from "react";
import {ModeContext} from '../../Helpers/useContext'
import "./Sidebar.css";
import { rowData } from "../../Helpers/SidebarData";
export default function Sidebar() {
	const context = useContext(ModeContext);
	const handleNav = tab => {
		context.dispatch({...context.state,tab:tab});
		//return console.log(activate)
	}
	
	return (
		<div className="sidebar">
			<ul>
				{
					rowData.map((rw, i) => {
						return (
							<li
								key={i} 
								id={rw.title===context.state.tab?'active':''}
								onClick={() => handleNav(rw.title)}
							>
								<div>{rw.icon}</div>
								<div>{rw.title}</div>
							</li>
						)
					})
				}
			</ul>

		</div>
	);
}

