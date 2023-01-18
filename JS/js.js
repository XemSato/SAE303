var ctx = document.getElementById('Premier').getContext('2d');
Chart.defaults.color = '#ffffff';
Chart.defaults.borderColor = '#ffffff';
var chart = new Chart(ctx, {
  // Le type de graphique
  type: 'bar',
  // Les données du graphique
  data: {
    labels: ['Etats-Unis', 'Chine', 'Russie', 'Europe', 'Inde', 'Japon'],
    datasets: [{
      label: 'Vols ratté',
      data: [0, 0, 1, 0, 2, 0],
      backgroundColor: 'rgba(54, 162, 235)',
      borderColor: 'rgba(54, 162, 235)',
      borderWidth: 1
    },
    {
      label: 'Vols réussi',
      data: [15, 15, 30, 6, 1, 2],
      backgroundColor: 'rgba(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132)',
      borderWidth: 1
    }]
  },
  // Les options du graphique
  options: {
    plugins: {
      title: {
          display: true,
          text: '2010'
          
      }
  },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true
      }
    }
  }
});

var ctx = document.getElementById('Deuxieme').getContext('2d');
Chart.defaults.color = '#ffffff';
Chart.defaults.borderColor = '#ffffff';
var chart = new Chart(ctx, {
  // Le type de graphique
  type: 'bar',
  // Les données du graphique
  data: {
    labels: ['Etats-Unis', 'Chine', 'Russie', 'Europe', 'Inde', 'Japon'],
    datasets: [{
      label: 'Vols ratté',
      data: [2,0,1,0,0,0],
      backgroundColor: 'rgba(54, 162, 235)',
      borderColor: 'rgba(54, 162, 235)',
      borderWidth: 1
    },
    {
      label: 'Vols réussi',
      data: [18,19,26,9,5,4],
      backgroundColor: 'rgba(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132)',
      borderWidth: 1
    }]
  },
  // Les options du graphique
  options: {
    plugins: {
      title: {
          display: true,
          text: '2015'
          
      }
  },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true
      }
    }
  }
});



var ctx = document.getElementById('Troisieme').getContext('2d');
Chart.defaults.color = '#ffffff';
Chart.defaults.borderColor = '#ffffff';
var chart = new Chart(ctx, {

  // Le type de graphique
  type: 'bar',
  // Les données du graphique
  data: {
    labels: ['Etats-Unis', 'Chine', 'Russie', 'Europe', 'Inde', 'Japon'],
    datasets: [{
      label: 'Vols ratté',
      data: [3,4,0,1,0,0],
      backgroundColor: 'rgba(54, 162, 235)',
      borderColor: 'rgba(54, 162, 235)',
      borderWidth: 1
      
    },
    {
      label: 'Vols réussi',
      data: [34,35,17,4,2,4],
      backgroundColor: 'rgba(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132)',
      borderWidth: 1
    }]
  },
  // Les options du graphique
  options: {
    plugins: {
      title: {
          display: true,
          text: '2024'
          
      }
  },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true
      }
    }
  }
});


var ctx = document.getElementById('P4').getContext('2d');
Chart.defaults.color = '#ffffff';
Chart.defaults.borderColor = '#ffffff';
var chart = new Chart(ctx, {
    // Le type de graphique
    type: 'line',
    // Les données du graphique
    data: {
        labels: [2010, 2015, 2020],
        datasets: [
        {
        label: 'Avancé au fil du temps',
        data: [15, 20, 37],
        borderColor: 'rgba(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235)',
        pointBackgroundColor: 'rgba(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 99, 132)'
        },{
        type: "bar",
        label: 'Nombre de lancé',
        data: [15, 20, 37],
        borderColor: 'rgba(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.8)',
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 99, 132, 1)'
      }]
    },
    // Les options du graphique
    options: {
      plugins: {
      title: {
          display: true,
          text: 'Etat-Unis'
          
      }
  },
      scales: {
        xAxes: [{
          type: 'time',
          time: {
            unit: 'year'
          }
        }],

    }
    //     // Ajout de l'animation Progressive Line
    //   animation: {
    //     duration: 1000,
    //     easing: 'linear',
    //     onProgress: function(animation) {
    //       progress.value = animation.animationObject.currentStep / animation.animationObject.numSteps;
    //     }
    //   }
    }
  });

