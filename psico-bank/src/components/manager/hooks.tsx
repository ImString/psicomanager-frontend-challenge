import { useListener } from '@/utils';

interface ClickNextButtonListen {
	step: number;
}

interface NextStepListen {}

export const clickNextButtonListen = useListener<ClickNextButtonListen>('form-click-next-button');
export const nextStepListen = useListener<NextStepListen>('form-next-step');
