import { error } from 'console';

export const theme = {
	colors: {
		primary: {
			0: '#334094',
			10: '#D5DBFF',
			20: '#96A5FF',
			30: '#00127A',
			40: '#000C52'
		},
		secondary: {
			0: '#005359',
			10: '#00C4D1',
			20: '#99E8ED'
		},
		neutral: {
			0: '#FFFFFF',
			5: '#F5F5F5',
			10: '#EFF0F0',
			20: '#E8E9E9',
			30: '#CCD1D3',
			40: '#AEB9BF',
			50: '#90A4AE',
			60: '#7D8C94',
			70: '#677176',
			80: '#4C5153',
			90: '#3D3D3D'
		},
		feedback: {
			success: {
				['light']: '#DEF7E4',
				['medium']: '#28A745',
				['dark']: '#1C7330'
			},
			warning: {
				['light']: '#FFFAD6',
				['medium']: '#F4D400',
				['dark']: '#CCB400'
			},
			information: {
				['light']: '#ECF5FE',
				['medium']: '#2196F3',
				['dark']: '#042C4E'
			},
			error: {
				['light']: '#FEF2EC',
				['medium']: '#F44336',
				['dark']: '#83171A'
			}
		}
	},
	shadows: {
		16: '0px 4px 16px rgba(125, 140, 148, 0.5)',
		32: '0px 8px 32px rgba(125, 140, 148, 0.5)'
	}
};
