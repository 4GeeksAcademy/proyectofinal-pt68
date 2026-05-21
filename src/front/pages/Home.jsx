import React, {useState } from "react"

import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	const [myImage, setMyImage]= useState(null)

	const uploadImage = async(e) =>{
	    console.log(e.target.files[0]);
		const formData = new FormData()

		formData.append("image", e.target.files[0])

		const response = await fetch(import.meta.env.VITE_BACKEND_URL + "api/upload", {
			method:"POST",
			body: formData
		})
		const data = await response.json()
		setMyImage(data)
		console.log(data);
		

	}






	return (
		<div className="text-center mt-5 container">
			<h1 className="display-4">Hello PT-68!!</h1>

			<input type="file" onChange={uploadImage} />

			<img src={myImage} alt="imagen cargada por el usuario" />

		</div>
	);
}; 