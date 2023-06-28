export default interface StrainInterface {
  strain: {
    id: string;
    title: string;
    uri: string;
    date: string;
    modified: string;
    strainTypes: {
      nodes: {
        name: string;
        slug: string;
        __typename: string;
      }[];
      __typename: string;
    };
    details: {
      cannabinoids: {
        abbreviation: string;
        quantityStart: number;
        quantityEnd: number;
        __typename: string;
      }[];
      thc: {
        quantityStart: number;
        quantityEnd: number;
        __typename: string;
      };
      __typename: string;
    };
    __typename: string;
  };
}
