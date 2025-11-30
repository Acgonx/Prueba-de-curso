
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import CourseContent from './components/CourseContent';
import Header from './components/Header';
import Chatbot from './components/Chatbot';
import { COURSE_LESSONS } from './constants';
import type { Lesson } from './types';

const App: React.FC = () => {
  const [selectedLessonId, setSelectedLessonId] = useState<number>(1);

  const selectedLesson = COURSE_LESSONS.find(lesson => lesson.id === selectedLessonId) as Lesson;

  return (
    <div className="flex flex-col h-screen font-sans antialiased text-gray-800">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          lessons={COURSE_LESSONS} 
          selectedLessonId={selectedLessonId}
          onSelectLesson={setSelectedLessonId} 
        />
        <main className="flex-1 p-6 md:p-10 overflow-y-auto bg-white">
          <CourseContent lesson={selectedLesson} />
        </main>
      </div>
      <Chatbot />
    </div>
  );
};

export default App;
