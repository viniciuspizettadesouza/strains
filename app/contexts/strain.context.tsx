"use client";

import React, { useState, createContext, ReactNode } from "react";
import { ContentNode } from "../interfaces/strains.interface";

export interface StateType {
  contentNodes: {
    __typename: string;
    pageInfo: {
      __typename: string;
      endCursor: string;
      hasNextPage: boolean;
    };
    nodes: ContentNode[];
  };
}

const initialState: StateType = {
  contentNodes: {
    __typename: "",
    pageInfo: {
      __typename: "",
      endCursor: "",
      hasNextPage: false,
    },
    nodes: [],
  },
};

type SetValueType = (
  newValue: StateType | ((prevState: StateType) => StateType)
) => void;

interface StrainContextType {
  state: StateType;
  setValue: SetValueType;
}

export const StrainContext = createContext<StrainContextType>({
  state: initialState,
  setValue: () => {},
});

interface StrainContextProviderProps {
  children: ReactNode;
}

export const StrainContextProvider = ({
  children,
}: StrainContextProviderProps) => {
  const [state, setState] = useState<StateType>(initialState);

  return (
    <StrainContext.Provider value={{ state, setValue: setState }}>
      {children}
    </StrainContext.Provider>
  );
};
