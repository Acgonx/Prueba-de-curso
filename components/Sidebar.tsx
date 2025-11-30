
import React from 'react';
import type { Lesson } from '../types';

interface SidebarProps {
  lessons: Lesson[];
  selectedLessonId: number;
  onSelectLesson: (id: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ lessons, selectedLessonId, onSelectLesson }) => {
  return (
    <aside className="w-64 md:w-80 bg-gray-100 p-4 md:p-6 border-r border-gray-200 overflow-y-auto hidden sm:block">
      <h2 className="text-xl font-bold text-gray-700 mb-6">Contenido del Curso</h2>
      <nav>
        <ul className="space-y-2">
          {lessons.map(lesson => (
            <li key={lesson.id}>
              <button
                onClick={() => onSelectLesson(lesson.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-lg transition-colors duration-200 ${
                  selectedLessonId === lesson.id
                    ? 'bg-blue-600 text-white font-semibold shadow'
                    : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                }`}
              >
                {lesson.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
