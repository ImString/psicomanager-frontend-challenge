import React from 'react';

import { StepCircle } from './Circle';
import { Container, StepLabel, StepperWrapper, StepWrapper } from './styles';

export interface StepDetails {
	title: string;
	componentView?: React.ReactNode;
}

export type StepStatus = 'done' | 'active' | 'pending';

interface StepperProps {
	stepperDetails: StepDetails[];
	activeStep: number;
}

export const Stepper: React.FC<StepperProps> = props => {
	return (
		<Container>
			<li>
				<StepperWrapper>
					{props.stepperDetails.map((step, index) => {
						let status: StepStatus =
							index < props.activeStep ? 'done' : index === props.activeStep ? 'active' : 'pending';

						return (
							<StepWrapper key={index} status={status}>
								<StepCircle status={status} />
								<StepLabel status={status}>{step.title}</StepLabel>
							</StepWrapper>
						);
					})}
				</StepperWrapper>
			</li>
		</Container>
	);
};
