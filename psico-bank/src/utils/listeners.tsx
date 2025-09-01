import { useEffect } from 'react';

export interface CustomListenerResponse<T = any> {
	id: string;
	emit: (data?: T) => any;
	listen: (callback: (data: T) => any) => any;
}

export const useListener = <T,>(id: string): CustomListenerResponse<T> => {
	const emit: CustomListenerResponse<T>['emit'] = (data = {} as T) => {
		const event = new CustomEvent(id, { detail: data });

		window.dispatchEvent(event);
	};

	const listen: CustomListenerResponse<T>['listen'] = callback => {
		useEffect(() => {
			const handler = (event: CustomEvent) => {
				callback(event.detail);
			};

			window.addEventListener(id, handler as EventListener);

			return () => {
				window.removeEventListener(id, handler as EventListener);
			};
		}, []);
	};

	return { id, emit, listen };
};
