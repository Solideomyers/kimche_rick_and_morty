import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useCustomNavigate = () => {
  const navigate = useNavigate();

  const handleRoute = useCallback(
    (baseUrl: string, id: string) => {
      navigate(`${baseUrl}${id}`);
    },
    [navigate]
  );

  return { handleRoute };
};
