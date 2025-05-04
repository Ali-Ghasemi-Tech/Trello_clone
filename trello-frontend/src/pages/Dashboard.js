import { useEffect, useState } from 'react';
import axios from '../api/axios';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [workspaces, setWorkspaces] = useState([]);

  useEffect(() => {
    axios.get('/workspaces/').then(res => setWorkspaces(res.data));
  }, []);

  return (
    <div>
      <h2>Your Workspaces</h2>
      <ul>
        {workspaces.map(w => (
          <li key={w.id}>
            <Link to={`/workspace/${w.id}`}>{w.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
