import { StepStatus } from './Stepper';

const DoneIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
		<circle cx="12" cy="12" r="11" fill="#96A5FF" stroke="#334094" strokeWidth="2" />
		<path
			d="M18.8 9.65718C18.8 9.89112 18.7107 10.1252 18.5321 10.3035L11.2179 17.6177C11.04 17.7972 10.8057 17.8857 10.5714 17.8857C10.3371 17.8857 10.1034 17.7965 9.92514 17.6179L6.268 13.9607C6.08943 13.7829 6 13.5486 6 13.3143C6 12.792 6.42714 12.4 6.91429 12.4C7.14823 12.4 7.38229 12.4893 7.56057 12.6679L10.5714 15.68L17.24 9.01146C17.4171 8.83232 17.6514 8.74289 17.8857 8.74289C18.3743 8.74289 18.8 9.13432 18.8 9.65718Z"
			fill="#334094"
		/>
	</svg>
);

const ActiveIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
		<circle cx="12" cy="12" r="12" fill="#96A5FF" />
		<circle cx="12" cy="12" r="6" fill="#EFF0F0" />
	</svg>
);

const PendingIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
		<circle cx="12" cy="12" r="12" fill="#EFF0F0" />
		<circle cx="12" cy="12" r="6" fill="#96A5FF" />
	</svg>
);

export const StepCircle: React.FC<{ status: StepStatus }> = props => {
	if (props.status === 'done') return <DoneIcon />;
	if (props.status === 'active') return <ActiveIcon />;
	return <PendingIcon />;
};
