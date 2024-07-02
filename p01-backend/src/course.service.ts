import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
  getCourse(): any[] {
    return [
		{id: '10',
			number: '1000000',
			name: 'math'
			},
		{id: '101',
			number: '1111111',
			name: 'Com'
		   },
		{id: '1011',
			number: '1010101',
			name: 'Physics'
		   },
		{id: '1000',
			number: '1011111',
			name: 'Chem'
		   }
	];
  }
}
