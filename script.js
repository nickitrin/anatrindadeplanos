function toggleMenu() {
    const menusSuperiores = document.querySelectorAll('.menu_superior');
  
    menusSuperiores.forEach(menuSuperior => {
      // Verifica se o menu superior está visível
      if (menuSuperior.style.display === 'none' || menuSuperior.style.display === '') {
        // Se estiver oculto ou sem estilo, exibe-o
        menuSuperior.style.display = 'flex';
      } else {
        // Caso contrário, esconde-o
        menuSuperior.style.display = 'none';
      }
    });
  }