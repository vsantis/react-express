import React, { createContext, Dispatch, ReactNode, FC, useReducer } from 'react';
import Items from '../domain/objects/Items';
import ItemDetail from '../domain/objects/ItemDetail';
import ItemRepository from '../infrastructure/ItemApi';
import { getItemsService, getItemDetailService } from '../domain/service/itemService';

type StateType = {
  isLoading?: boolean;
  categories?: Items['categories'];
  items?: Items['items'];
  detail?: ItemDetail['item'];
};

const initialState: StateType = {
  isLoading: false,
  categories: [],
  items: [],
};

const Actions = {
  loading: 'loading',
  detail: 'detail',
  search: 'search',
};

type ActionType = {
  type: keyof typeof Actions;
  payload: StateType;
};

type ReducerType = (state: StateType, action: ActionType) => StateType;

const reducer: ReducerType = (state, { type, payload }) => {
  switch (type) {
    case 'loading': {
      return { ...state, isLoading: payload.isLoading };
    }
    case 'search': {
      return { ...state, isLoading: false, categories: payload.categories, items: payload.items };
    }
    case 'detail': {
      return { ...state, isLoading: false, detail: payload.detail };
    }
    default: {
      return state;
    }
  }
};

const itemRepository = new ItemRepository();

const getItemsAction = (dispatch: Dispatch<ActionType>) => async (query: string) => {
  dispatch({ type: 'loading', payload: { isLoading: true } });
  try {
    const getItems = getItemsService(itemRepository);
    const result = await getItems(query);
    if (!result) {
      dispatch({ type: 'loading', payload: { isLoading: false } });
    }
    dispatch({ type: 'search', payload: { categories: result.categories, items: result.items } });
  } catch (error) {
    dispatch({ type: 'loading', payload: { isLoading: false } });
  }
};

const getItemDetailAction = (dispatch: Dispatch<ActionType>) => async (id: string) => {
  dispatch({ type: 'loading', payload: { isLoading: true } });
  try {
    const getItemDetail = getItemDetailService(itemRepository);
    const result = await getItemDetail(id);
    if (!result) {
      dispatch({ type: 'loading', payload: { isLoading: false } });
    }
    dispatch({ type: 'detail', payload: { detail: result.item } });
  } catch (error) {
    dispatch({ type: 'loading', payload: { isLoading: false } });
  }
};

type ActionsType = {
  getItems: ReturnType<typeof getItemsAction>;
  getItemDetail: ReturnType<typeof getItemDetailAction>;
};

type ContextType = StateType & ActionsType;
type ContextProps = { children: ReactNode };

export const Context = createContext<ContextType>(initialState as ContextType);

const SessionContextProvider: FC<ContextProps> = (props: ContextProps) => {
  const [state, dispatch] = useReducer<ReducerType>(reducer, initialState);

  const getItems = getItemsAction(dispatch);
  const getItemDetail = getItemDetailAction(dispatch);

  const value = { ...state, getItems, getItemDetail };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export default SessionContextProvider;