var ctx = document.getElementById('P5').getContext('2d');
Chart.defaults.color = '#ffffff';
Chart.defaults.borderColor = '#ffffff';
var chart = new Chart(ctx, {
    // Le type de graphique
    type: 'line',
    // Les données du graphique
    data: {
        labels: [2010, 2015, 2020],
        datasets: [
        {
        label: 'Avancé au fil du temps',
        data: [15, 19, 39],
        borderColor: 'rgba(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235)',
        pointBackgroundColor: 'rgba(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 99, 132, 1)'
        },{
        type: "bar",
        label: 'Nombre de lancé',
        data: [15, 19, 39],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.8)',
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 99, 132, 1)'
      }]
    },
    // Les options du graphique
    options: {
      plugins: {
        title: {
            display: true,
            text: 'Chine'
            
        }
    },
      scales: {
        xAxes: [{
          type: 'time',
          time: {
            unit: 'year'
          }
        }],
    }
    //     // Ajout de l'animation Progressive Line
    //   animation: {
    //     duration: 1000,
    //     easing: 'linear',
    //     onProgress: function(animation) {
    //       progress.value = animation.animationObject.currentStep / animation.animationObject.numSteps;
    //     }
    //   }
    }
  });

  var ctx = document.getElementById('P6').getContext('2d');
  Chart.defaults.color = '#ffffff';
  Chart.defaults.borderColor = '#ffffff';
var chart = new Chart(ctx, {
    // Le type de graphique
    type: 'line',
    // Les données du graphique
    data: {
        labels: [2010, 2015, 2020],
        datasets: [
        {
        label: 'Avancé au fil du temps',
        data: [31, 29, 17],
        borderColor: 'rgba(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235)',
        pointBackgroundColor: 'rgba(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 99, 132, 1)'
        },{
        type: "bar",
        label: 'Nombre de lancé',
        data: [31, 29, 17],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.8)',
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 99, 132, 1)'
      }]
    },
    // Les options du graphique
    options: {
      plugins: {
        title: {
            display: true,
            text: 'Russie'
            
        }
    },
      scales: {
        xAxes: [{
          type: 'time',
          time: {
            unit: 'year'
          }
        }],
    }
    //     // Ajout de l'animation Progressive Line
    //   animation: {
    //     duration: 1000,
    //     easing: 'linear',
    //     onProgress: function(animation) {
    //       progress.value = animation.animationObject.currentStep / animation.animationObject.numSteps;
    //     }
    //   }
    }
  });

  var ctx = document.getElementById('P7').getContext('2d');
  Chart.defaults.color = '#ffffff';
  Chart.defaults.borderColor = '#ffffff';
var chart = new Chart(ctx, {
    // Le type de graphique
    type: 'line',
    // Les données du graphique
    data: {
        labels: [2010, 2015, 2020],
        datasets: [
        {
        label: 'Avancé au fil du temps',
        data: [6, 9, 5],
        borderColor: 'rgba(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235)',
        pointBackgroundColor: 'rgba(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 99, 132, 1)'
        },{
        type: "bar",
        label: 'Nombre de lancé',
        data: [6, 9, 5],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.8)',
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 99, 132, 1)'
      }]
    },
    // Les options du graphique
    options: {
      plugins: {
        title: {
            display: true,
            text: 'Europe'
            
        }
    },
      scales: {
        xAxes: [{
          type: 'time',
          time: {
            unit: 'year'
          }
        }],
    }
    //     // Ajout de l'animation Progressive Line
    //   animation: {
    //     duration: 1000,
    //     easing: 'linear',
    //     onProgress: function(animation) {
    //       progress.value = animation.animationObject.currentStep / animation.animationObject.numSteps;
    //     }
    //   }
    }
  });

  var ctx = document.getElementById('P8').getContext('2d');
  Chart.defaults.color = '#ffffff';
  Chart.defaults.borderColor = '#ffffff';
