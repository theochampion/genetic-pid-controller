import styled from "styled-components";

const Button = styled.button`
	margin-top: 1rem;
	padding: 0.5rem 1rem;
	border: 2px solid white;
	background-color: transparent;
	color: white;
	font-size: 1rem;
	font-family: "Source Code Pro", monospace;
	cursor: pointer;
	outline: none;
	&:hover {
		opacity: 0.8;
	}
`;

export default Button;
