// Sample initial phrases
let phrases = [
  "What is the latest news about",
  "How to learn",
  "Best practices for",
  "Explain the concept of",
  "Compare and contrast"
];

// DOM elements
const phrasesList = document.getElementById('phrasesList');
const searchQuery = document.getElementById('searchQuery');
const editPhrasesBtn = document.getElementById('editPhrasesBtn');
const editModal = document.getElementById('editModal');
const closeModal = document.getElementById('closeModal');
const cancelEditBtn = document.getElementById('cancelEditBtn');
const savePhrasesBtn = document.getElementById('savePhrasesBtn');
const editPhrasesContainer = document.getElementById('editPhrasesContainer');
const newPhraseInput = document.getElementById('newPhraseInput');
const addPhraseBtn = document.getElementById('addPhraseBtn');

// Initialize phrases list
function renderPhrases() {
  phrasesList.innerHTML = '';
  phrases.forEach(phrase => {
    const phraseElement = document.createElement('div');
    phraseElement.className = 'phrase-item';
    phraseElement.textContent = phrase;
    phraseElement.addEventListener('click', () => {
      // Append phrase to textarea
      const currentValue = searchQuery.value;
      searchQuery.value = currentValue ? `${currentValue} ${phrase}` : phrase;
      searchQuery.focus();
    });
    phrasesList.appendChild(phraseElement);
  });
}

// Open edit modal
function openEditModal() {
  editPhrasesContainer.innerHTML = '';
  
  phrases.forEach((phrase, index) => {
    const phraseEditItem = document.createElement('div');
    phraseEditItem.className = 'phrase-edit-item';
    phraseEditItem.style.display = 'flex';
    phraseEditItem.style.marginBottom = '10px';
    phraseEditItem.style.gap = '10px';
    
    const input = document.createElement('input');
    input.type = 'text';
    input.value = phrase;
    input.className = 'phrase-input';
    input.style.flex = '1';
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'edit-btn btn-danger';
    deleteBtn.addEventListener('click', () => {
      phrases.splice(index, 1);
      openEditModal(); // Refresh the modal
    });
    
    phraseEditItem.appendChild(input);
    phraseEditItem.appendChild(deleteBtn);
    editPhrasesContainer.appendChild(phraseEditItem);
  });
  
  editModal.style.display = 'flex';
}

// Save phrases from modal
function savePhrases() {
  const inputs = editPhrasesContainer.querySelectorAll('input');
  phrases = Array.from(inputs).map(input => input.value.trim()).filter(phrase => phrase !== '');
  
  // Add new phrase if provided
  const newPhrase = newPhraseInput.value.trim();
  if (newPhrase) {
    phrases.push(newPhrase);
    newPhraseInput.value = '';
  }
  
  renderPhrases();
  editModal.style.display = 'none';
  
  // Save to localStorage
  localStorage.setItem('searchPhrases', JSON.stringify(phrases));
}

// Event listeners
editPhrasesBtn.addEventListener('click', openEditModal);
closeModal.addEventListener('click', () => editModal.style.display = 'none');
cancelEditBtn.addEventListener('click', () => editModal.style.display = 'none');
savePhrasesBtn.addEventListener('click', savePhrases);
addPhraseBtn.addEventListener('click', () => {
  const newPhrase = newPhraseInput.value.trim();
  if (newPhrase) {
    phrases.push(newPhrase);
    newPhraseInput.value = '';
    openEditModal(); // Refresh the modal
  }
});

// Load phrases from localStorage if available
document.addEventListener('DOMContentLoaded', () => {
  const savedPhrases = localStorage.getItem('searchPhrases');
  if (savedPhrases) {
    phrases = JSON.parse(savedPhrases);
  }
  renderPhrases();
});

// Search function
function performSearch() {
  const query = document.getElementById("searchQuery").value;
  if (query) {
    window.location.href = `https://www.perplexity.ai/search?q=${encodeURIComponent(query)}`;
  } else {
    alert("Please enter a search query!");
    document.getElementById("searchQuery").classList.add("error");
  }
}