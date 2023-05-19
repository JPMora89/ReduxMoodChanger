
const mood = document.querySelector('#mood');
const happy = document.querySelector('#happy');
const sad = document.querySelector('#sad');
const angry = document.querySelector('#angry');
const confused = document.querySelector('#confused');
const reset = document.querySelector('#reset');
const body = document.querySelector('body');



function updateMood(state) {
    mood.innerText = state.mood;
  
    // Define background colors for each mood
    const backgroundColors = {
      '(っˆڡˆς)': 'lightblue',
      '٩(◕‿◕｡)۶': 'lightgreen',
      'ಥ_ಥ': 'lightsalmon',
      'ლಠ益ಠ)ლ': 'darkred',
      '⊙﹏⊙': 'lightgray',
    };
  
    // Set the background color based on the current mood
    body.style.backgroundColor = backgroundColors[state.mood];
  }
  
  const initialState = store.getState();
  updateMood(initialState);
  
  happy.addEventListener('click', () => {
    store.dispatch({ type: 'HAPPY' });
    const state = store.getState();
    updateMood(state);
  });
  
  sad.addEventListener('click', () => {
    store.dispatch({ type: 'SAD' });
    const state = store.getState();
    updateMood(state);
  });
  
  angry.addEventListener('click', () => {
    store.dispatch({ type: 'ANGRY' });
    const state = store.getState();
    updateMood(state);
  });
  
  confused.addEventListener('click', () => {
    store.dispatch({ type: 'CONFUSED' });
    const state = store.getState();
    updateMood(state);
  });
  
  reset.addEventListener('click', () => {
    store.dispatch({ type: 'RESET' });
    const state = store.getState();
    updateMood(state);
  });

