const switchLang = (language) => {
    const romana = document.getElementById('romana');
    const engleza = document.getElementById('engleza');
  
    if (language === 'romana') {
      romana.style.display = 'block';
      engleza.style.display = 'none';
    } else if (language === 'engleza') {
      romana.style.display = 'none';
      engleza.style.display = 'block';
    }
  };

  
  // Alegeți limba implicită sau lăsați utilizatorul să o aleagă
  switchLang('romana');

  
  
  