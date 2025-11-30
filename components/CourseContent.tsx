
import React from 'react';
import type { Lesson } from '../types';

interface CourseContentProps {
  lesson: Lesson;
}

const CourseContent: React.FC<CourseContentProps> = ({ lesson }) => {
  return (
    <article className="max-w-4xl mx-auto">
      {lesson.content}
    </article>
  );
};

export default CourseContent;
