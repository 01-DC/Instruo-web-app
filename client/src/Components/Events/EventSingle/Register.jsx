import React from "react"
import { useStateContext } from "../../../Contexts/ContextProvider"
import RegisterModal from "./RegisterModal"
import TeamTable from "./TeamTable"

const Register = ({ isRegistered, type, eventId, team }) => {
	const { loginUser } = useStateContext()

	if (!loginUser)
		return (
			<div className="bg-base-100 text-base-content mx-auto  max-w-md md:max-w-full">
				<div className="hero-content px-8 md:px-4 mx-auto flex flex-col">
					<div className="alert alert-info shadow-lg">
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								className="stroke-current flex-shrink-0 w-6 h-6">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
							</svg>
							<span>Please login to register for this event</span>
						</div>
					</div>
				</div>
			</div>
		)

	return (
		<div className="bg-base-100 text-base-content mx-auto  max-w-md md:max-w-full">
			<div className="hero-content px-8 md:px-4 mx-auto flex flex-col">
				{isRegistered ? (
					<div className="alert alert-success shadow-lg">
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="stroke-current flex-shrink-0 h-6 w-6"
								fill="none"
								viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							<span>
								Congratulations! You are registered for this
								event!
							</span>
						</div>
					</div>
				) : (
					<label
						id="reg"
						htmlFor="my-modal-6"
						className="btn btn-primary btn-wide lg:mx-4 my-2 lg:btn-lg">
						Register
					</label>
				)}

				<div className="flex flex-col lg:flex-row">
					<input
						type="checkbox"
						id="my-modal-6"
						className="modal-toggle"
					/>
					<div className="modal sm:modal-middle">
						<div className="modal-box">
							<label
								htmlFor="my-modal-6"
								className="btn btn-sm btn-circle absolute right-2 top-2">
								✕
							</label>
							<RegisterModal type={type} eventId={eventId} />
						</div>
					</div>
				</div>
				{isRegistered && type === "Team" && <TeamTable {...team} />}
			</div>
		</div>
	)
}

export default Register
