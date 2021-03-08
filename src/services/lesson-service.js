const MODULES_URL = "https://wbdv-generic-server.herokuapp.com/api/anjun/modules";
const LESSONS_URL = "https://wbdv-generic-server.herokuapp.com/api/anjun/lessons";

export const createLessonForModule = (moduleId, lesson) =>
    fetch(`${MODULES_URL}/${moduleId}/lessons`, {
      method: "POST",
      body: JSON.stringify(lesson),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json())

export const findLessonsForModule = (moduleId) =>
    fetch(`${LESSONS_URL}/${moduleId}/lessons`)
    .then(response => response.json())

export const updateLesson = (lessonId, lesson) =>
    fetch(`${MODULES_URL}/${lessonId}`, {
      method: "PUT",
      body: JSON.stringify(lesson),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json())

export const deleteLesson = (lessonId) =>
    fetch(`${LESSONS_URL}/${lessonId}`, {
      method: "DELETE"
    })
    .then(response => response.json())

export default {
  findLessonsForModule,
  createLessonForModule,
  updateLesson,
  deleteLesson
}