var chart = new Chart(ctx, {
    // Le type de graphique
    type: 'line',
    // Les données du graphique
    data: {
        labels: [2010, 2015, 2020],
        datasets: [
        {
        label: 'Avancé au fil du temps',
        data: [3, 5, 2],
        borderColor: 'rgba(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235)',
        pointBackgroundColor: 'rgba(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 99, 132, 1)'
        },{
        type: "bar",
        label: 'Nombre de lancé',
        data: [3, 5, 2],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.8)',
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 99, 132, 1)'
      }]
    },
    // Les options du graphique
    options: {
      plugins: {
        title: {
            display: true,
            text: 'Inde'
            
        }
    },
      scales: {
        xAxes: [{
          type: 'time',
          time: {
            unit: 'year'
          }
        }],
    }
    //     // Ajout de l'animation Progressive Line
    //   animation: {
    //     duration: 1000,
    //     easing: 'linear',
    //     onProgress: function(animation) {
    //       progress.value = animation.animationObject.currentStep / animation.animationObject.numSteps;
    //     }
    //   }
    }
  });

  var ctx = document.getElementById('P9').getContext('2d');
  Chart.defaults.color = '#ffffff';
  Chart.defaults.borderColor = '#ffffff';
var chart = new Chart(ctx, {
    // Le type de graphique
    type: 'line',
    // Les données du graphique
    data: {
        labels: [2010, 2015, 2020],
        datasets: [
        {
        label: 'Avancé au fil du temps',
        data: [2, 4, 4],
        borderColor: 'rgba(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235)',
        pointBackgroundColor: 'rgba(54, 162, 235)',
        pointBorderColor: '#ffffff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 99, 132, 1)'
        },{
        type: "bar",
        label: 'Nombre de lancé',
        data: [2, 4, 4],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.8)',
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 99, 132, 1)'
      }]
    },
    // Les options du graphique
    options: {
      plugins: {
        title: {
            display: true,
            text: 'Japon'
            
        }
    },
      scales: {
        xAxes: [{
          type: 'time',
          time: {
            unit: 'year'
          }
        }],
    }
    //     // Ajout de l'animation Progressive Line
    //   animation: {
    //     duration: 1000,
    //     easing: 'linear',
    //     onProgress: function(animation) {
    //       progress.value = animation.animationObject.currentStep / animation.animationObject.numSteps;
    //     }
    //   }
    }
  });

  document.querySelector("#P1").addEventListener("click",ok);

function ok(){
   document.querySelector("#P1").classList.add("background");
   document.querySelector("#Deuxieme").parentElement.classList.add("none");
   document.querySelector("#Troisieme").parentElement.classList.add("none");
   document.querySelector("#Premier").parentElement.classList.remove("none");

  document.querySelector("#P3").classList.remove("background");
  document.querySelector("#P2").classList.remove("background");

  // }
}

document.querySelector("#P2").addEventListener("click",ok2);

function ok2(){
  document.querySelector("#P2").classList.add("background");
  document.querySelector("#Premier").parentElement.classList.add("none");
  document.querySelector("#Troisieme").parentElement.classList.add("none");
  document.querySelector("#Deuxieme").parentElement.classList.remove("none");
  document.querySelector("#P1").classList.remove("background");
  document.querySelector("#P3").classList.remove("background");

}

document.querySelector("#P3").addEventListener("click",ok3);

