// src/pages/MainPage.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { logout } from '../features/userSlice';
import { Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MainPage: React.FC = () => {
  const username = useSelector((state: RootState) => state.user.username);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <Container>
      <Typography variant="h4">Hello, {username}!</Typography>
      <Button variant="contained" color="secondary" onClick={handleLogout}>
        Logout
      </Button>
    </Container>
  );
};

export default MainPage;
