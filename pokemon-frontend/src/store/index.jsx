import { createStore } from 'redux';

// Ação para adicionar um card
export const addCard = (card) => {
  return {
    type: 'ADD_CARD',
    payload: card
  };
};

// Ação para adicionar um card à coleção
export const addToCollection = (card) => {
  return {
    type: 'ADD_TO_COLLECTION',
    payload: card
  };
};

// Ação para remover um card da coleção
export const removeFromCollection = (name) => {
  return {
    type: 'REMOVE_FROM_COLLECTION',
    payload: name
  };
};

// Ação para salvar a coleção no localStorage
export const saveCollection = (collection) => {
  localStorage.setItem('collection', JSON.stringify(collection));
};

// Ação para carregar a coleção do localStorage
export const loadCollection = (collection) => {
  return {
    type: 'LOAD_COLLECTION',
    payload: collection
  };
};

// Reducer
const initialState = {
  cards: [],
  collection: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return {
        ...state,
        cards: [...state.cards, action.payload]
      };
    case 'ADD_TO_COLLECTION':
      // Verificar se o card já existe na coleção
      const exists = state.collection.some(
        (item) => item.name === action.payload.name
      );
      if (exists) {
        return state;
      } else {
        const updatedCollection = [...state.collection, action.payload];
        saveCollection(updatedCollection); // Salvar a coleção atualizada
        return {
          ...state,
          collection: updatedCollection
        };
      }
    case 'REMOVE_FROM_COLLECTION':
      const updatedCollection = state.collection.filter(
        (item) => item.name !== action.payload
      );
      saveCollection(updatedCollection); // Salvar a coleção atualizada
      return {
        ...state,
        collection: updatedCollection
      };
    case 'LOAD_COLLECTION':
      return {
        ...state,
        collection: action.payload
      };
    default:
      return state;
  }
};

// Carregar coleção do localStorage
const storedCollection = localStorage.getItem('collection');
if (storedCollection) {
  initialState.collection = JSON.parse(storedCollection);
}

// Store
const store = createStore(reducer);

export default store;
