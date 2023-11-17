import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Header = () => {
  // Función para manejar la acción de salir de la cuenta
  const handleLogout = () => {
    // Lógica para cerrar sesión
    console.log('Cerrar sesión'); // Puedes implementar la lógica de cierre de sesión aquí
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Tu Logo
        </Typography>

        {/* Botón de salir de la cuenta */}
        <Button color="inherit" onClick={handleLogout} startIcon={<ExitToAppIcon />}>
          Salir
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
