export interface APIResponse {
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

export interface ContentNode {
  __typename: string;
  contentType: {
    __typename: string;
    node: {
      __typename: string;
      name: string;
    };
  };
  id: string;
  title: string;
  uri: string;
  date: string;
  modified: string;
  strainTypes: {
    __typename: string;
    nodes: StrainType[];
  };
  details: {
    __typename: string;
    cannabinoids: Cannabinoid[];
    thc: THC;
  };
}

interface StrainType {
  __typename: string;
  name: string;
  slug: string;
}

interface Cannabinoid {
  __typename: string;
  abbreviation: string;
  quantityStart: number;
  quantityEnd: number;
}

interface THC {
  __typename: string;
  quantityStart: number;
  quantityEnd: number;
}
