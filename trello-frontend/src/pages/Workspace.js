import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from '../api/axios';

function Workspace() {
  const { id } = useParams();
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    axios.get(`/workspaces/${id}/boards/`).then(res => setBoards(res.data));
  }, [id]);

  return (
    <div>
      <h3>Boards in Workspace {id}</h3>
      <ul>
        {boards.map(b => (
          <li key={b.id}>
            <Link to={`/workspace/${id}/board/${b.id}`}>{b.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
