import React from "react";
import { Course } from '../interfaces/course.interface';

type CourseItemProp = {
	course: Course[];
};

export const CourseItem = (props: CourseItemProp) => {
	return (
	<ul>
		{props.course.map((item) => (
			<li>{item.number} - <b>{item.name}</b></li>
		))}
	</ul>
	);
}
