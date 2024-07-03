import React from 'react';
import './App.css';

import { useState, useEffect } from 'react';

import {Course} from './interfaces/course.interface'
import { CourseItem } from './components/courseitem.component';

const App = () => {

  const [course, setCourse] =  useState<Course[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/course")
      .then((res) => res.json())
        .then((obj) => {
          // console.log(obj);
          setCourse(obj);
        })
  }, []);

  return (
    <div className="App">
      <CourseItem course={course}/>
    </div>
  );
}

export default App;
