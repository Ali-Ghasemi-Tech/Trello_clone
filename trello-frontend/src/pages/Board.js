import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from '../api/axios';

function Board() {
  const { boardId } = useParams();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get(`/boards/${boardId}/tasks/`).then(res => setTasks(res.data));
  }, [boardId]);

  return (
    <div>
      <h4>Tasks in Board {boardId}</h4>
      <ul>
        {tasks.map(t => (
          <li key={t.id}>{t.title} - {t.status}</li>
        ))}
      </ul>
    </div>
  );
}
