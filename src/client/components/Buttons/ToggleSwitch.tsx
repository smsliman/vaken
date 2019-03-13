import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import STRINGS from '../../assets/strings.json';


const Label = styled('label')`
    display: inline-flex;
    align-items: center;
    font-size: 1rem;
`

const Switch = styled('div')`
	position: relative;
	display: inline-block;
	width: 3.5rem;
    height: 2rem;
    margin-left: 0.25rem;
`;

interface SliderProps {
	checked: boolean;
}

const Slider = styled('div')`
	${({ checked }: SliderProps) =>
		checked
			? `background-color: ${STRINGS.ACCENT_COLOR}; &:before { transform: translateX(1.5rem); }`
			: 'background-color: #ccc;'}
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	transition: 0.4s;
<<<<<<< HEAD
	border-radius: 2.125rem;
=======
	border-radius: 34px;
>>>>>>> 9a44ce2d85b3785084f73e3f8ae10bc367df8993

	:before {
		border-radius: 50%;
		position: absolute;
		content: '';
		height: 1.5rem;
		width: 1.5rem;
		left: 0.25rem;
		bottom: 0.25rem;
		background-color: white;
		transition: 0.4s;
	}
`;

interface Props {
	label: string;
	checked: boolean;
	onChange?: (value: boolean) => void;
}

export const ToggleSwitch: FunctionComponent<Props> = (props: Props): JSX.Element => {
	return (
		<Label>
            {props.label}
                <Switch onClick={() => props.onChange && props.onChange(!props.checked)}>
                    <Slider checked={props.checked} />
                </Switch>
		</Label>
	);
};

export default ToggleSwitch;

// Copyright (c) 2019 Vanderbilt University
