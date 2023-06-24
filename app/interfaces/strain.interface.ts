export default interface StrainInterface {
  strain: {
    id: string;
    title: string;
    uri: string;
    date: string;
    modified: string;
    featuredImage: {
      node: {
        altText: string;
        title: string;
        id: string;
        sourceUrl: string;
        srcSet: string;
        mediaDetails: {
          width: number;
          height: number;
          __typename: string;
        };
        __typename: string;
      };
      __typename: string;
    };
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