function ok3(){
  document.querySelector("#P3").classList.add("background");
  document.querySelector("#Premier").parentElement.classList.add("none");
  document.querySelector("#Deuxieme").parentElement.classList.add("none");
  document.querySelector("#Troisieme").parentElement.classList.remove("none");
  document.querySelector("#P1").classList.remove("background");
  document.querySelector("#P2").classList.remove("background");

}

  document.querySelector("#Etat-Unis").addEventListener("click",ok4);

  function ok4(){
     document.querySelector("#Etat-Unis").classList.add("background");
     document.querySelector("#P4").parentElement.classList.remove("none");

     //auttres pays
     document.querySelector("#Chine").classList.remove("background");
     document.querySelector("#Russie").classList.remove("background");
     document.querySelector("#Europe").classList.remove("background");
     document.querySelector("#Inde").classList.remove("background");
     document.querySelector("#Japon").classList.remove("background");
    

     //Autre graph
     document.querySelector("#P5").parentElement.classList.add("none");
     document.querySelector("#P6").parentElement.classList.add("none");
     document.querySelector("#P7").parentElement.classList.add("none");
     document.querySelector("#P8").parentElement.classList.add("none");
     document.querySelector("#P9").parentElement.classList.add("none");

  }
 
  document.querySelector("#Chine").addEventListener("click",ok5);

  function ok5(){
     document.querySelector("#Chine").classList.add("background");
     document.querySelector("#P5").parentElement.classList.remove("none");

     //auttres pays
     document.querySelector("#Etat-Unis").classList.remove("background");
     document.querySelector("#Russie").classList.remove("background");
     document.querySelector("#Europe").classList.remove("background");
     document.querySelector("#Inde").classList.remove("background");
     document.querySelector("#Japon").classList.remove("background");
    

     //Autre graph
     document.querySelector("#P4").parentElement.classList.add("none");
     document.querySelector("#P6").parentElement.classList.add("none");
     document.querySelector("#P7").parentElement.classList.add("none");
     document.querySelector("#P8").parentElement.classList.add("none");
     document.querySelector("#P9").parentElement.classList.add("none");

  }
 
  document.querySelector("#Russie").addEventListener("click",ok6);

  function ok6(){
     document.querySelector("#Russie").classList.add("background");
     document.querySelector("#P6").parentElement.classList.remove("none");

     //auttres pays
     document.querySelector("#Etat-Unis").classList.remove("background");
     document.querySelector("#Chine").classList.remove("background");
     document.querySelector("#Europe").classList.remove("background");
     document.querySelector("#Inde").classList.remove("background");
     document.querySelector("#Japon").classList.remove("background");
    

     //Autre graph
     document.querySelector("#P4").parentElement.classList.add("none");
     document.querySelector("#P5").parentElement.classList.add("none");
     document.querySelector("#P7").parentElement.classList.add("none");
     document.querySelector("#P8").parentElement.classList.add("none");
     document.querySelector("#P9").parentElement.classList.add("none");

  }
 
  document.querySelector("#Europe").addEventListener("click",ok7);

  function ok7(){
     document.querySelector("#Europe").classList.add("background");
     document.querySelector("#P7").parentElement.classList.remove("none");

     //auttres pays
     document.querySelector("#Etat-Unis").classList.remove("background");
     document.querySelector("#Chine").classList.remove("background");
     document.querySelector("#Russie").classList.remove("background");
     document.querySelector("#Inde").classList.remove("background");
     document.querySelector("#Japon").classList.remove("background");
    

     //Autre graph
     document.querySelector("#P4").parentElement.classList.add("none");
     document.querySelector("#P5").parentElement.classList.add("none");
     document.querySelector("#P6").parentElement.classList.add("none");
     document.querySelector("#P8").parentElement.classList.add("none");
     document.querySelector("#P9").parentElement.classList.add("none");

  }
 
  document.querySelector("#Inde").addEventListener("click",ok8);

  function ok8(){
     document.querySelector("#Inde").classList.add("background");
     document.querySelector("#P8").parentElement.classList.remove("none");

     //auttres pays
     document.querySelector("#Etat-Unis").classList.remove("background");
     document.querySelector("#Chine").classList.remove("background");
     document.querySelector("#Russie").classList.remove("background");
     document.querySelector("#Europe").classList.remove("background");
     document.querySelector("#Japon").classList.remove("background");
    

     //Autre graph
     document.querySelector("#P4").parentElement.classList.add("none");
     document.querySelector("#P5").parentElement.classList.add("none");
     document.querySelector("#P6").parentElement.classList.add("none");
     document.querySelector("#P7").parentElement.classList.add("none");
     document.querySelector("#P9").parentElement.classList.add("none");

  }
 
  document.querySelector("#Japon").addEventListener("click",ok9);

  function ok9(){
     document.querySelector("#Japon").classList.add("background");
     document.querySelector("#P9").parentElement.classList.remove("none");

     //auttres pays
     document.querySelector("#Etat-Unis").classList.remove("background");
     document.querySelector("#Chine").classList.remove("background");
     document.querySelector("#Russie").classList.remove("background");
     document.querySelector("#Europe").classList.remove("background");
     document.querySelector("#Inde").classList.remove("background");
    

     //Autre graph
     document.querySelector("#P4").parentElement.classList.add("none");
     document.querySelector("#P5").parentElement.classList.add("none");
     document.querySelector("#P6").parentElement.classList.add("none");
     document.querySelector("#P7").parentElement.classList.add("none");
     document.querySelector("#P8").parentElement.classList.add("none");

  }
 