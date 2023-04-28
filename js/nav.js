      const img1 = document.querySelector('.img-1');
      const img2 = document.querySelector('.img-2');
      const links = document.getElementById('links');
      
      img1.addEventListener('click', () => {
        img2.style.display="block"
        img1.style.display="none"
        links.style.display="flex"
      });
      
      img2.addEventListener('click', () => {
        img1.style.display="block";
        img2.style.display="none"
        links.style.display="none"
      });